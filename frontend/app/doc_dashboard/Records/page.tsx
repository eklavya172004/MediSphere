'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface Record {
  recordid: string;
  dateadmit: string;
  datedischarge: string;
  treatment: string;
  doctorid: string;
  patientid: string;
}

export default function RecordsPage() {
  const [form, setForm] = useState({
    recordid: '',
    dateadmit: '',
    datedischarge: '',
    treatment: '',
    doctorid: '',
    patientid: '',
  });

  const [records, setRecords] = useState<Record[]>([]);

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
    } catch (error: unknown) { // Specify `unknown` type here
      if (error instanceof Error) {
        toast.error(error.message); // Safely access `message` property
      } else {
        toast.error('Network error');
      }
    }
  };

  const fetchRecords = async () => {
    try {
      const res = await fetch('/api/getrecords');
      const data = await res.json();
      if (res.ok) setRecords(data.records);
      else toast.error(data.error || 'Failed to load records');
    } catch (error: unknown) {
        if (error instanceof Error) {
            toast.error('failed to fetch'); // Safely access `message` property
          } else {
            toast.error('Network error');
          }
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Patient Records</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input name="recordid" value={form.recordid} onChange={handleChange} placeholder="Record ID" className="border p-2 rounded" required />
        <input type="date" name="dateadmit" value={form.dateadmit} onChange={handleChange} placeholder="Date Admit" className="border p-2 rounded" required />
        <input type="date" name="datedischarge" value={form.datedischarge} onChange={handleChange} placeholder="Date Discharge" className="border p-2 rounded" required />
        <input name="treatment" value={form.treatment} onChange={handleChange} placeholder="Treatment" className="border p-2 rounded" required />
        <input name="doctorid" value={form.doctorid} onChange={handleChange} placeholder="Doctor ID" className="border p-2 rounded" required />
        <input name="patientid" value={form.patientid} onChange={handleChange} placeholder="Patient ID" className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded col-span-1 md:col-span-2">Submit</button>
      </form>

      <h2 className="text-xl font-semibold mb-4">All Records</h2>
      <ul className="space-y-4">
        {records.length === 0 ? (
          <p>No records found.</p>
        ) : (
          records.map((r) => (
            <li key={r.recordid} className="bg-white p-4 shadow rounded">
              <p><strong>Record ID:</strong> {r.recordid}</p>
              <p><strong>Admit Date:</strong> {r.dateadmit}</p>
              <p><strong>Discharge Date:</strong> {r.datedischarge}</p>
              <p><strong>Treatment:</strong> {r.treatment}</p>
              <p><strong>Doctor ID:</strong> {r.doctorid}</p>
              <p><strong>Patient ID:</strong> {r.patientid}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
