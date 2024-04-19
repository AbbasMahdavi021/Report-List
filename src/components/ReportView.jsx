"use client";
import { useState } from "react";

const ReportView = () => {
  return (
    <div class="flex items-center flex-col mt-4 p-8 g-500 bg-gray-100 rounded-lg w-full min-h-96">
      <p class="text-4xl font-bold text-gray-900 dark:text-white pb-6">
        Reports View
      </p>

      <button
        onClick={() => setIsOpen(true)}
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center max-w-48"
      >
        {" "}
        View Latest Reports
      </button>
    </div>
  );
};
export default ReportView;
