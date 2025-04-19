"use client";

import React from "react";

export default function Profile() {
  // This could be fetched from an API in a real application
  const doctorProfile = {
    name: "Dr. Jane Smith",
    specialty: "Cardiologist",
    email: "jane.smith@medisphere.com",
    phone: "+1 (555) 123-4567",
    department: "Cardiology",
    license: "MED123456789",
    joinedDate: "January 15, 2020"
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              {doctorProfile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-semibold">{doctorProfile.name}</h2>
              <p className="text-blue-600">{doctorProfile.specialty}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p>{doctorProfile.email}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p>{doctorProfile.phone}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Department</p>
              <p>{doctorProfile.department}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">License Number</p>
              <p>{doctorProfile.license}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Joined</p>
              <p>{doctorProfile.joinedDate}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </section>
    </>
  );
}