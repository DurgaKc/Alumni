import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../utils/auth";
import { fetchGraduationData } from "../services/graduationService";

const AlumniContext = createContext();

export const AlumniProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [alumniStudentId, setAlumniStudentId] = useState(null);
  const [applicantNameEng, setApplicantNameEng] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setAlumniStudentId(user.id || user.studentID || null);
      setApplicantNameEng(user.applicantNameEng || "");
    }
  }, []);
console.log(currentUser)
  return (
    <AlumniContext.Provider
      value={{
        currentUser,
        alumniStudentId,
        applicantNameEng,
        setApplicantNameEng, // ✅ expose setter for updates
      }}
    >
      {children}
    </AlumniContext.Provider>
  );
};

export const useAlumni = () => useContext(AlumniContext);
