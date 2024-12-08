import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SignUp",
};

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Sign Up</h1>
    </main>
  );
}
