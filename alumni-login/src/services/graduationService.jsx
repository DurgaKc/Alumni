import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Accept token as parameter
export const fetchGraduationData = async (token) => {
  const authToken = token || localStorage.getItem("authToken");
  if (!authToken) throw new Error("No token available");

  const res = await axios.get(`${backendUrl}/Graduation`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res.data; // this should return array with applicantNameEng
};
