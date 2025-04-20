'use client';
import { useState } from 'react';

export default function Signup() {
  const [role, setRole] = useState<'patient' | 'doctor' | 'receptionist'>('patient');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as 'patient' | 'doctor' | 'receptionist');
  };

  const getActionUrl = () => {
    if (role === 'doctor') return '/auth/doc-signup';
    if (role === 'receptionist') return '/auth/receptionist-signup';
    return '/auth/signup'; // for patient
  };

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const phone = form.phone?.value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (phone && !/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number must be exactly 10 digits.';
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) form.submit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={validateForm}
        action={getActionUrl()}
        method="post"
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Create {role.charAt(0).toUpperCase() + role.slice(1)} Account
        </h2>

        {/* Role selector */}
        <label className="block mb-3">
          <span className="block text-sm font-medium text-gray-700 mb-1">Account Type</span>
          <select
            name="role"
            value={role}
            onChange={handleRoleChange}
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="receptionist">Receptionist</option>
          </select>
        </label>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
        />
        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
        />

        {role !== 'receptionist' && (
          <>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
            />
          </>
        )}

        {role === 'receptionist' && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
          />
        )}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
        />
        {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}

        {/* Role-specific fields */}
        {role === 'patient' && (
          <>
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="relationship"
              placeholder="Relationship"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
            />
              <input
              type="gender"
              name="gender"
              placeholder="Male/Female/Other"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
            />
              <input
              type="problem"
              name="problem"
              placeholder="What happened with you?"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="patient_id"
              placeholder="Patient Number"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
            />
          </>
        )}

        {role === 'doctor' && (
          <>
            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="doctor_id"
              placeholder="Doctor ID"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
            />
          </>
        )}

        {/* Sign Up button (black color) */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
