import dummyData from "@/constants/dummyReports";
import ReportCard from "./ReportCard";

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
          <ReportCard
            index={index}
            date={report.datetime}
            reportName={report.reportName}
          />
        ))}
      </div>
    </div>
  );
};

export default Reports;
