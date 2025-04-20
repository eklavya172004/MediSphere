'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

type Shift = {
  shiftid: string;
  starttime: string;
  night: boolean;
  morning: boolean;
  evening: boolean;
  receptionistid: number;
};

export default function ShiftPage() {
  const [form, setForm] = useState({
    shiftid: '',
    starttime: '',
    night: false,
    morning: false,
    evening: false,
    receptionistid: ''
  });

  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/shift', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, receptionistid: Number(form.receptionistid) }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || 'Shift created successfully');
        setForm({ shiftid: '', starttime: '', night: false, morning: false, evening: false, receptionistid: '' });
        fetchShifts();
      } else {
        toast.error(data.error || 'Error creating shift');
      }
    } catch (err) {
      toast.error('Unexpected error');
      console.log(err);
    }
  };

  const fetchShifts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/getshift');
      const data = await res.json();
      if (res.ok) setShifts(data.shifts || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchShifts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Manage Shifts</h1>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <input
            name="shiftid"
            value={form.shiftid}
            onChange={handleChange}
            required
            placeholder="Shift ID"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="time"
            name="starttime"
            value={form.starttime}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-4 col-span-1 md:col-span-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="morning" checked={form.morning} onChange={handleChange} />
              Morning
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="evening" checked={form.evening} onChange={handleChange} />
              Evening
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="night" checked={form.night} onChange={handleChange} />
              Night
            </label>
          </div>

          <input
            name="receptionistid"
            type="number"
            value={form.receptionistid}
            onChange={handleChange}
            required
            placeholder="Receptionist ID"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg col-span-1 md:col-span-2 hover:bg-blue-700 transition"
          >
            Add Shift
          </button>
        </form>

        {/* Shifts Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">All Shifts</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : shifts.length === 0 ? (
          <p className="text-center text-gray-500">No shifts available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shifts.map((shift) => (
              <div key={shift.shiftid} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <p className="text-gray-700"><span className="font-semibold">Shift ID:</span> {shift.shiftid}</p>
                <p className="text-gray-700"><span className="font-semibold">Start Time:</span> {shift.starttime}</p>
                <p className="text-gray-700"><span className="font-semibold">Receptionist ID:</span> {shift.receptionistid}</p>
                <p className="text-gray-700"><span className="font-semibold">Morning:</span> {shift.morning ? 'Yes' : 'No'}</p>
                <p className="text-gray-700"><span className="font-semibold">Evening:</span> {shift.evening ? 'Yes' : 'No'}</p>
                <p className="text-gray-700"><span className="font-semibold">Night:</span> {shift.night ? 'Yes' : 'No'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
