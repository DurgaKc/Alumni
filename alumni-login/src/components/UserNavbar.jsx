import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <>
      <Grid>
        {/* Header part  */}
        <Box>
          <div className="flex flex-wrap items-center justify-between w-full px-6 py-1">
            {/* Left Side: Logo + Campus address */}
            <div className="flex items-center space-x-6">
              <div className="logo w-32">
                <img src="/tulogo.png" className="h-24 w-24" alt="TU Logo" />
              </div>
              <div className="text-sky-700">
                <h1 className="font-bold text-lg">TEST MULTIPLE CAMPUS</h1>
                <p className="text-md">
                  Kathmandu Metropolitian City, Kathmandu
                </p>
              </div>
            </div>

            <div className="text-sky-700">
              <h2 className="font-bold text-lg">Student Alumni System (SAS)</h2>
            </div>
          </div>
        </Box>
      </Grid>
      {/* Navigation */}
      <Grid
        container
        alignItems="center"
        sx={{
          //   position: "fixed",
          background: "#2B6EB5",
          color: "white",
          width: "100%",
          boxShadow: 1,
          px: 4,
          py: 1,
          zIndex: 1000,
        }}
      >
        
        <Grid item sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Link to="">
            <HomeIcon sx={{ fontSize: 28 }} />
          </Link>
          <Link to="user-notice">
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.125rem",
                cursor: "pointer",
                "&:hover": { color: "#e5e5e5" },
                transition: "color 0.3s",
              }}
            >
              Notice
            </Typography>
          </Link>
          <Link to="work-list">
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.125rem",
                cursor: "pointer",
                "&:hover": { color: "#e5e5e5" },
                transition: "color 0.3s",
              }}
            >
              Work
            </Typography>
          </Link>
          <Link to="profile">
            <Typography
              variant="h6"
              sx={{
                // fontWeight: "bold",
                fontSize: "1.125rem",
                cursor: "pointer",
                "&:hover": { color: "#e5e5e5" },
                transition: "color 0.3s",
              }}
            >
              UserProfile
            </Typography>
          </Link>
        </Grid>
        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right Section: Login Button */}
        <Grid item>
          <Link to="/">
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                borderWidth: "1px",
                borderRadius: "8px",
                px: 2,
                py: 0.6,
                mx: 4,
                fontWeight: "bold",
                fontFamily: "sans-serif",
                "&:hover": {
                  backgroundColor: "#005bb5",
                  borderColor: "#ffffff",
                },
              }}
            >
              Logout
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default UserNavbar;
