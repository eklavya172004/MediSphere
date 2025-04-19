
// File: app/dashboard/patients/page.ts"use client";
'use client'

import React, { useEffect, useState } from "react";

type Patient = {
  patientid: number,
  gender: string,
  dob: number,
  firstname: string,
  lastname: string,
  name: string,
  phone: number,
  relationship: string,
  roomid?: number
}

export default function PatientRecords() {
  const [patients, setPatient] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(4);
  
  // Search states
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Patient[]>([]);
  
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await fetch('/api/patients')
        const data = await res.json();
        
        setPatient(data.patient || []);
        setSearchResults(data.patient || []);
      } catch (error) {
        console.log('Failed to fetch patients:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPatient();
  }, [])
  
  // Search functionality
  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(patients);
      setCurrentPage(1);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const results = patients.filter(patient => 
      patient.name.toLowerCase().includes(term) || 
      patient.patientid.toString().includes(term)
    );
    
    setSearchResults(results);
    setCurrentPage(1);
  }, [searchTerm, patients]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }
  
  // Get current patients for pagination
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = searchResults.slice(indexOfFirstPatient, indexOfLastPatient);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Calculate total pages
  const totalPages = Math.ceil(searchResults.length / patientsPerPage);

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Patient Records</h1>

      {/* Patient Details */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Patient List</h2>
          
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or ID..."
              className="px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              className="w-5 h-5 absolute right-3 top-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 mb-4">
          {searchResults.length > 0 ? (
            <>Showing {Math.min(indexOfFirstPatient + 1, searchResults.length)}-{Math.min(indexOfLastPatient, searchResults.length)} of {searchResults.length} patients</>
          ) : (
            <>No patients match your search criteria</>
          )}
        </div>
        
        {loading ? (
          <p>Loading patients...</p>
        ) : searchResults.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p>No patients found. Try a different search term.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              {currentPatients.map((patient) => (
                <div
                  key={patient.patientid}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{patient.name}</h3>
                  <p className="text-gray-600">PatientID: {patient.patientid}</p>
                  <p className="text-gray-600">Gender: {patient.gender}</p>
                  <p className="text-gray-600">DOB: {patient.dob}</p>
                  <p className="text-gray-600">Phone: {patient.phone}</p>
                  <p className="text-gray-600">Relationship: {patient.relationship}</p>
                  <p className="text-gray-600">RoomID: {patient.roomid}</p>
                </div>
              ))}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
                <nav className="inline-flex rounded-md shadow">
                  <button 
                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-l-md border ${currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`px-3 py-1 border-t border-b ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-r-md border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
