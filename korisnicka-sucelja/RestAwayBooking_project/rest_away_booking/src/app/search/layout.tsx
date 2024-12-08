import { Navigation } from "./_components/navigation";
export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-4">
      <Navigation />
      {children}
    </section>
  );
}