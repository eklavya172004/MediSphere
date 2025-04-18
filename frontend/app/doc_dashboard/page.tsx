"use client";

import React from "react";

export default function DoctorDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-10">MediSphere</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:text-blue-600 font-semibold">Patient Records</a>
          <a href="#" className="hover:text-blue-600 font-semibold">Prescriptions</a>
          <a href="#" className="hover:text-blue-600 font-semibold">Profile</a>
          <a href="#" className="hover:text-red-600 font-semibold">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Welcome, Dr. John Doe</h1>

        {/* Patient Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Patient List</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example Patient Card */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Age: 29</p>
              <p className="text-gray-600">Condition: Diabetes</p>
              <button className="mt-4 px-4 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
                View Details
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Robert Brown</h3>
              <p className="text-gray-600">Age: 45</p>
              <p className="text-gray-600">Condition: Hypertension</p>
              <button className="mt-4 px-4 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
                View Details
              </button>
            </div>

            {/* More patient cards here */}
          </div>
        </section>

        {/* Prescriptions Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recent Prescriptions</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 mb-4">You have no recent prescriptions. Start creating one for your patients.</p>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Create Prescription
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
