import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mt-4">{children}</section>;
}
