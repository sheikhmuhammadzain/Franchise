import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Doughnut, Bar } from "react-chartjs-2";
import { Typography, Button, TextField } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import Chart from "chart.js/auto";

// Styled Paper component for cards
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff", // White background for cards
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const dataDoughnut = {
  labels: ["KFC", "Lorem ipsum", "Lorem ipsum"],
  datasets: [
    {
      data: [60500, 6000, 500],
      backgroundColor: ["#008000", "#0000FF", "#87CEEB"],

      hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
    },
  ],
};

const dataBar = {
  labels: [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Lorem ipsum",
    "Lorem ipsum",
  ],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
      hoverBorderColor: "rgba(54, 162, 235, 1)",
      data: [90000, 80000, 60000, 50000, 40000, 20000],
    },
    {
      label: "Royalty",
      backgroundColor: "#FF9F40",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255, 159, 64, 0.4)",
      hoverBorderColor: "rgba(255, 159, 64, 1)",
      data: [9000, 8000, 7000, 6000, 5000, 3000],
    },
  ],
};

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "franchiseName", headerName: "Franchise Name", width: 200 },
  { field: "franchisorName", headerName: "Franchisor Name", width: 200 },
  { field: "city", headerName: "City", width: 150 },
  { field: "sales", headerName: "Sales", width: 150 },
  { field: "royalty", headerName: "Royalty", width: 150 },
];

const rows = [
  {
    id: "A101",
    franchiseName: "Lorem ipsum dim eim",
    franchisorName: "Lorem ipsum dim eim",
    city: "Riyadh",
    sales: "$60000",
    royalty: "$6000",
  },
  {
    id: "A102",
    franchiseName: "KFC",
    franchisorName: "Gladys Esther",
    city: "Jeddah",
    sales: "$60000",
    royalty: "$6000",
  },
  {
    id: "A103",
    franchiseName: "Lorem ipsum dim eim",
    franchisorName: "Lorem ipsum dim eim",
    city: "Lorem ipsum dim",
    sales: "$60000",
    royalty: "$6000",
  },
  {
    id: "A104",
    franchiseName: "Lorem ipsum dim eim",
    franchisorName: "Lorem ipsum dim eim",
    city: "Jeddah",
    sales: "$60000",
    royalty: "$6000",
  },
];

const CustomToolbar = () => (
  <GridToolbarContainer>
    <GridToolbarExport />
    <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
      Filter
    </Button>
  </GridToolbarContainer>
);

export default function Dashboard() {
  const [searchText, setSearchText] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchText(searchValue);
    const filtered = rows.filter(
      (row) =>
        row.franchiseName.toLowerCase().includes(searchValue) ||
        row.franchisorName.toLowerCase().includes(searchValue) ||
        row.city.toLowerCase().includes(searchValue)
    );
    setFilteredRows(filtered);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#f0f0f0", padding: 2 }}>
      <Typography variant="h4" color="textPrimary" sx={{ mb: 1 }}>
        Financial Overview
      </Typography>
      <Grid container spacing={2}>
        {/* Row for Cards */}
        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={4} md={4}>
              <Item>
                <Typography variant="h6" color="textSecondary">
                  Total Franchise
                </Typography>
                <Typography variant="h4" color="textPrimary">
                  20
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item>
                <Typography variant="h6" color="textSecondary">
                  Total Sales
                </Typography>
                <Typography variant="h4" color="textPrimary">
                  $90,000
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item>
                <Typography variant="h6" color="textSecondary">
                  Total Royalty
                </Typography>
                <Typography variant="h4" color="textPrimary">
                  $6,000
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Grid>

        {/* Row for Charts */}
        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={9} sm={4}>
              <Item>
                <Typography variant="h6" color="textSecondary">
                  Top Franchise
                </Typography>
                <Doughnut data={dataDoughnut} />
              </Item>
            </Grid>
            <Grid item xs={8} sm={7}>
              <Item>
                <Typography variant="h6" color="textSecondary">
                  Top Sales Location
                </Typography>
                <Bar data={dataBar} />
              </Item>
            </Grid>
          </Grid>
        </Grid>

        {/* Row for Table */}
        <Grid item xs={12}>
          <Item>
            <form className="d-flex flex item-center justify-between mb-3 " role="search">
              <input
                className="form-control me-2 border rounded-lg "
                type="search"
                placeholder="Search"
                aria-label="Search"
         
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={filteredRows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                components={{ Toolbar: CustomToolbar }}
              />
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
