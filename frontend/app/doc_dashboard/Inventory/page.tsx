"use client";

import { useEffect, useState, ChangeEvent, FormEvent, useCallback } from "react";

// Define the interface for inventory items
interface InventoryItem {
  inventoryid: string;
  supplierinsuranceid: string;
  itemname: string;
  quantity: number;
  drug: boolean;
  available: "Yes" | "No";
}

// Define the type for form state
interface FormState {
  inventoryid: string;
  supplierinsuranceid: string;
  itemname: string;
  quantity: number;
  drug: boolean;
  available: "Yes" | "No";
}

export default function InventoryPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [form, setForm] = useState<FormState>({
    inventoryid: "",
    supplierinsuranceid: "",
    itemname: "",
    quantity: 0,
    drug: false,
    available: "Yes"
  });
  const [search, setSearch] = useState<string>("");

  // Fetch inventory items
  const fetchInventory = useCallback(async () => {
    try {
      const res = await fetch("/api/getinventory");
      if (!res.ok) throw new Error("Failed to fetch inventory");
      const result = await res.json();
      setInventory(result.inventory || []);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  }, []);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  // Handle form field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement; // Cast e.target to HTMLInputElement
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value // No need for "checked as boolean" after casting e.target
    }));
  };
  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Failed to add inventory");

      fetchInventory(); // Refresh the inventory list after adding
      setForm({
        inventoryid: "",
        supplierinsuranceid: "",
        itemname: "",
        quantity: 0,
        drug: false,
        available: "Yes"
      });
    } catch (error) {
      console.error("Error submitting inventory:", error);
    }
  };

  // Filtered & prioritized inventory list
  const filteredInventory = inventory.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.inventoryid.toLowerCase().includes(query) ||
      item.itemname.toLowerCase().includes(query)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>

      {/* Add Inventory Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          name="inventoryid"
          value={form.inventoryid}
          onChange={handleChange}
          placeholder="Inventory ID"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="supplierinsuranceid"
          value={form.supplierinsuranceid}
          onChange={handleChange}
          placeholder="Supplier Insurance ID"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="itemname"
          value={form.itemname}
          onChange={handleChange}
          placeholder="Item Name"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
          className="border p-2 rounded w-full"
        />
        <label className="block">
          <input
            type="checkbox"
            name="drug"
            checked={form.drug}
            onChange={handleChange}
            className="mr-2"
          />{" "}
          Drug
        </label>
        <label htmlFor="available" className="block mb-2">Available</label>
<select
  id="available"
  name="available"
  value={form.available}
  onChange={handleChange}
  className="border p-2 rounded w-full"
>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
</select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Inventory
        </button>
      </form>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by ID or Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Inventory List */}
      <h2 className="text-xl font-semibold mb-2">All Inventory Items</h2>
      <ul className="space-y-2">
        {filteredInventory.map((item) => (
          <li key={item.inventoryid} className="p-4 bg-white rounded shadow">
            <p>
              <strong>ID:</strong> {item.inventoryid}
            </p>
            <p>
              <strong>Supplier:</strong> {item.supplierinsuranceid}
            </p>
            <p>
              <strong>Name:</strong> {item.itemname}
            </p>
            <p>
              <strong>Quantity:</strong> {item.quantity}
            </p>
            <p>
              <strong>Drug:</strong> {item.drug ? "Yes" : "No"}
            </p>
            <p>
              <strong>Available:</strong> {item.available}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
