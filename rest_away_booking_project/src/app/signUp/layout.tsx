import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SignUp",
};

export default function SignUpLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <section className="mt-4">{children}</section>;
  }