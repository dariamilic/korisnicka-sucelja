import Link from "next/link";
type PaginationProps = {
  currentPage: number;
  pagesCount: number;
};
export default function Pagination(pagination: PaginationProps) {
  const { currentPage, pagesCount } = pagination;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  return (
    <div className="w-full mb-6">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex justify-between items-center">
        <Link
          href={`/property?page=${currentPage - 1}`}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            isFirstPage
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-disabled={isFirstPage}
        >
          Previous
        </Link>
        <p className="text-gray-700">
          Page{" "}
          <span className="font-semibold text-gray-900">{currentPage}</span> of{" "}
          <span className="font-semibold text-gray-900">{pagesCount}</span>
        </p>
        <Link
          href={`/property?page=${currentPage + 1}`}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            isLastPage
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-disabled={isLastPage}
        >
          Next
        </Link>
      </div>
    </div>
  );
}