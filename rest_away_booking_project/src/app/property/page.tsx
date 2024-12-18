import { Navigation } from "@/components/navigation";
import { useState } from "react";
import Link from "next/link";
import { getPosts, getPostsCount } from "@/lib/api";
import type { Post } from "@/lib/api";
import Pagination from "./_components/pagination";
import { PropertyWrapper } from "./_components/PropertyWrapper";

/*
export default function Property() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Navigation setIsOpen={setIsOpen} />

      <header className="flex min-h-screen flex-col items-center p-10">
        <h1 className="text-6xl font-extrabold tracking-tight">
          List Your Property
        </h1>
      </header>
    </main>
  );
}
*/

type BlogPageProps = {
  searchParams: { page: string };
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 6;



function processPost(post:Post){
  const { id, title } = post;
  return(
    <li key={id} className="mb-4">
      <Link
        href={`/property/${id}`}
        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors duration-200"
      >
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Post {id}: {title}
        </h2>
        <p className="font-normal text-gray-700">
          Click to read more about this fascinating topic...
        </p>
      </Link>
    </li>
  )
}


export default async function Property({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const postsCount = await getPostsCount();
  const pagesCount = Math.ceil(postsCount / PAGE_SIZE);

  // Safely handle the page parameter
  const pageParam = searchParams?.page ?? '1';
  const currentPage = Math.min(
    typeof pageParam === 'string' && /^[1-9][0-9]*$/.test(pageParam) 
      ? parseInt(pageParam, 10) 
      : 1,
    pagesCount
  );

  const _start = (currentPage - 1) * PAGE_SIZE;
  const _limit = PAGE_SIZE;
  

  const posts = await getPosts({ _start, _limit });
  return(
    <PropertyWrapper>
      <h1 className="text-6xl font-extrabold tracking-tight mb-10">Property</h1>
      <Pagination currentPage={currentPage} pagesCount={pagesCount} />
      <ul className="w-full space-y-4">{posts.map(processPost)}</ul>
    </PropertyWrapper>
  );
}
