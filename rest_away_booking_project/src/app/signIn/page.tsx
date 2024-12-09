import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SignIn",
};


export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Sign In</h1>
    </main>
  );
}
