'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Patient {
  patientid: number;
  firstname: string;
  lastname: string;
  gender: string;
  dob: string;
  phone: string;
  relationship: string;
}

interface Prescription {
  prescriptionid: number;
  patientid: number;
  doctorid: number;
  dosageinstruction: string;
  issuedate: string;
  courseduration: string;
  quantity: number;
  consultationdate: string;
}

export default function PatientProfile() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch('/api/patientdetails');
        if (!res.ok) throw new Error('Failed to fetch patient details');

        const data = await res.json();

        if (data.patient) setPatient(data.patient);
        if (Array.isArray(data.prescriptions)) setPrescriptions(data.prescriptions);
      } catch (err: unknown) { // Specify `unknown` type here
        if (err instanceof Error) {
          setError(err.message); // Safely access `message` property
        } else {
          setError('Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Patient Profile</h1>
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go to Home Page
        </button>
      </div>

      {patient ? (
        <div className="bg-white p-4 rounded-lg shadow mb-6 space-y-2">
          <p><strong>Patient ID:</strong> {patient.patientid}</p>
          <p><strong>Name:</strong> {patient.firstname} {patient.lastname}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Date of Birth:</strong> {patient.dob}</p>
          <p><strong>Phone:</strong> {patient.phone}</p>
          <p><strong>Relationship:</strong> {patient.relationship}</p>
        </div>
      ) : (
        <p className="text-gray-600 mb-4">No patient data found.</p>
      )}

      <h2 className="text-xl font-semibold mb-2">Prescriptions</h2>
      <div className="space-y-4">
        {prescriptions.length === 0 ? (
          <p className="text-gray-600">No prescriptions found.</p>
        ) : (
          prescriptions.map((p) => (
            <div key={p.prescriptionid} className="bg-gray-50 p-4 rounded-md border">
              <p><strong>Prescription ID:</strong> {p.prescriptionid}</p>
              <p><strong>Doctor ID:</strong> {p.doctorid}</p>
              <p><strong>Dosage Instruction:</strong> {p.dosageinstruction}</p>
              <p><strong>Issue Date:</strong> {p.issuedate}</p>
              <p><strong>Course Duration:</strong> {p.courseduration}</p>
              <p><strong>Quantity:</strong> {p.quantity}</p>
              <p><strong>Consultation Date:</strong> {p.consultationdate}</p>
            </div>
          ))
        )}
      </div>

      <form method="POST" action="/auth/logout" className="inline">
  <button
    type="submit"
    className="text-sm text-gray-700 hover:text-red-600 font-semibold transition duration-200 ease-in-out bg-transparent border-none p-0 m-0 cursor-pointer"
  >
    Logout
  </button>
</form>

    </div>
  );
}
