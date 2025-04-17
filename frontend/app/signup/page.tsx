export default function Signup() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          action="/auth/signup"
          method="post"
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Create Patient Account</h2>
  
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
          />
  
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
          />
  
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
  
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            required
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
          />
  
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
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
  type="number"
  name="patient_id"
  placeholder="Patient Number"
  required
  className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
/>
  
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
  