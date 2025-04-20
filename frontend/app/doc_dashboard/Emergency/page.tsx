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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Emergency Case</h1>

      <form onSubmit={handleSubmit} className="mb-10 space-y-4 bg-white p-6 rounded-xl shadow-md">
        <input
          type="text"
          name="emergencyid"
          placeholder="Emergency ID"
          value={form.emergencyid}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

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

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="natureofdisaster"
          placeholder="Nature of Disaster"
          value={form.natureofdisaster}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="patientid"
          placeholder="Patient ID"
          value={form.patientid}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Submit Emergency Case"}
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Reported Emergency Cases</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((ec) => (
          <div key={ec.emergencyid} className="p-4 bg-white rounded-xl shadow-md border">
            <p className="mb-1"><strong>ID:</strong> {ec.emergencyid}</p>
            <p className="mb-1"><strong>Date & Time:</strong> {new Date(ec.datetime).toLocaleString()}</p>
            <p className="mb-1"><strong>Location:</strong> {ec.location}</p>
            <p className="mb-1 flex items-center gap-2">
              <strong>Disaster:</strong>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                {ec.natureofdisaster}
              </span>
            </p>
            <p className="mb-1"><strong>Patient ID:</strong> {ec.patientid}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
