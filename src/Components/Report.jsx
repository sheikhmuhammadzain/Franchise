import React from 'react';
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

import { MdOutlineFileDownload } from "react-icons/md";
import { FiFileText } from "react-icons/fi";

function ReportIssuePopup({open, setOpen}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md ">
                <div className="flex bg-gray-50  rounded-lg p-2  justify-between" > TRO1-A102 <IoMdClose className='text-xl' />
                </div>
                <div className="text-xl font-semibold  p-4">Issue with report export</div>
       <div className='p-4 rounded-lg'>
       <div className="flex justify-between mb-4 border rounded-lg">
                    <div  className='border p-3 rounded-lg' >
                        <p className="text-sm font-medium">Requested User</p>
                        <p  className='font-bold'>Hedwig F. Nguyen</p>
                    </div>
                    <div className='border p-3'>
                        <p className="text-sm font-medium">User Type</p>
                        <p className='font-bold'>Franchisor</p>
                    </div>
                    <div className='border p-3'>
                        <p className="text-sm font-medium">Date of submission</p>
                        <p className="text-sm text-red-400 font-bold">14/04/2023</p>
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
                        <p  className="text-sm cursor-pointer bg-blue-50 rounded-lg border px-2 py-1 flex justify-center item-center py-2 gap-3"><FiFileText className='text-blue-200' />
                        Document1.pdf <MdOutlineFileDownload />
                        </p>
                    
                    </div>
                </div>

                <div className="  block">
                    <div>
                        <p className="text-sm font-medium">Status</p>
                        <p className="w-full border p-2  mb-2 rounded-lg text-sm flex justify-between items-center cursor-pointer ">Pending <FaAngleDown />
                        </p>
                    </div>
                    <div className="flex space-x-4 justify-end mt-2">
                        <button className="gray-btn" onClick={() => setOpen(false)}>Cancel</button>
                        <button className="blue-btn">Update</button>
                    </div>
                </div>
       </div>
              
            </div>
        </div>
    );
}

export default ReportIssuePopup;
