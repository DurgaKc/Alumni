import { Box, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Graduation from "./Graduation";
import Batchmate from "./Batchmate";
const UserProfile = () => {
  return (
    <>
      <div className="p-8 min-h-screen mt-8 rounded-2xl shadow-md ">
        {/* Header Section */}
        <div className="flex justify-between items-center rounded-xl p-4 bg-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
          <div className="flex gap-2 text-sm text-gray-500 font-medium">
            <span className="hover:text-blue-600 cursor-pointer transition">
              Personal Info
            </span>
            <span>/</span>
            <span className="hover:text-blue-600 cursor-pointer transition">
              Graduation
            </span>
            <span>/</span>
            <span className="hover:text-blue-600 cursor-pointer transition">
              Work Profile
            </span>
            <span>/</span>
            <span className="hover:text-blue-600 cursor-pointer transition">
              Batchmate
            </span>
          </div>
        </div>
        <Grid container >
          <Grid item xs={12} md={7.5}>
            <Box className="flex items-center p-4 gap-4">
              {/* Profile Image */}
              <Box
                sx={{
                  cursor: "pointer",
                  "& img": {
                    height: 100,
                    width: 100,
                    borderRadius: "50%",
                    objectFit: "cover",
                    "&:hover": {
                      border: "2px solid #56aeff",
                    },
                  },
                }}
              >
                <img src="/lily.jpeg" alt="Profile" className="p-0.5" />
              </Box>

              <Box>
                <Typography variant="h6" className="text-gray-800">
                  Roshan Ghimire
                </Typography>
                <p className="text-gray-500">@ghimireyy</p>
              </Box>
            </Box>

            {/* User Info Section */}
            <Box className="w-full mt-8 px-4">
              {/* Heading with Line */}
              <Box className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-semibold text-gray-700 whitespace-nowrap">
                  User_info
                </h2>
                <div className="flex-grow h-px bg-gray-300"></div>
              </Box>

              <Box className="flex flex-col gap-3 text-gray-700 text-base">
                <Box className="flex items-center gap-2">
                  <LocalPhoneIcon />
                  <span>9804524261</span>
                </Box>
                <Box className="flex items-center gap-2">
                  <EmailIcon />
                  <span>ghimire56877@gmail.com</span>
                </Box>
                <Box className="flex items-center gap-2">
                  <HomeWorkIcon />
                  <span>Khajura-2, Banke</span>
                </Box>
              </Box>
              <Graduation />
            </Box>
          </Grid>
          <Grid item xs={12} md={4.5}>
            <Batchmate/>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UserProfile;
