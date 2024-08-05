import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Pagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const TechnicalRequests = () => {
  // Mock data - replace with actual data fetching logic
  const requests = [
    {
      id: "TR01",
      userId: "A102",
      fullName: "Hoàng T. Nguyễn",
      userType: "Franchisor",
      requestTitle: "Cannot update profile info",
      dateSubmitted: "12-Oct-2024",
      status: "Pending",
    },
    // ... more requests
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Technical Requests</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Paper className="p-4">
          <h2 className="text-lg font-semibold">Total</h2>
          <p className="text-3xl font-bold">20</p>
        </Paper>
        <Paper className="p-4">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-3xl font-bold">19</p>
        </Paper>
        <Paper className="p-4">
          <h2 className="text-lg font-semibold">Resolved</h2>
          <p className="text-3xl font-bold">01</p>
        </Paper>
      </div>

      <div className="flex justify-between mb-4">
        <TextField label="Search" variant="outlined" size="small" />
        <Button variant="outlined">Filter</Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Request ID</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>User Type</TableCell>
              <TableCell>Request Title</TableCell>
              <TableCell>Date Submitted</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.id}</TableCell>
                <TableCell>{request.userId}</TableCell>
                <TableCell>{request.fullName}</TableCell>
                <TableCell>{request.userType}</TableCell>
                <TableCell>{request.requestTitle}</TableCell>
                <TableCell>{request.dateSubmitted}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  <Button size="small">
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-center mt-4">
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
};

export default TechnicalRequests;
    