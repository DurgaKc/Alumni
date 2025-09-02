import { Box, Grid, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchGraduationData } from "../../../services/graduationService";

const Graduation = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["graduationData"],
    queryFn: fetchGraduationData
  });

  if (isLoading) return <p>Loading...</p>;

  const graduation = data?.[0]; // or find by studentID if multiple records

  const details = [
    { label: "Level", value: graduation?.levelName },
    { label: "Faculty", value: graduation?.facultyName },
    { label: "Program", value: graduation?.programName },
    { label: "Enrolled Year", value: graduation?.enrolledYear },
    { label: "Graduated Year", value: graduation?.passedYear },
    { label: "Obtained Percentage/Grade",  value: graduation?.gpa != null 
    ? graduation.gpa <= 4 
      ? `${graduation.gpa} cgpa`
      : `${graduation.gpa}%` 
    : "N/A"},
  ];

  return (
    <Grid>
      <Box className="flex items-center gap-4 my-4">
        <h2 className="text-2xl font-semibold text-gray-700 whitespace-nowrap">
          Graduation Info
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
              <Box className="p-4 rounded-lg hover:shadow transition duration-200">
                <Typography className="text-gray-500 text-sm">
                  {item.label}: {item.value || "N/A"}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Graduation;
