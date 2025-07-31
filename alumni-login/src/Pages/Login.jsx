import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from "@mui/icons-material/Lock";
import { Link } from '@mui/material';

const Login = () => {
  return (
<Box className=" bg-indigo-100 flex items-center justify-center p-9 pb-20 ">

      <Box className="w-full  max-w-3xl bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side */}
        <Box className="md:w-1/2 bg-gradient-to-br from-purple-400 to-indigo-400 text-white flex flex-col items-center justify-center p-10 space-y-6">
          <FaGraduationCap className="text-7xl drop-shadow-md animate-bounce" />
          <Typography
            variant="h4"
            className="font-extrabold tracking-wide text-center"
          >
            Welcome to Student Alumni
          </Typography>
          <Typography
            variant="body1"
            className="text-lg leading-relaxed text-center"
          >
            Your personalized gateway to academic excellence. Stay connected,
            stay inspired!
          </Typography>
        </Box>

        {/* Right Side */}
        <Box className="md:w-1/2 p-10 flex items-center justify-center">
          <Box className="w-full">
            <Typography
              variant="h5"
              className=" pb-9 font-bold text-center text-indigo-800 "
            >
              Alumni Login
            </Typography>
            <form className="space-y-5">
              <Box>
                <Typography className="text-gray-800 font-semibold pb-2 pl-2">
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 6,
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography className="text-gray-800 font-semibold pb-2 pl-2">
                  Password
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  placeholder="Enter your password"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 6,
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </Box>
              <Box className="text-right">
                <Link
                //   to="/forgot-password" 
                  underline="none"
                  variant="body3"
                  color="#4f46e5"
                  className="cursor-pointer "
                >
                  Forgot password?
                </Link>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#6366f1",
                  "&:hover": { backgroundColor: "#4f46e5" },
                  py: 1,
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: 6,
                  boxShadow: 2,
                }}
              >
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
