import "./Modal.css";
import Reports from "../reports/Reports";
import { IoIosClose } from "react-icons/io";
import { BiFilterAlt } from "react-icons/bi";

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div />
          <div className="ml-4 flex flex-nowrap ">
            Recently Generated Reports
          </div>

          <div className="flex space-x-4">
            <button className="border border-gray-500 border-2 rounded-lg p-1">
              <BiFilterAlt />
            </button>
            <button
              onClick={handleClose}
              className="border border-gray-500 border-2 rounded-lg p-1"
            >
              <IoIosClose />
            </button>
          </div>
        </div>

        {children}

        <Reports className="bg-red-500" />
      </div>
    </div>
  );
};
export default Modal;
