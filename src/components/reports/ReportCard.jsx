const ReportCard = ({ date, reportName, index }) => {
  /* For demonstration purposes, handleDownload 
    simulates a download action. In production, 
    it would fetch files from an S3 bucket or server. */
  const handleDownload = () => {
    // Create a dummy data blob
    const dummyData = `The Content of ${reportName}`;
    const blob = new Blob([dummyData], { type: "text/plain" });

    // download url and link
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = reportName; //Report name has extension
    document.body.appendChild(link);

    //Download
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

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
      <div className="flex justify-center w-16 mx-1 text-2xl">
        <img
          onClick={handleDownload}
          className="w-9 cursor-pointer"
          src="/document-download.svg"
          alt="download"
        />
      </div>
      <div className="flex justify-start"></div>
    </div>
  );
};

export default ReportCard;
