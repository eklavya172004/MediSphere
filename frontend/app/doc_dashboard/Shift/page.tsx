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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Shifts</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md mb-10">
        <input name="shiftid" value={form.shiftid} onChange={handleChange} required placeholder="Shift ID" className="w-full p-2 border rounded" />
        <input
  type="time"
  name="starttime"
  value={form.starttime}
  onChange={handleChange}
  required
  placeholder="Start Time"
  className="w-full p-2 border rounded"
/>

        <div className="flex gap-4">
          <label><input type="checkbox" name="morning" checked={form.morning} onChange={handleChange} /> Morning</label>
          <label><input type="checkbox" name="evening" checked={form.evening} onChange={handleChange} /> Evening</label>
          <label><input type="checkbox" name="night" checked={form.night} onChange={handleChange} /> Night</label>
        </div>

        <input name="receptionistid" type="number" value={form.receptionistid} onChange={handleChange} required placeholder="Receptionist ID" className="w-full p-2 border rounded" />

        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Shift</button>
      </form>

      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">All Shifts</h2>
        {loading ? <p>Loading...</p> : (
          <ul className="space-y-2">
            {shifts.map((shift) => (
              <li key={shift.shiftid} className="border p-4 rounded">
                <p><strong>Shift ID:</strong> {shift.shiftid}</p>
                <p><strong>Start Time:</strong> {shift.starttime}</p>
                <p><strong>Receptionist ID:</strong> {shift.receptionistid}</p>
                <p><strong>Morning:</strong> {shift.morning ? 'Yes' : 'No'}</p>
                <p><strong>Evening:</strong> {shift.evening ? 'Yes' : 'No'}</p>
                <p><strong>Night:</strong> {shift.night ? 'Yes' : 'No'}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
