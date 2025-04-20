'use client';

import React, { useEffect, useState } from "react";

type Doctor = {
  doctorid: number;
  name: string;
  specialization: string;
  available: boolean;
  contact: string;
};

export default function Profile() {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/getdoctor');
        const result = await res.json();

        if (res.ok) {
          setDoctor(result.doctor);
        } else {
          console.error('Failed to fetch doctor details:', result.error);
        }
      } catch (error) {
        console.error('Error fetching doctor profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500 text-lg">Loading profile...</p>
    </div>
  );

  if (!doctor) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-red-500 text-lg">Doctor profile not found.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Doctor Profile</h1>

        <section className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-3xl font-bold text-white">
              {doctor.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
              <h2 className="text-2xl font-semibold">{doctor.name}</h2>
              <p className="text-gray-500">{doctor.specialization}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 bg-gray-50 rounded-xl shadow-inner">
              <p className="text-gray-500 text-sm mb-1">Contact Number</p>
              <p className="text-lg font-medium">{doctor.contact}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl shadow-inner">
              <p className="text-gray-500 text-sm mb-1">Doctor ID</p>
              <p className="text-lg font-medium">{doctor.doctorid}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl shadow-inner">
              <p className="text-gray-500 text-sm mb-1">Availability</p>
              <p className="text-lg font-medium">{doctor.available ? 'Available' : 'Not Available'}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl shadow-inner">
              <p className="text-gray-500 text-sm mb-1">Specialization</p>
              <p className="text-lg font-medium">{doctor.specialization}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
