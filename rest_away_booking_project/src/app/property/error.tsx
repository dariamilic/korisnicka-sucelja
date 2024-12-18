"use client";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { PropertyWrapper } from "./_components/PropertyWrapper";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <PropertyWrapper>
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
      <div className="rounded-full bg-red-100 p-3">
        <AlertCircle className="h-6 w-6 text-red-600" />
      </div>
      <h2 className="text-2xl font-semibold tracking-tight">
        Something went wrong while fetching blog posts!
      </h2>
      <p className="text-gray-600">
        An error occurred while loading this page.
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
      >
        Try again
      </button>
    </div>
    </PropertyWrapper>
  );
}