'use client';

import { useState, useEffect } from "react";

type EmergencyCase = {
  emergencyid: string;
  datetime: string;
  location: string;
  natureofdisaster: string;
  patientid: string;
};

export default function EmergencyCasePage() {
  const [form, setForm] = useState<EmergencyCase>({
    emergencyid: "",
    datetime: "",
    location: "",
    natureofdisaster: "",
    patientid: "",
  });

  const [cases, setCases] = useState<EmergencyCase[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/emergency", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Emergency case submitted!");
      setForm({
        emergencyid: "",
        datetime: "",
        location: "",
        natureofdisaster: "",
        patientid: "",
      });
      fetchCases();
    } else {
      alert(data.error || "Failed to submit emergency case.");
    }
    setLoading(false);
  };

  const fetchCases = async () => {
    const res = await fetch("/api/getemergency");
    const data = await res.json();
    if (res.ok) {
      setCases(data.cases);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Emergency Case</h1>

      <form onSubmit={handleSubmit} className="mb-10 space-y-4 bg-white p-6 rounded shadow">
        <input type="text" name="emergencyid" placeholder="Emergency ID" value={form.emergencyid} onChange={handleChange} className="w-full border p-2 rounded" required />
        <label className="block">
  <span className="text-sm text-gray-600">Date & Time</span>
  <input
    type="datetime-local"
    name="datetime"
    value={form.datetime}
    onChange={handleChange}
    className="w-full border p-2 rounded mt-1"
    required
  />
</label>
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="natureofdisaster" placeholder="Nature of Disaster" value={form.natureofdisaster} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="patientid" placeholder="Patient ID" value={form.patientid} onChange={handleChange} className="w-full border p-2 rounded" required />
        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {loading ? "Submitting..." : "Submit Emergency Case"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Reported Emergency Cases</h2>
      <ul className="space-y-4">
        {cases.map((ec) => (
          <li key={ec.emergencyid} className="p-4 bg-white rounded shadow">
            <p><strong>ID:</strong> {ec.emergencyid}</p>
            <p><strong>Date & Time:</strong> {ec.datetime}</p>
            <p><strong>Location:</strong> {ec.location}</p>
            <p><strong>Disaster:</strong> {ec.natureofdisaster}</p>
            <p><strong>Patient ID:</strong> {ec.patientid}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
