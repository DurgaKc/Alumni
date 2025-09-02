import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  CircularProgress,
  Alert,
  Link,
} from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAlumni } from "../context/AlumniContext";
import { fetchGraduationData } from "../services/graduationService";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const navigate = useNavigate();
  const { setApplicantNameEng } = useAlumni();

  const [formData, setFormData] = useState({
    email: "ghimiredurga507@gmail.com",
    password: "D4HKN2",
  });

  const [error, setError] = useState("");

  const loginMutation = useMutation({
    mutationFn: async (loginData) => {
      const response = await axios.post(`${backendUrl}/User/Login`, loginData);
      return response.data;
    },
    onSuccess: async (data) => {
      if (data) {
        // Store user and token
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("authToken", data.tokenString);

        try {
          // Fetch graduation data immediately using login token
          const graduationData = await fetchGraduationData(data.tokenString);
          const applicantName =
            graduationData?.length > 0
              ? graduationData[0].applicantNameEng
              : data.email;
          setApplicantNameEng(applicantName); // update context
          toast.success(`Welcome ${applicantName}!`);
        } catch (err) {
          console.error("Graduation fetch failed:", err);
          toast.success(`Welcome ${data.email || "User"}!`);
        }

        navigate("/alumni-student");
      }
    },
    onError: (error) => {
      toast.error("Login failed. Check credentials and try again.");
      console.error(error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const loginData = {
      email: formData.email,
      password: formData.password,
      cOllegeId: 12,
      uniId: 0,
      isUgc: true,
    };

    loginMutation.mutate(loginData);
  };

  return (
    <Box className="bg-indigo-100 flex items-center justify-center p-9 pb-20">
      <Box className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
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
              className="pb-9 font-bold text-center text-indigo-800"
            >
              Alumni Login
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <Box>
                <Typography className="text-gray-800 font-semibold pb-2 pl-2">
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  required
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
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
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
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  variant="outlined"
                  size="small"
                  required
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
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
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
                  underline="none"
                  variant="body3"
                  color="#4f46e5"
                  className="cursor-pointer"
                >
                  Forgot password?
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loginMutation.isPending}
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
                {loginMutation.isPending ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
