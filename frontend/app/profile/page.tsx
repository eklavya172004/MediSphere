'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type PatientData = {
  firstname: string;
  lastname: string;
  name: string;
  gender: string;
  dob: string;
  phone: string;
  relationship: string;
  roomid: number;
  patientid: number;
};

type Prescription = {
  prescriptionid: number;
  doctorid: number;
  dosageinstruction: string;
  issuedate: string;
  courseduration: string;
  medid: number;
  quantity: number;
  consultationdate: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

  useEffect(() => {
    // Simulate fetching patient and prescription data
    const fetchedPatient: PatientData = {
      firstname: 'John',
      lastname: 'Doe',
      name: 'John Doe',
      gender: 'Male',
      dob: '1995-05-20',
      phone: '9876543210',
      relationship: 'Self',
      roomid: 102,
      patientid: 123456,
    };

    const fetchedPrescriptions: Prescription[] = [
      {
        prescriptionid: 1,
        doctorid: 101,
        dosageinstruction: 'Take 1 tablet twice daily after meals',
        issuedate: '2025-04-18T10:30:00Z',
        courseduration: '5 days',
        medid: 501,
        quantity: 10,
        consultationdate: '2025-04-18',
      },
      {
        prescriptionid: 2,
        doctorid: 102,
        dosageinstruction: 'Apply cream once at night',
        issuedate: '2025-04-10T14:00:00Z',
        courseduration: '2 weeks',
        medid: 502,
        quantity: 1,
        consultationdate: '2025-04-10',
      },
    ];

    setPatient(fetchedPatient);
    setPrescriptions(fetchedPrescriptions);
  }, []);

  const handleLogout = () => {
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Patient Dashboard</h1>

        {patient ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <p className="font-semibold">First Name:</p>
              <p className="mb-4">{patient.firstname}</p>
            </div>

            <div>
              <p className="font-semibold">Last Name:</p>
              <p className="mb-4">{patient.lastname}</p>
            </div>

            <div>
              <p className="font-semibold">Full Name:</p>
              <p className="mb-4">{patient.name}</p>
            </div>

            <div>
              <p className="font-semibold">Gender:</p>
              <p className="mb-4">{patient.gender}</p>
            </div>

            <div>
              <p className="font-semibold">Date of Birth:</p>
              <p className="mb-4">{patient.dob}</p>
            </div>

            <div>
              <p className="font-semibold">Phone Number:</p>
              <p className="mb-4">{patient.phone}</p>
            </div>

            <div>
              <p className="font-semibold">Relationship:</p>
              <p className="mb-4">{patient.relationship}</p>
            </div>

            <div>
              <p className="font-semibold">Room ID:</p>
              <p className="mb-4">{patient.roomid}</p>
            </div>

            <div>
              <p className="font-semibold">Patient ID:</p>
              <p className="mb-4">{patient.patientid}</p>
            </div>
          </div>
        ) : (
          <p className="text-center mb-10">Loading patient information...</p>
        )}

        {/* Prescriptions */}
        <h2 className="text-xl font-bold mb-4">My Prescriptions</h2>
        {prescriptions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prescriptions.map((prescription) => (
              <div
                key={prescription.prescriptionid}
                className="border border-gray-300 p-4 rounded-lg shadow-sm"
              >
                <p><span className="font-semibold">Prescription ID:</span> {prescription.prescriptionid}</p>
                <p><span className="font-semibold">Doctor ID:</span> {prescription.doctorid}</p>
                <p><span className="font-semibold">Medication ID:</span> {prescription.medid}</p>
                <p><span className="font-semibold">Dosage:</span> {prescription.dosageinstruction}</p>
                <p><span className="font-semibold">Course Duration:</span> {prescription.courseduration}</p>
                <p><span className="font-semibold">Quantity:</span> {prescription.quantity}</p>
                <p><span className="font-semibold">Consultation Date:</span> {prescription.consultationdate}</p>
                <p><span className="font-semibold">Issued On:</span> {new Date(prescription.issuedate).toLocaleString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No prescriptions available.</p>
        )}

        <div className="mt-10 text-center">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
