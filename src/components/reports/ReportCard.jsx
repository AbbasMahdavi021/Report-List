import { TbFileDownload } from "react-icons/tb";

const ReportCard = ({ date, reportName, index }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const formattedTime = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      key={index}
      className="flex flex-row text-sm p-2 py-4 border-b border-gray-100"
    >
      <div className="mx-1 w-32">
        {formattedDate}
        <div className="text-xs m-1 font-light">{formattedTime}</div>
      </div>
      <div className=" w-3/4 overflow-hidden">
        <div className="mx-1  truncate">{reportName}</div>
      </div>
      <div className="flex justify-center w-24 mx-1 text-2xl">
        <img className="w-9" src="/document-download.svg" alt="download" />
      </div>
      <div className="flex justify-start"></div>
    </div>
  );
};

export default ReportCard;
