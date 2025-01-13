import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support",
};

export default function AccountLayout({
   children,
 }: {
   children: React.ReactNode;
 }) {
   return (
     <section>
       {/* Glavni sadržaj stranice */}
       <main className="p-0">
         {children}
       </main>
     </section>
   );
 }