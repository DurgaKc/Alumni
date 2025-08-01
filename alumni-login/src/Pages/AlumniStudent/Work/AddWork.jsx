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

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AddWork = ({ onClose }) => {
  const queryClient = useQueryClient();
  const refetch = () => queryClient.invalidateQueries([alumni]);

  
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
    JoiningLetter: "",
    JoingDate: "",
    WorkingTillDate: "",
    Remarks: "",
  });

  // Mutation for posting data
  const mutation = useMutation({
    mutationFn: (formData) => 
      axios.post(`${backendUrl}/AlumniEmployee/Create`, formData),
    onSuccess: () => {
      toast.success("Work detail added successfully!")
      refetch();
    },
     onError: (error) => {
    toast.error("Failed to add work detail.");
    console.error(error);
  }
  });

  const handleInputChange = (e) => {
    const { name, value, type, files  } = e.target;
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
    mutation.mutate(formData);
    console.log("Form Data Before Submit:", formData);
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
      JoiningLetter: "",
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
          style={{
            marginTop: "10px",
            color: "rgb(43, 110, 181)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 style={{}}>
            Adding working detail of &nbsp; <strong> Employee Name</strong>
          </h1>
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
              <InputLabel>district</InputLabel>
              <Select
                label="district"
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
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
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
              accept="image/*"
              label="Joining Letter"
              InputLabelProps={{ shrink: true }}
              // inputProps={{accept:"application/pdf"}}
              fullWidth
              required
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
