import React from 'react';

function ReportIssuePopup({open, setOpen}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="text-xl font-semibold mb-4">Issue with report export</div>

                <div className="flex justify-between mb-4">
                    <div>
                        <p className="text-sm font-medium">Requested User</p>
                        <p>Hedwig F. Nguyen</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">User Type</p>
                        <p>Franchisor</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Date of submission</p>
                        <p>14/04/2023</p>
                    </div>
                </div>

                <div className="mb-4">
                    <p className="text-sm font-medium">Description</p>
                    <p>
                        When attempting to export the monthly sales report, the system generates an error message stating, "Export Failed: Unable to generate the requested report." This issue occurs regardless of the selected date range or report type. Alice has provided screenshots of the error message and steps to reproduce the problem.
                    </p>
                </div>

                <div className="mb-4">
                    <p className="text-sm font-medium">Attach File</p>
                    <div className="flex items-center">
                        <p>Document1.pdf</p>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-4-4H3"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h4"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l4 4 4-4"></path></svg>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div>
                        <p className="text-sm font-medium">Status</p>
                        <p>Pending</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded" onClick={() => setOpen(false)}>Cancel</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportIssuePopup;
