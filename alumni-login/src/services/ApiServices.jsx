import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
 baseURL: backendUrl,
});


export const AlumniEmployeeService ={
    getAll: () => api.get("/AlumniEmployee"),
    getById: (id) => api.get(`AlumniEmployee/${id}`),
    getByGraduationId: (graduationApplicationId) => api.get(`AlumniEmployee/ByGraduationApplication?graduationApplicationId=${graduationApplicationId}`),
    create:(data) => api.post("/AlumniEmployee/Create", data),
    update:(id, data) => api.put(`AlumniEmployee/Update/${id}`, data),
    delete: (id) =>api.delete(`/AlumniEmployee/Delete/${id}`),
}