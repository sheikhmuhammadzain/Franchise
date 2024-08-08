import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { LuPencilLine } from "react-icons/lu"; // Import the icon
import ReportIssuePopup from "./Report";


function TechnicalTable() {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState([
    { requestId: "TR01", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Cannot update profile info", dateSubmitted: "12-Oct-2024", status: "Pending" },
    { requestId: "TR02", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Issue with report export", dateSubmitted: "12-Oct-2024", status: "Pending" },
    { requestId: "TR03", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Not able to login", dateSubmitted: "12-Oct-2024", status: "Pending" },
    { requestId: "TR04", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Cannot update profile info", dateSubmitted: "12-Oct-2024", status: "Pending" },
    { requestId: "TR05", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Cannot update profile info", dateSubmitted: "12-Oct-2024", status: "Pending" },
    { requestId: "TR06", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Cannot update profile info", dateSubmitted: "12-Oct-2024", status: "Pending" },
    { requestId: "TR07", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Cannot update profile info", dateSubmitted: "12-Oct-2024", status: "Pending" },
    { requestId: "TR08", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Cannot update profile info", dateSubmitted: "12-Oct-2024", status: "Pending" },
    { requestId: "TR09", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Cannot update profile info", dateSubmitted: "12-Oct-2024", status: "Resolved" },
    { requestId: "TR10", userId: "A102", fullName: "Hedwig F. Nguyen", userType: "Franchisor", requestTitle: "Cannot update profile info", dateSubmitted: "12-Oct-2024", status: "Resolved" },
    // ... more data if needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = tableData.filter(row =>
    row.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.requestTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto overflow-scroll bg-white p-2 rounded">
     
      <table className="w-full border-collapse rounded whitespace-nowrap">  
        <thead>
          <tr className="bg-gray-200 bg-opacity-50 text-left">
            <th className="px-4 py-2 border">Request ID</th>
            <th className="px-4 py-2 border">User ID</th>
            <th className="px-4 py-2 border">Full Name</th>
            <th className="px-4 py-2 border">User Type</th>
            <th className="px-4 py-2 border">Request Title</th>
            <th className="px-4 py-2 border">Date Submitted</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border"></th> {/* Add this line */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr
              key={row.requestId}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-4 py-2 border">{row.requestId}</td>
              <td className="px-4 py-2 border">{row.userId}</td>
              <td className="px-4 py-2 border">{row.fullName}</td>
              <td className="px-4 py-2 border">{row.userType}</td>
              <td className="px-4 py-2 border">{row.requestTitle}</td>
              <td className="px-4 py-2 border">{row.dateSubmitted}</td>
              <td className="px-4 py-2 border">{row.status}</td>
              <td onClick={() => setOpen(true)}  className="px-4 py-2 border text-center">
                < LuPencilLine className="text-gray-500 cursor-pointer" />
              </td> {/* Add this line */}
            </tr>
          ))}
        </tbody>
      </table>
      {open&&<ReportIssuePopup open={open} setOpen={setOpen} />}
      

      <div className="flex justify-end p-5 bg-gray-50">
        <Stack spacing={7}>
          <Pagination count={10} shape="rounded" color="primary" />
        </Stack>
      </div>
    </div>
  );
}

export default TechnicalTable;
