/*mport React, { useEffect, useRef } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Card, Typography } from "@material-tailwind/react";
import Chart from 'chart.js/auto';
import Stack from '@mui/material/Stack'; // Assuming you're using Material-UI v5 for Stack

const dataDoughnut = {
  labels: ["KFC", "Lorem ipsum", "Lorem ipsum"],
  datasets: [
    {
      data: [60, 6, 0.5],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
    },
  ],
};

const dataBar = {
  labels: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Lorem ipsum", "Lorem ipsum"],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
      hoverBorderColor: "rgba(54, 162, 235, 1)",
      data: [6000, 6000, 6000, 6000, 6000, 6000],
    },
    {
      label: "Royalty",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255, 159, 64, 0.4)",
      hoverBorderColor: "rgba(255, 159, 64, 1)",
      data: [600, 600, 600, 600, 600, 600],
    },
  ],
};

function Dashboard() {
  const doughnutRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    return () => {
      // Destroy the chart instances when the component unmounts
      if (doughnutRef.current) {
        doughnutRef.current.destroy();
      }
      if (barRef.current) {
        barRef.current.destroy();
      }
    };
  }, []);

  return (
    <Stack spacing={4} padding={4}>
      <Stack direction="row" spacing={4} backgroundColor="#f5f5f5" padding={4} borderRadius="8px" boxShadow={1}>
        <Stack direction="row" spacing={4} width="100%">
          <Card className="p-4 bg-gray-300 shadow">
            <Typography variant="h6" color="blue-gray">
              Total Franchise
            </Typography>
            <Typography variant="h3" color="blue-gray">
              20
            </Typography>
          </Card>
          <Card className="p-4 bg-gray-300 shadow">
            <Typography variant="h6" color="blue-gray">
              Total Sales
            </Typography>
            <Typography variant="h3" color="blue-gray">
              $90,000
            </Typography>
          </Card>
          <Card className="p-4 bg-gray-300 shadow">
            <Typography variant="h6" color="blue-gray">
              Total Royalty
            </Typography>
            <Typography variant="h3" color="blue-gray">
              $6,000
            </Typography>
          </Card>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={4} backgroundColor="#f5f5f5" padding={4} borderRadius="8px" boxShadow={1}>
        <Card className="p-4 bg-gray-300 shadow">
          <Typography variant="h6" color="blue-gray">
            Top Franchise
          </Typography>
          <Doughnut ref={doughnutRef} data={dataDoughnut} />
        </Card>
        <Card className="p-4 bg-gray-300 shadow">
          <Typography variant="h6" color="blue-gray">
            Top Sales Location
          </Typography>
          <Bar ref={barRef} data={dataBar} />
        </Card>
      </Stack>
    </Stack>
  );
}

export default Dashboard;*/

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack"; // Import Stack from Material-UI
import { Doughnut, Bar } from "react-chartjs-2";
import { Typography } from "@material-tailwind/react";
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
      data: [60, 6, 0.5],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
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
      data: [6000, 5000, 4000, 3000, 2000, 1000],
    },
    {
      label: "Royalty",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255, 159, 64, 0.4)",
      hoverBorderColor: "rgba(255, 159, 64, 1)",
      data: [600, 500, 400, 300, 200, 100],
    },
  ],
};

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#f0f0f0", padding: 9 }}>
      <Grid container spacing={2}>
        {/* Row for Cards */}
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Item>
                <Typography variant="h6" color="blue-gray">
                  Total Franchise
                </Typography>
                <Typography variant="h3" color="blue-gray">
                  20
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Item>
                <Typography variant="h6" color="blue-gray">
                  Total Sales
                </Typography>
                <Typography variant="h3" color="blue-gray">
                  $90,000
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Item>
                <Typography variant="h6" color="blue-gray">
                  Total Royalty
                </Typography>
                <Typography variant="h3" color="blue-gray">
                  $6,000
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Grid>

        {/* Row for Charts */}
        <Grid item xs={11}>
          <Grid container spacing={4}>
            <Grid item xs={5} sm={4}>
              <Item>
                <Typography variant="h6" color="blue-gray">
                  Top Franchise
                </Typography>
                <Doughnut data={dataDoughnut} />
              </Item>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Item>
                <Typography variant="h6" color="blue-gray">
                  Top Sales Location
                </Typography>
                <Bar data={dataBar} />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
