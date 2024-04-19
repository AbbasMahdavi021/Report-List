import "./Modal.css";
import { IoIosClose } from "react-icons/io";
import { BiFilterAlt } from "react-icons/bi";

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div />
          <p>Recently Generated Reports</p>
          <div>
            <button className="border border-gray-500 border-2 rounded-lg p-1 m-4">
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
      </div>
    </div>
  );
};
export default Modal;
