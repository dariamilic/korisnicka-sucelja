import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property",
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mt-4">{children}</section>;
}
