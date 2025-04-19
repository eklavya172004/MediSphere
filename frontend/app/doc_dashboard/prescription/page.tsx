'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Prescription = {
    prescriptionid: string;
    doctorid: string;
    patientid: string;
    issuedate: string;
    dosageinstruction?: string;
    courseduration?: string;
    medid?: string;
    quantity?: number;
    consultationdate?: string;
    billid?: string;
  };

export default function DashboardPrescription(){
    const router = useRouter();
    // const router = useRouter();
    const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
    const [loading, setLoading] = useState(true);

    const handlePrescription = () => {
        router.push("/prescription");
    }

    useEffect(() => {
        const fetchprescription = async () => {
            setLoading(true);
            try {
              const res = await fetch("/api/getprescription");
              const result = await res.json();
      
              if (res.ok) {
                setPrescriptions(result.prescriptions);
              } else {
                console.error("Error fetching prescriptions:", result.error);
              }
            } catch (error) {
              console.error("Network error:", error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchprescription();
    },[])

    return(
        <>
      <h1 className="text-3xl font-bold mb-8">Prescriptions</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Prescriptions</h2>

        <div className="bg-white p-6 rounded-lg shadow">
          {loading ? (
            <p>Loading...</p>
          ) : prescriptions.length === 0 ? (
            <>
              <p className="text-gray-700 mb-4">
                You have no recent prescriptions. Start creating one for your patients.
              </p>
            </>
          ) : (
            <ul className="space-y-4">
              {prescriptions.map((p) => (
                <li
                  key={p.prescriptionid}
                  className="border border-gray-300 p-4 rounded-lg"
                >
                  <p><strong>Prescription ID:</strong> {p.prescriptionid}</p>
                  <p><strong>Doctor ID:</strong> {p.doctorid}</p>
                  <p><strong>Patient ID:</strong> {p.patientid}</p>
                  <p><strong>Issued Date:</strong> {p.issuedate}</p>
                  <p><strong>Dosage Instructions:</strong> {p.dosageinstruction}</p>
                  <p><strong>Course Duration:</strong> {p.courseduration}</p>
                  <p><strong>Quantity:</strong> {p.quantity}</p>
                  <p><strong>Consultation Date:</strong> {p.consultationdate}</p>
                  {/* Add more fields here as needed */}
                </li>
              ))}
            </ul>
          )}

                <button
                onClick={handlePrescription}
                className="px-6 py-2 mt-10 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                Create Prescription
              </button>
        </div>
      </section>
    </>
    )
}