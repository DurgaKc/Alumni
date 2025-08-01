import { createContext, useContext, useState } from "react";

const AlumniContext = createContext();

export const AlumniProvider = ({children}) => {
    const [alumniStudentId, setAlumniStudentId] = useState(null);

    return(
        <AlumniContext.Provider value = {{ alumniStudentId, setAlumniStudentId}}>
            {children}
        </AlumniContext.Provider>
    );
};
export const useAlumni = () =>useContext(AlumniContext);