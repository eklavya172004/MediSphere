'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function RecordsPage() {
  const [form, setForm] = useState({
    recordid: '',
    dateadmit: '',
    datedischarge: '',
    treatment: '',
    doctorid: '',
    patientid: '',
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Record added successfully');
        setForm({ recordid: '', dateadmit: '', datedischarge: '', treatment: '', doctorid: '', patientid: '' });
        fetchRecords();
      } else {
        toast.error(data.error || 'Error submitting record');
      }
    } catch (error) {
      toast.error('Network error');
    }
  };

  const fetchRecords = async () => {
    try {
      const res = await fetch('/api/getrecords');
      const data = await res.json();
      if (res.ok) setRecords(data.records);
      else toast.error(data.error || 'Failed to load records');
    } catch (error) {
      toast.error('Failed to fetch records');
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Patient Records</h1>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <input
            name="recordid"
            value={form.recordid}
            onChange={handleChange}
            placeholder="Record ID"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="date"
            name="dateadmit"
            value={form.dateadmit}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="date"
            name="datedischarge"
            value={form.datedischarge}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            name="treatment"
            value={form.treatment}
            onChange={handleChange}
            placeholder="Treatment"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            name="doctorid"
            value={form.doctorid}
            onChange={handleChange}
            placeholder="Doctor ID"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            name="patientid"
            value={form.patientid}
            onChange={handleChange}
            placeholder="Patient ID"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg col-span-1 md:col-span-2 hover:bg-gray-800 transition"
          >
            Submit Record
          </button>
        </form>

        {/* Records Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">All Records</h2>

        {records.length === 0 ? (
          <p className="text-center text-gray-500">No records available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {records.map((r: any) => (
              <div key={r.recordid} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <p className="text-gray-700"><span className="font-semibold">Record ID:</span> {r.recordid}</p>
                <p className="text-gray-700"><span className="font-semibold">Admit Date:</span> {r.dateadmit}</p>
                <p className="text-gray-700"><span className="font-semibold">Discharge Date:</span> {r.datedischarge}</p>
                <p className="text-gray-700"><span className="font-semibold">Treatment:</span> {r.treatment}</p>
                <p className="text-gray-700"><span className="font-semibold">Doctor ID:</span> {r.doctorid}</p>
                <p className="text-gray-700"><span className="font-semibold">Patient ID:</span> {r.patientid}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
