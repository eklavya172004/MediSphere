// "use client";

// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";

// type Patient = {
//   patientid: number,
//   gender: string,
//   dob: number,
//   firstname: string,
//   lastname: string,
//   name: string,
//   phone: number,
//   relationship: string,
//   roomid?: number
// }

// export default function DoctorDashboard() {
//   const [patients, setPatient] = useState<Patient[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const [patientsPerPage] = useState(4);
  
//   useEffect(() => {
//     const fetchPatient = async () => {
//       try {
//         const res = await fetch('/api/patients')
//         const data = await res.json();
        
//         setPatient(data.patient || []);
//       } catch (error) {
//         console.log('Failed to fetch patients:', error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchPatient();
//   }, [])

//   const router = useRouter();

//   const handlePrescription = () => {
//     // Direct the user to prescription page
//     router.push('/prescription')
//   }
  
//   // Get current patients for pagination
//   const indexOfLastPatient = currentPage * patientsPerPage;
//   const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
//   const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);
  
//   // Change page
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
//   // Calculate total pages
//   const totalPages = Math.ceil(patients.length / patientsPerPage);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-10">MediSphere</h2>
//         <nav className="flex flex-col gap-4">
//           <a href="#" className="hover:text-blue-600 font-semibold">Patient Records</a>
//           <a href="#" className="hover:text-blue-600 font-semibold">Prescriptions</a>
//           <a href="#" className="hover:text-blue-600 font-semibold">Profile</a>
//           <a href="#" className="hover:text-red-600 font-semibold">Logout</a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-10">
//         <h1 className="text-3xl font-bold mb-8">Welcome</h1>

//         {/* Patient Details */}
//         <section className="mb-12">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-semibold">Patient List</h2>
//             <div className="text-sm text-gray-600">
//               Showing {indexOfFirstPatient + 1}-{Math.min(indexOfLastPatient, patients.length)} of {patients.length} patients
//             </div>
//           </div>
          
//           {loading ? (
//             <p>Loading patients...</p>
//           ) : patients.length === 0 ? (
//             <p>No patients found.</p>
//           ) : (
//             <>
//               <div className="grid md:grid-cols-2 gap-6 mb-4">
//                 {currentPatients.map((patient) => (
//                   <div
//                     key={patient.patientid}
//                     className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
//                   >
//                     <h3 className="text-xl font-semibold mb-2">{patient.name}</h3>
//                     <p className="text-gray-600">PatientID: {patient.patientid}</p>
//                     <p className="text-gray-600">Gender: {patient.gender}</p>
//                     <p className="text-gray-600">DOB: {patient.dob}</p>
//                     <p className="text-gray-600">Phone: {patient.phone}</p>
//                     <p className="text-gray-600">Relationship: {patient.relationship}</p>
//                     <p className="text-gray-600">RoomID: {patient.roomid}</p>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Pagination Controls */}
//               <div className="flex justify-center mt-6">
//                 <nav className="inline-flex rounded-md shadow">
//                   <button 
//                     onClick={() => currentPage > 1 && paginate(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={`px-3 py-1 rounded-l-md border ${currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
//                   >
//                     Previous
//                   </button>
                  
//                   {[...Array(totalPages)].map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => paginate(index + 1)}
//                       className={`px-3 py-1 border-t border-b ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
//                     >
//                       {index + 1}
//                     </button>
//                   ))}
                  
//                   <button 
//                     onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={`px-3 py-1 rounded-r-md border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
//                   >
//                     Next
//                   </button>
//                 </nav>
//               </div>
//             </>
//           )}
//         </section>

//         {/* Prescriptions Section */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Recent Prescriptions</h2>
//           <div className="bg-white p-6 rounded-lg shadow">
//             <p className="text-gray-700 mb-4">You have no recent prescriptions. Start creating one for your patients.</p>
//             <button onClick={handlePrescription} className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
//               Create Prescription
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 
export default function DashboardPage(){
  const router = useRouter();

  useEffect(() => {
    
    router.push("/doc_dashboard/patient");

  },[router])

  return (
    <div>Redirecting...</div>
  );
}