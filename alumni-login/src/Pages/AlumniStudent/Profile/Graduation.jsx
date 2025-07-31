import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Graduation = () => {
  const details = [
          { label: "Level", value: "Bachelor's" },
          { label: "Faculty", value: "Science" },
          { label: "Program", value: "BSc CSIT" },
          { label: "Enrolled Year", value: "2019" },
          { label: "Graduated Year", value: "2023" },
          { label: "Obtained Percentage/Grade", value: "85%" },
        ];
  return (
    <>
      <Grid>
        
        <Box className="flex items-center gap-4 my-4">
          <h2 className="text-2xl font-semibold text-gray-700 whitespace-nowrap">
            Graduation_info
          </h2>
          <div className="flex-grow h-px bg-gray-300"></div>
        </Box>
         <Paper className="p-6 rounded-xl shadow-sm bg-white">
      <Typography variant="h6" className="mb-4 text-gray-800 font-semibold">
        Education Details
      </Typography>

      <Grid container>
       {details.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box className=" p-4 rounded-lg hover:shadow transition duration-200">
              <Typography className="text-gray-500 text-sm">{item.label}:- {item.value}</Typography>
              {/* <Typography className="text-gray-800 font-medium">{</Typography> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
      </Grid>
    </>
  );
};

export default Graduation;
