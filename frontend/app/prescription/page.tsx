'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast'; // You may need to install this package
import { useRouter } from "next/navigation";

export default function PrescriptionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    prescriptionid: '',
    patientid: '',
    doctorid: '',
    dosageinstruction: '',
    issuedate: '',
    courseduration: '',
    quantity: '',
    consultationdate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      const res = await fetch('/api/prescription', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 
          'Content-Type': 'application/json'
        }
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to submit prescription');
      }
      
      const data = await res.json();
      toast.success(data.message || 'Prescription created successfully');
      
      // Reset form after successful submission
      setForm({
        prescriptionid: '',
        patientid: '',
        doctorid: '',
        dosageinstruction: '',
        issuedate: '',
        courseduration: '',
        quantity: '',
        consultationdate: ''
      });
      
      router.push("/doc_dashboard/prescription");
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Prescription</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="prescriptionid" className="block text-sm font-medium text-gray-700 mb-1">
              Prescription ID
            </label>
            <input
              id="prescriptionid"
              name="prescriptionid"
              placeholder="Enter prescription ID"
              value={form.prescriptionid}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="patientid" className="block text-sm font-medium text-gray-700 mb-1">
              Patient ID <span className="text-red-500">*</span>
            </label>
            <input
              id="patientid"
              name="patientid"
              placeholder="Enter patient ID"
              value={form.patientid}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="doctorid" className="block text-sm font-medium text-gray-700 mb-1">
              Doctor ID <span className="text-red-500">*</span>
            </label>
            <input
              id="doctorid"
              name="doctorid"
              placeholder="Enter doctor ID"
              value={form.doctorid}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="dosageinstruction" className="block text-sm font-medium text-gray-700 mb-1">
              Dosage Instructions <span className="text-red-500">*</span>
            </label>
            <textarea
              id="dosageinstruction"
              name="dosageinstruction"
              placeholder="Enter detailed dosage instructions"
              value={form.dosageinstruction}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="issuedate" className="block text-sm font-medium text-gray-700 mb-1">
              Issue Date <span className="text-red-500">*</span>
            </label>
            <input
              id="issuedate"
              type="date"
              name="issuedate"
              value={form.issuedate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="courseduration" className="block text-sm font-medium text-gray-700 mb-1">
              Course Duration (days) <span className="text-red-500">*</span>
            </label>
            <input
              id="courseduration"
              type="number"
              name="courseduration"
              placeholder="Enter duration in days"
              value={form.courseduration}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* <div>
            <label htmlFor="medid" className="block text-sm font-medium text-gray-700 mb-1">
              Medicine ID <span className="text-red-500">*</span>
            </label>
            <input
              id="medid"
              name="medid"
              placeholder="Enter medicine ID"
              value={form.medid}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div> */}

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              value={form.quantity}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="consultationdate" className="block text-sm font-medium text-gray-700 mb-1">
              Consultation Date <span className="text-red-500">*</span>
            </label>
            <input
              id="consultationdate"
              type="date"
              name="consultationdate"
              value={form.consultationdate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

         

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Prescription'}
          </button>
        </form>
      </div>
    </div>
  );
}