import dummyData from "@/constants/dummyReports";
import { GrDocumentDownload } from "react-icons/gr";

const Reports = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row text-sm font-medium p-2 bg-slate-50">
        <div className="ml-4 w-24">Date</div>
        <div className="w-3/4">Report Name</div>
        <div>Download</div>
      </div>

      <div className="flex flex-col">
        {dummyData.map((report, index) => (
          <div
            key={index}
            className="flex flex-row text-sm p-2 border-b border-gray-200"
          >
            <div className="ml-4 w-24">{report.datetime}</div>
            <div className="w-3/4">{report.reportName}</div>
            <div className="flex justify-center w-16 text-3xl text-center">
              <GrDocumentDownload />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
