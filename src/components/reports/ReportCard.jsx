import { GrDocumentDownload } from "react-icons/gr";

const ReportCard = ({ date, reportName, index }) => {
  return (
    <div
      key={index}
      className="flex flex-row text-sm p-2 py-4 border-b border-gray-100"
    >
      <div className="mx-1 w-32">{date}</div>
      <div className=" w-3/4 overflow-hidden">
        <div className="mx-1  truncate">{reportName}</div>
      </div>
      <div className="flex justify-center w-24 mx-1 text-3xl">
        <GrDocumentDownload />
      </div>
      <div className="flex justify-start"></div>
    </div>
  );
};

export default ReportCard;
