"use client";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-opacity-50">
      {/* Desktop Version */}
      <div className="hidden md:flex absolute inset-0">
        <div
          className="w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/signin.jpg')" }}
        >
          <div className="absolute top-4 left-4">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Go Back
            </Link>
          </div>
          <div className="absolute bottom-8 left-8 text-white space-y-4 max-w-sm">
            <h1 className="text-4xl font-bold ">Welcome Back!</h1>
            <p className="text-lg font-light">
              Sign in to access your account and explore more features.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-gray-400">
          <div className="relative bg-white rounded-lg shadow-lg w-80 sm:w-96 p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
              Sign In
            </h2>
            <Form />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="absolute top-4 left-4">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Go Back
            </Link>
          </div>
      <div className="flex md:hidden w-full h-full items-center justify-center">
        <div className="relative bg-white rounded-lg shadow-lg w-80 sm:w-96 p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Sign In
          </h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

const Form = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-600">E-mail</label>
      <input
        type="email"
        className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
        placeholder="Your email"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600">Password</label>
      <input
        type="password"
        className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
        placeholder="Your password"
      />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="text-primary-500 focus:ring-primary-500 rounded"
        />
        <label className="ml-2 text-sm text-gray-600">Remember Me</label>
      </div>
      <Link
        href="/forgot-password"
        className="text-sm text-brown-200 hover:underline"
      >
        Forgot Password?
      </Link>
    </div>
    <button
      type="submit"
      className="w-full mt-2 py-2 px-4 bg-brown-200 text-white rounded-lg hover:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-[#5B597A]"
    >
      SIGN IN
    </button>
    <div className="text-center mt-4">
      <p className="text-sm text-gray-600">
        Don&apos;t have an account?{' '}
        <Link href="/signUp" className="text-primary-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  </form>
);

export default SignInPage;
