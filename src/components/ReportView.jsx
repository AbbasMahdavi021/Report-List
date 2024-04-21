"use client";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const ReportView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center flex-col mt-4 p-8 g-500 bg-gray-100 rounded-lg w-full min-h-96">
      <p className="text-3xl font-bold text-center text-gray-900 pb-6">
        Reports View
      </p>

      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center max-w-48"
      >
        {" "}
        View Latest Reports
      </button>

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen} />
    </div>
  );
};
export default ReportView;
