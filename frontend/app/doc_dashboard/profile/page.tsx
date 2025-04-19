"use client";

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
    },[])

    if (loading) return <p>Loading profile...</p>;

    if (!doctor) return <p>Doctor profile not found.</p>;

  return (
    <>
     <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

<section className="mb-8">
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center mb-6">
      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
        {doctor.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="ml-6">
        <h2 className="text-2xl font-semibold">{doctor.name}</h2>
        <p className="text-blue-600">{doctor.specialization}</p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <p className="text-gray-500 text-sm">Contact</p>
        <p>{doctor.contact}</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm">Doctor ID</p>
        <p>{doctor.doctorid}</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm">Available</p>
        <p>{doctor.available ? 'Yes' : 'No'}</p>
      </div>
    </div>
  </div>
</section>
{/* </> */}
    </>
  );
}