"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // Greška pri prijavi

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Zaustavi defaultno ponašanje forme

    setError(""); // Resetiraj grešku prije svakog pokušaja
    try {
      const { data: userData, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });

      if (userData) console.log(userData);
        
      if (signInError) {
        throw new Error(signInError.message); // Prikaz poruke o grešci
      }

      if (userData) {

        console.log("User signed in successfully:", userData);
        router.refresh();
        // Možeš dodati navigaciju ili redirect ovdje
      }
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Something went wrong, please try again.");
    }
  };

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
            {error && <p className="text-red-500">{error}</p>}
            <Form
              data={data}
              handleChange={handleChange}
              handleSignIn={handleSignIn}
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
      <div className="flex md:hidden w-full h-full items-center justify-center">
        <div className="relative bg-white rounded-lg shadow-lg w-80 sm:w-96 p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Sign In
          </h2>
          {error && <p className="text-red-500">{error}</p>}
          <Form
            data={data}
            handleChange={handleChange}
            handleSignIn={handleSignIn}
          />
        </div>
      </div>
    </div>
  );
};

interface FormProps {
  data: {
    email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignIn: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ data, handleChange, handleSignIn }) => (
  <form className="space-y-4" onSubmit={handleSignIn}>
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
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign In
      </button>
    </div>
  </form>
);

export default SignInPage;
