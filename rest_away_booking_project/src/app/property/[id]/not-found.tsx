import Link from "next/link";
import { FileQuestion } from "lucide-react";
export default function NotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
      <div className="rounded-full bg-blue-100 p-3">
        <FileQuestion className="h-6 w-6 text-blue-600" />
      </div>
      <h2 className="text-2xl font-semibold tracking-tight">Post not found</h2>
      <p className="text-gray-600">
        {`Sorry, we couldn't find the post you're looking for.`}
      </p>
      <Link
        href="/blog"
        className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
      >
        Go back
      </Link>
    </div>
  );
}