import Link from "next/link";
import { getPosts, getPostsCount } from "@/lib/api";
import type { Post } from "@/lib/api";
import Pagination from "./_components/pagination";
import { PropertyWrapper } from "./_components/PropertyWrapper";

type PropertyPageProps = {
  searchParams: Promise<{ page: string }>;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 6;

function processPost(post: Post) {
  const { id, title } = post;
  return (
    <li key={id} className="mb-4">
      <Link
        href={`/property/${id}`}
        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors duration-200"
      >
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="font-normal text-gray-700">
          Click to read more about this fascinating topic...
        </p>
      </Link>
    </li>
  );
}

export default async function Property(props: PropertyPageProps) {
  const searchParams = await props.searchParams;

  const postsCount = await getPostsCount();
  const pagesCount = Math.ceil(postsCount / PAGE_SIZE);

  // Handle searchParams safely
  const page = await Promise.resolve(searchParams.page);
  const pageParam = page ?? "1";
  const currentPage = Math.min(
    typeof pageParam === "string" && /^[1-9][0-9]*$/.test(pageParam)
      ? parseInt(pageParam, 10)
      : 1,
    pagesCount
  );

  const _start = (currentPage - 1) * PAGE_SIZE;
  const _limit = PAGE_SIZE;

  const posts = await getPosts({ _start, _limit });
  return (
    <PropertyWrapper>
      <h1 className="text-6xl font-extrabold tracking-tight mb-10">Property</h1>
      <Pagination currentPage={currentPage} pagesCount={pagesCount} />
      <ul className="w-full space-y-4">{posts.map(processPost)}</ul>
      <Pagination currentPage={currentPage} pagesCount={pagesCount} />
    </PropertyWrapper>
  );
}
