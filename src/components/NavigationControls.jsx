import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { MdLastPage } from "react-icons/md";
import { MdFirstPage } from "react-icons/md";

const NavigationControls = ({ hasNextPage, hasPrevPage, size }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = searchParams.get("per_page") ?? "10";

  // Calculate total pages whenever size or perPage changes
  useEffect(() => {
    const calculatedTotalPages = Math.ceil(size / Number(perPage));
    setTotalPages(calculatedTotalPages);
  }, [size, perPage]);

  // Update current page based on URL params
  useEffect(() => {
    const pageParam = searchParams.get("page") ?? "1";
    setCurrentPage(Number(pageParam));
  }, [searchParams]);

  // Handles page navigation, changes URL,
  // that's used to display data in Reports.jsx
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      router.push(`/?page=${page}&per_page=${perPage}`);
    }
  };

  // Generate pagination buttons dynamically
  const renderPaginationButtons = () => {
    const buttons = [];
    let startPage = Math.max(1, currentPage - 2); // Start with 3 pages back
    let endPage = Math.min(startPage + 4, totalPages); // Show max 5 buttons

    // Adjust startPage when close to the last page
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`text-sm mx-1 border border-lightgray-500 border-1 px-2 md:px-4 h-8 md:h-10 rounded-lg ${
            i === currentPage ? "bg-orange-500 text-white" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="md:m-4 my-4 flex flex-col md:flex-row w-full justify-center text-2xl space-y-2 md:space-y-0 md:space-x-32">
      <div className="md:p-2 flex flex-wrap md:flex-nowrap items-center justify-center ">
        <button onClick={() => handlePageChange(1)}>
          <MdFirstPage />
        </button>
        <button
          className="p-1 text-base"
          disabled={!hasPrevPage}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {renderPaginationButtons()}
        <button
          className="p-1 text-base"
          disabled={!hasNextPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
        <button onClick={() => handlePageChange(totalPages)}>
          <MdLastPage />
        </button>
      </div>

      <div className="p-2 ">Rows per page: {perPage}</div>
    </div>
  );
};

export default NavigationControls;