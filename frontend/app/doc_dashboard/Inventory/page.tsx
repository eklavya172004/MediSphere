"use client";

import { useEffect, useState } from "react";

export default function InventoryPage() {
  const [inventory, setInventory] = useState<any[]>([]);
  const [form, setForm] = useState({
    inventoryid: "",
    supplierinsuranceid: "",
    itemname: "",
    quantity: 0,
    drug: false,
    available: "Yes"
  });
  const [search, setSearch] = useState("");

  const fetchInventory = async () => {
    const res = await fetch("/api/getinventory");
    const result = await res.json();
    setInventory(result.inventory || []);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      fetchInventory();
      setForm({
        inventoryid: "",
        supplierinsuranceid: "",
        itemname: "",
        quantity: 0,
        drug: false,
        available: "Yes"
      });
    }
  };

  // Filtered & prioritized list
  const filteredInventory = [...inventory].sort((a, b) => {
    const query = search.toLowerCase();
  
    const aMatches =
      String(a.inventoryid).toLowerCase().includes(query) ||
      String(a.itemname).toLowerCase().includes(query);
  
    const bMatches =
      String(b.inventoryid).toLowerCase().includes(query) ||
      String(b.itemname).toLowerCase().includes(query);
  
    return Number(bMatches) - Number(aMatches);
  });
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>

      {/* Add Inventory Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input type="text" name="inventoryid" value={form.inventoryid} onChange={handleChange} placeholder="Inventory ID" required className="border p-2 rounded w-full" />
        <input type="text" name="supplierinsuranceid" value={form.supplierinsuranceid} onChange={handleChange} placeholder="Supplier Insurance ID" required className="border p-2 rounded w-full" />
        <input type="text" name="itemname" value={form.itemname} onChange={handleChange} placeholder="Item Name" required className="border p-2 rounded w-full" />
        <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" required className="border p-2 rounded w-full" />
        <label className="block">
          <input type="checkbox" name="drug" checked={form.drug} onChange={handleChange} className="mr-2" /> Drug
        </label>
        <select name="available" value={form.available} onChange={handleChange} className="border p-2 rounded w-full">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Inventory</button>
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
        {filteredInventory.map((item, idx) => (
          <li key={idx} className="p-4 bg-white rounded shadow">
            <p><strong>ID:</strong> {item.inventoryid}</p>
            <p><strong>Supplier:</strong> {item.supplierinsuranceid}</p>
            <p><strong>Name:</strong> {item.itemname}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Drug:</strong> {item.drug ? "Yes" : "No"}</p>
            <p><strong>Available:</strong> {item.available}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
