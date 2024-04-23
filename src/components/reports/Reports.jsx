import { useSearchParams } from "next/navigation";
import NavigationControls from "../NavigationControls";
import ReportCard from "./ReportCard";

const Reports = ({ sortedData }) => {
  const searchParams = useSearchParams();

  const currPage = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "10";

  const start = (Number(currPage) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const dataToDisplay = sortedData.slice(start, end);

  return (
    <div className="relative w-full h-full overflow-hidden ">
      <div className="flex flex-col h-full">
        <div className="flex flex-row text-sm font-medium p-2 bg-slate-50">
          <div className="ml-4 w-32">Date</div>
          <div className="w-3/4">Report Name</div>
          <div className="flex justify-center w-16 mr-4 ">Download</div>
        </div>

        <div className="flex flex-col flex-grow overflow-auto mb-32 md:mb-24">
          {dataToDisplay.map((report, index) => (
            <ReportCard
              key={index}
              date={report.datetime}
              reportName={report.reportName}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-1 border-t border-gray-200 bg-white">
        <NavigationControls
          hasNextPage={end < sortedData.length}
          hasPrevPage={start > 0}
          size={sortedData.length}
        />
      </div>
    </div>
  );
};

export default Reports;
