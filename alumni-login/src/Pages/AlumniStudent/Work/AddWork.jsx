import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAlumni } from "../../../context/AlumniContext";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AddWork = ({ onClose, loading }) => {
  const { alumniStudentId, applicantNameEng } = useAlumni();

  const queryClient = useQueryClient();
  const refetch = () => queryClient.invalidateQueries([alumniStudentId]);

  const [formData, setFormData] = useState({
    OrganizationName: "",
    Designation: "",
    OfficeEmail: "",
    OfficePhone: "",
    Province: "",
    District: "",
    LocalLevel: "",
    WardNo: "",
    OfficeAddress: "",
    OfficeUrl: "",
    WorkingStatus: "",
    JoiningLetter: null, 
    JoingDate: "",
    WorkingTillDate: "",
    Remarks: "",
  });

  const [errors, setErrors] = useState({
    OfficePhone: false,
  });

  // Mutation for posting data
  const mutation = useMutation({
    mutationFn: (formDataToSend) =>
      axios.post(`${backendUrl}/AlumniEmployee/Create`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    onSuccess: () => {
      toast.success("Work detail added successfully!");
      refetch();
      onClose();
    },
    onError: (error) => {
      toast.error("Failed to add work detail.");
      console.error("Error creating alumni employee:", error);
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name === "OfficePhone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      setErrors((prev) => ({
        ...prev,
        OfficePhone: numericValue.length > 0 && numericValue.length !== 10,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading || !alumniStudentId) {
      toast.error("Alumni data not loaded yet");
      return;
    }

    const formDataToSend = new FormData();

    // ✅ Correct mapping to backend API schema
    formDataToSend.append("GraduationApplicationId", alumniStudentId);
    formDataToSend.append("OrganizationName", formData.OrganizationName);
    formDataToSend.append("Designation", formData.Designation);
    formDataToSend.append("OfficeEmail", formData.OfficeEmail);
    formDataToSend.append("OfficePhone", formData.OfficePhone);
    formDataToSend.append("Province", formData.Province);
    formDataToSend.append("District", formData.District);
    formDataToSend.append("LocalLevel", formData.LocalLevel);
    formDataToSend.append(
      "WardNo",
      formData.WardNo ? parseInt(formData.WardNo) : 0
    ); 
    formDataToSend.append("OfficeAddress", formData.OfficeAddress);
    formDataToSend.append("OfficeUrl", formData.OfficeUrl);
    formDataToSend.append("WorkingStatus", formData.WorkingStatus);

    if (formData.JoiningLetter) {
      formDataToSend.append("JoiningLetter", formData.JoiningLetter);
    }

    formDataToSend.append("JoingDate", formData.JoingDate || "");
    formDataToSend.append("WorkingTillDate", formData.WorkingTillDate || "");
    formDataToSend.append("Remarks", formData.Remarks);

    mutation.mutate(formDataToSend);
  };

  const handleClear = () => {
    setFormData({
      OrganizationName: "",
      Designation: "",
      OfficeEmail: "",
      OfficePhone: "",
      Province: "",
      District: "",
      LocalLevel: "",
      WardNo: "",
      OfficeAddress: "",
      OfficeUrl: "",
      WorkingStatus: "",
      JoiningLetter: null,
      JoingDate: "",
      WorkingTillDate: "",
      Remarks: "",
    });
  };

  return (
    <>
      <Paper
        elevation={3}
        className="m-4 p-5 w-full"
        style={{ margin: "auto", maxWidth: "1000px" }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose} sx={{ color: "#999" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            mt: 2,
            color: "rgb(43, 110, 181)",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Adding working detail of&nbsp;
          <strong>{applicantNameEng}</strong>
        </Typography>

        <Grid container spacing={2} className="mt-10">
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              label="Organization Name"
              name="OrganizationName"
              value={formData.OrganizationName}
              onChange={handleInputChange}
              size="small"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Designation"
              name="Designation"
              value={formData.Designation}
              onChange={handleInputChange}
              size="small"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Office Email"
              name="OfficeEmail"
              value={formData.OfficeEmail}
              onChange={handleInputChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Office Phone"
              name="OfficePhone"
              value={formData.OfficePhone}
              onChange={handleInputChange}
              size="small"
              inputProps={{
                maxLength: 10,
                inputMode: "numeric",
                pattern: "[0-9]{10}",
              }}
              error={errors.OfficePhone}
              helperText={errors.OfficePhone ? "Number must be 10 digits" : ""}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2.5}>
            <FormControl required fullWidth size="small">
              <InputLabel>Province</InputLabel>
              <Select
                label="Province"
                name="Province"
                value={formData.Province}
                onChange={handleSelectChange}
              >
                <MenuItem value="Karnali">Karnali</MenuItem>
                <MenuItem value="Lumbini">Lumbini</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FormControl required fullWidth size="small">
              <InputLabel>District</InputLabel>
              <Select
                label="District"
                name="District"
                value={formData.District}
                onChange={handleSelectChange}
              >
                <MenuItem value="Banke">Banke</MenuItem>
                <MenuItem value="Kathmandu">Kathmandu</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={5.5} md={3.5}>
            <FormControl required fullWidth size="small">
              <InputLabel>Local level</InputLabel>
              <Select
                label="Local level"
                name="LocalLevel"
                value={formData.LocalLevel}
                onChange={handleSelectChange}
              >
                <MenuItem value="Ten">Ten</MenuItem>
                <MenuItem value="Twenty">Twenty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2.5} md={2.2}>
            <FormControl required fullWidth size="small">
              <InputLabel>Ward No.</InputLabel>
              <Select
                label="Ward No"
                name="WardNo"
                value={formData.WardNo}
                onChange={handleSelectChange}
              >
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={3.8}>
            <TextField
              label="Office Address"
              name="OfficeAddress"
              value={formData.OfficeAddress}
              onChange={handleInputChange}
              size="small"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={5} md={3.5}>
            <TextField
              label="Office URL"
              name="OfficeUrl"
              value={formData.OfficeUrl}
              onChange={handleInputChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3} md={2.5}>
            <FormControl fullWidth required size="small">
              <InputLabel>Working Status</InputLabel>
              <Select
                label="Working Status"
                name="WorkingStatus"
                value={formData.WorkingStatus}
                onChange={handleSelectChange}
              >
                <MenuItem value="Currently working">Currently working</MenuItem>
                <MenuItem value="Resigned">Resigned</MenuItem>
                <MenuItem value="Retired">Retired</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              type="file"
              size="small"
              name="JoiningLetter"
              onChange={handleInputChange}
              accept="image/*,application/pdf"
              label="Joining Letter"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3.5} md={3}>
            <TextField
              label="Joining date"
              type="date"
              name="JoingDate"
              value={formData.JoingDate}
              onChange={handleInputChange}
              size="small"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4.5} md={5}>
            <TextField
              label="Worked till date (if currently not working)"
              type="date"
              name="WorkingTillDate"
              value={formData.WorkingTillDate}
              onChange={handleInputChange}
              size="small"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              label="Remarks"
              name="Remarks"
              value={formData.Remarks}
              onChange={handleInputChange}
              size="small"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, pt: 4 }}>
          <Button type="submit" variant="contained" size="small">
            Submit
          </Button>
          <Button variant="outlined" size="small" onClick={handleClear}>
            Clear
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default AddWork;
