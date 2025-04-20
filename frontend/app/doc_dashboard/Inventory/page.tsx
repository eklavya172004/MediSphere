'use client';

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

  const filteredInventory = [...inventory].sort((a, b) => {
    const query = search.toLowerCase();
    const aMatches = String(a.inventoryid).toLowerCase().includes(query) || String(a.itemname).toLowerCase().includes(query);
    const bMatches = String(b.inventoryid).toLowerCase().includes(query) || String(b.itemname).toLowerCase().includes(query);
    return Number(bMatches) - Number(aMatches);
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Inventory Management</h1>

        {/* Add Inventory Form */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4">Add New Inventory</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="inventoryid" value={form.inventoryid} onChange={handleChange} placeholder="Inventory ID" required className="border p-3 rounded-lg" />
            <input type="text" name="supplierinsuranceid" value={form.supplierinsuranceid} onChange={handleChange} placeholder="Supplier Insurance ID" required className="border p-3 rounded-lg" />
            <input type="text" name="itemname" value={form.itemname} onChange={handleChange} placeholder="Item Name" required className="border p-3 rounded-lg" />
            <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" required className="border p-3 rounded-lg" />
            
            <div className="flex items-center gap-2">
              <input type="checkbox" name="drug" checked={form.drug} onChange={handleChange} className="w-5 h-5" />
              <label className="text-gray-700">Drug</label>
            </div>

            <select name="available" value={form.available} onChange={handleChange} className="border p-3 rounded-lg">
              <option value="Yes">Available</option>
              <option value="No">Not Available</option>
            </select>

            <div className="md:col-span-2">
              <button type="submit" className="bg-black hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold">
                Add Inventory
              </button>
            </div>
          </form>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by Inventory ID or Item Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-4 rounded-lg w-full"
          />
        </div>

        {/* Inventory List */}
        <h2 className="text-2xl font-semibold mb-4">Inventory List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredInventory.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <p><span className="font-semibold text-gray-700">Inventory ID:</span> {item.inventoryid}</p>
              <p><span className="font-semibold text-gray-700">Supplier:</span> {item.supplierinsuranceid}</p>
              <p><span className="font-semibold text-gray-700">Item Name:</span> {item.itemname}</p>
              <p><span className="font-semibold text-gray-700">Quantity:</span> {item.quantity}</p>
              <p><span className="font-semibold text-gray-700">Drug:</span> {item.drug ? "Yes" : "No"}</p>
              <p><span className="font-semibold text-gray-700">Available:</span> {item.available}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
