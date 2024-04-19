"use client";
import Modal from "@/components/Modal";
import { useState } from "react";

const ReportView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center flex-col mt-4 p-8 g-500 bg-gray-100 rounded-lg w-full min-h-96">
      <p className="text-4xl font-bold text-gray-900 dark:text-white pb-6">
        Reports View
      </p>

      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center max-w-48"
      >
        {" "}
        View Latest Reports
      </button>

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        Reports
      </Modal>
    </div>
  );
};
export default ReportView;
