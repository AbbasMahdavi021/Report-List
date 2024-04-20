import "./Modal.css";
import Reports from "../reports/Reports";
import { IoIosClose } from "react-icons/io";
import { BiFilterAlt } from "react-icons/bi";
import dummyData from "@/constants/dummyReports";
import { useState } from "react";

const Modal = ({ children, isOpen, handleClose }) => {
  const [filter, setFilter] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); //

  if (!isOpen) return null;

  const sortedReports = [...dummyData].sort((a, b) => {
    if (filter === "date") {
      return new Date(b.datetime) - new Date(a.datetime); // Sort by date
    } else if (filter === "name") {
      const nameA = a.reportName.toLowerCase();
      const nameB = b.reportName.toLowerCase();
      return nameA.localeCompare(nameB); // Sort alphabetically by reportName
    }
    return 0;
  });

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setShowDropdown(false); // Close the dropdown after selecting a filter
  };

  console.log(sortedReports);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div />
          <div className="ml-4 flex flex-nowrap ">
            Recently Generated Reports
          </div>

          <div className="flex space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="border border-gray-500 border-2 rounded-lg p-1"
              >
                <BiFilterAlt />
              </button>
              {showDropdown && (
                <div className="absolute z-10 bg-white border border-gray-300 mt-2 rounded shadow-lg">
                  <button
                    onClick={() => handleFilterChange("date")}
                    className="hover:bg-slate-50 block w-full py-2 px-4 text-left"
                  >
                    Date
                  </button>
                  <button
                    onClick={() => handleFilterChange("name")}
                    className="hover:bg-slate-50 block w-full py-2 px-4 text-left"
                  >
                    Name
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={handleClose}
              className="border border-gray-500 border-2 rounded-lg p-1"
            >
              <IoIosClose />
            </button>
          </div>
        </div>

        {children}

        <Reports sortedData={sortedReports} />
      </div>
    </div>
  );
};
export default Modal;
