import { Box, Grid, Typography, CircularProgress, Alert } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Graduation from "./Graduation";
import Batchmate from "./Batchmate";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../utils/auth";
import { fetchGraduationData } from "../../../services/graduationService";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);

  // Load current user from localStorage
  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
  }, []);

  // Fetch graduation data only when currentUser is available
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["graduationData"],
    queryFn: () => fetchGraduationData(localStorage.getItem("authToken")),
    enabled: !!currentUser, // Wait until currentUser exists
  });

  if (!currentUser || isLoading) return <CircularProgress />;
  if (isError) return <Alert severity="error">Failed to load graduation data: {error?.message}</Alert>;

  // Pick graduation record: match by studentID if available, else take the first record
  const graduation = data?.find((item) => item.studentID === currentUser?.studentID) || data?.[0] || null;

  return (
    <div className="p-8 min-h-screen mt-2 rounded-2xl shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center rounded-xl p-4 bg-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
        <div className="flex gap-2 text-sm text-gray-500 font-medium">
          <span className="hover:text-blue-600 cursor-pointer transition">Personal Info</span>
          <span>/</span>
          <span className="hover:text-blue-600 cursor-pointer transition">Graduation</span>
          <span>/</span>
          <span className="hover:text-blue-600 cursor-pointer transition">Work Profile</span>
          <span>/</span>
          <span className="hover:text-blue-600 cursor-pointer transition">Batchmate</span>
        </div>
      </div>

      <Grid container spacing={4} className="mt-4">
        {/* Left Section */}
        <Grid item xs={12} md={7.5}>
          <Box className="flex items-center p-4 gap-4">
            <Box
              sx={{
                cursor: "pointer",
                "& img": {
                  height: 100,
                  width: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  "&:hover": { border: "2px solid #56aeff" },
                },
              }}
            >
              <img src="/lily.jpeg" alt="Profile" className="p-0.5" />
            </Box>

            <Box>
              <Typography variant="h6" className="text-gray-800">
                {graduation?.applicantNameEng || "N/A"}
              </Typography>
              <p className="text-gray-500">@{currentUser?.type || "user"}</p>
            </Box>
          </Box>

          {/* User Info Section */}
          <Box className="w-full mt-8 px-4">
            <Box className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl font-semibold text-gray-700 whitespace-nowrap">User Info</h2>
              <div className="flex-grow h-px bg-gray-300"></div>
            </Box>

            <Box className="flex flex-col gap-3 text-gray-700 text-base">
              <Box className="flex items-center gap-2">
                <LocalPhoneIcon />
                <span>{graduation?.contactNo || "N/A"}</span>
              </Box>
              <Box className="flex items-center gap-2">
                <EmailIcon />
                <span>{graduation?.email || currentUser?.email || "N/A"}</span>
              </Box>
              <Box className="flex items-center gap-2">
                <HomeWorkIcon />
                <span>{graduation?.studentAddress || graduation?.universityName || "N/A"}</span>
              </Box>
            </Box>

            {/* Graduation Section */}
            <Graduation graduation={graduation} />
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4.5}>
          <Batchmate />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
