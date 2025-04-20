'use client';

export default function Login() {
  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen flex items-center justify-center px-4">
      <form
        action="/auth/login"
        method="post"
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Login to Your Account
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-gray-700">
          Don't have an account?{' '}
          <a href="/signup" className="text-black font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
