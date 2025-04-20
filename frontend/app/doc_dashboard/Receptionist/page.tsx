"use client";
import { useEffect, useState } from "react";

type Receptionist = {
  name: string;
  phone: string;
  receptionistid: string;
};

type Shift = {
  shiftid: string;
  starttime: string;
  night: boolean;
  morning: boolean;
  evening: boolean;
};

export default function ReceptionistProfilePage() {
  const [receptionist, setReceptionist] = useState<Receptionist | null>(null);
  const [shift, setShift] = useState<Shift | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReceptionistDetails = async () => {
      try {
        const res = await fetch("/api/receptionistdetails");
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Something went wrong");
        } else {
          setReceptionist(data.receptionist);
          setShift(data.shift);
        }
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchReceptionistDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600 font-semibold">{error}</p>;

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6">Receptionist Profile</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Profile Details</h2>
        <p><strong>Name:</strong> {receptionist?.name}</p>
        <p><strong>Phone:</strong> {receptionist?.phone}</p>
        <p><strong>Receptionist ID:</strong> {receptionist?.receptionistid}</p>
      </div>

      {shift ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Shift Details</h2>
          <p><strong>Shift ID:</strong> {shift.shiftid}</p>
          <p><strong>Start Time:</strong> {shift.starttime}</p>
          <p><strong>Night:</strong> {shift.night ? "Yes" : "No"}</p>
          <p><strong>Morning:</strong> {shift.morning ? "Yes" : "No"}</p>
          <p><strong>Evening:</strong> {shift.evening ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>No shift data available.</p>
      )}
    </div>
  );
}
