'use client';
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-50 relative">
      {/* Left Section with Image and Text */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-cover bg-center relative" style={{ backgroundImage: "url('/signup.jpg')" }}>
          <div className="absolute top-4 left-4">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Go Back
            </Link>
          </div>
          <div className="absolute bottom-8 left-8 text-white space-y-4 max-w-sm">
            <h1 className="text-4xl font-bold">Book Your Dream Stay!</h1>
            <p className="text-lg font-light">
              Discover exclusive deals and unforgettable experiences. Sign up now
              to reserve your ideal getaway.
            </p>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-lg w-80 sm:w-96 p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Sign Up</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">First & Last Name</label>
                <input
                  type="text"
                  className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your name"
                />
              </div>
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
              <div>
                <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
                <input
                  type="date"
                  className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Gender</label>
                <select
                  className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your phone number"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-primary-500 focus:ring-primary-500 rounded"
                />
                <label className="ml-2 text-sm text-gray-600">
                  I would like to receive a weekly newsletter.
                </label>
              </div>
              <button
                type="submit"
                className="w-full mt-2 py-2 px-4 bg-[#b2935c] text-white rounded-lg hover:bg-[#5B597A] focus:ring-2 focus:ring-offset-2 focus:ring-[#5B597A]"
              >
                SIGN ME UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
