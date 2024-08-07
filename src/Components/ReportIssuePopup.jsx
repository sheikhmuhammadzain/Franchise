import { DownloadIcon } from '@heroicons/react/outline';

const ReportIssuePopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Issue with report export</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-gray-500">Requested User</p>
            <p className="font-medium">Hedwig F. Nguyen</p>
          </div>
          <div>
            <p className="text-gray-500">User Type</p>
            <p className="font-medium">Franchisor</p>
          </div>
          <div>
            <p className="text-gray-500">Date of submission</p>
            <p className="font-medium">14/04/2023</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Description</p>
          <p>
            When attempting to export the monthly sales report, the system generates an error message stating, "Export Failed: Unable to generate the requested report." This issue occurs regardless of the selected date range or report type. Alice has provided screenshots of the error message and steps to reproduce the problem.
          </p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Attach File</p>
          <div className="flex items-center">
            <p className="font-medium">Document1.pdf</p>
            <button className="ml-2 text-blue-500 hover:text-blue-700">
              <DownloadIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mr-2">
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportIssuePopup;
