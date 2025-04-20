'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Login() {
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {
      setErrorMessage(error);
    }
  }, [searchParams]);

  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen flex items-center justify-center px-4">
      <form
        action="/auth/login"
        method="post"
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md animate-fade-in"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-black">
          Welcome Back 👋
        </h2>

        {errorMessage && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 border border-red-300 text-sm">
            {errorMessage}
          </div>
        )}

        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
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
