export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          action="/auth/login"
          method="post"
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
  
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
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
          />
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
  
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    );
  }
  