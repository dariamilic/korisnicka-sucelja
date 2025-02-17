import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyWrapper } from "@/app/property/_components/PropertyWrapper";
import { getPost } from "@/lib/api";

export const metadata: Metadata = {
  title: "Property",
};

interface SearchParams {
  page?: string;
}

type BlogPostProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<SearchParams>;
};

export default async function BlogPost(props: BlogPostProps) {
  const params = await props.params;
  const resolvedParams = await Promise.resolve(params);
  const post = await getPost(resolvedParams.id);
  const { id, title, body } = post;

  if (!id) {
    notFound();
  }

  return (
    <PropertyWrapper>
      <main className="flex min-h-screen flex-col items-center p-10">
        <article className="w-full max-w-2xl bg-gray-200 shadow-lg rounded-lg overflow-hidden p-6">
          <Link
            href="/property"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all properties
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Property {id}: {title}
          </h1>
          <p>{body}</p>
        </article>
      </main>
    </PropertyWrapper>
  );
}
