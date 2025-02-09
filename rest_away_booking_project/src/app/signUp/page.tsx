"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

const SignUpPage = () => {
  const [data, setData] = useState<{
    name: string;
    email: string;
    password: string;
    date_of_birth: string;
    phone_number: number;
  }>({
    name: "",
    email: "",
    password: "",
    date_of_birth: "",
    phone_number: +385,
  });
  
  const [error, setError] = useState(""); // Greška pri prijavi

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData,[name]: name === "phone_number" ? parseInt(value) || 0 : value, }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // Zaustavi defaultno ponašanje forme

    setError(""); // Resetiraj grešku prije svakog pokušaja
    try {
      const { data: userData, error: signInError } = await supabase.auth.signUp(
        {

          email: data.email,
          password: data.password,
        }
      );

      if (data) console.log(data);

      if (signInError) {
        throw new Error(signInError.message); // Prikaz poruke o grešci
      }

      if (userData) {
        console.log("User signed UP successfully:", userData);
        // Možeš dodati navigaciju ili redirect ovdje
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-opacity-50">
      {/* Left Section with Image and Text */}
      {/* Desktop Version */}
      <div className="hidden md:flex absolute inset-0">
        <div
          className="w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/signup.jpg')" }}
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
            <h1 className="text-4xl font-bold ">Book Your Dream Stay!</h1>
            <p className="text-lg font-light">
              Discover exclusive deals and unforgettable experiences. Sign up
              now to reserve your ideal getaway.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-gray-400">
          <div className="relative bg-white rounded-lg shadow-lg w-80 sm:w-96 p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
              Sign Up
            </h2>
            {error && <p className="text-red-500">{error}</p>}
            <Form
              data={data}
              handleChange={handleChange}
              handleSignUp={handleSignUp}
            />
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
      <div className="flex md:hidden w-full h-full items-center justify-center py-9">
        <div className="relative bg-white rounded-lg shadow-lg w-80 sm:w-96 p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Sign Up
          </h2>
          {error && <p className="text-red-500">{error}</p>}

          <Form
            data={data}
            handleChange={handleChange}
            handleSignUp={handleSignUp}
          />
        </div>
      </div>
    </div>
  );
};

interface FormProps {
  data: {
    name: string;
    email: string;
    password: string;
    date_of_birth: string;
    phone_number: number;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUp: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ data, handleChange, handleSignUp }) => (
  <form onSubmit={handleSignUp} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-600">
        First & Last Name
      </label>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
        placeholder="Your name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600">E-mail</label>
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
        className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
        placeholder="Your email"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600">
        Password
      </label>
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
        placeholder="Your password"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600">
        Date of Birth
      </label>
      <input
        type="date"
        name="date_of_birth"
        value={data.date_of_birth}
        onChange={handleChange}
        className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-brown-200 focus:border-primary-500"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600">Gender</label>
      <select className="block w-full mt-1 px-4 py-2 border rounded-lg focus:ring-brown-200 focus:border-primary-500">
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600">
        Phone Number
      </label>
      <input
        type="tel"
        name="phone_number"
        value={data.phone_number}
        onChange={handleChange}
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
      className="w-full mt-2 py-2 px-4 bg-brown-200 text-white rounded-lg hover:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-[#5B597A]"
    >
      SIGN ME UP
    </button>
  </form>
);

export default SignUpPage;
