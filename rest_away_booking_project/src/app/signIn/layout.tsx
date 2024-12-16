import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SignIn",
};

export default function SignInLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <section className="mt-4">{children}</section>;
  }

