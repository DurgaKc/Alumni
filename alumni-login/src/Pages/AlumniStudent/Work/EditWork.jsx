import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  DialogActions,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AlumniEmployeeService } from "../../../services/ApiServices";
import { useAlumni } from "../../../context/AlumniContext";

import toast from "react-hot-toast";

const EditWork = ({ id, onClose }) => {
  const { alumniStudentId  } = useAlumni();

  const queryClient = useQueryClient();
  const refetch = () => queryClient.invalidateQueries(["AlumniEmployee"]);

console.log("Alumni Student ID:", alumniStudentId);

  const [formData, setFormData] = useState({
    organizationName: "",
    designation: "",
    officeEmail: "",
    officePhone: "",
    province: "",
    district: "",
    localLevel: "",
    wardNo: "",
    officeAddress: "",
    officeUrl: "",
    workingStatus: "",
    joiningLetter: null,
    joiningLetterName: "",
    joingDate: "",
    workingTillDate: "",
    remarks: "",
  });

  const { data: workData, isLoading } = useQuery({
    queryKey: ["work", id],
    queryFn: () => AlumniEmployeeService.getById(id).then((res) => res.data),
    enabled: !!id,
  });

  //  Apply useEffect to prefill form once workData is available
  useEffect(() => {
    if (workData) {
      setFormData({
        organizationName: workData.organizationName || "",
        designation: workData.designation || "",
        officeEmail: workData.officeEmail || "",
        officePhone: workData.officePhone || "",
        province: workData.province || "",
        district: workData.district || "",
        localLevel: workData.localLevel || "",
        wardNo: workData.wardNo || "",
        officeAddress: workData.officeAddress || "",
        officeUrl: workData.officeUrl || "",
        workingStatus: workData.workingStatus || "",
        joiningLetter: null,
        joiningLetterName: workData.joiningLetter || "",
        joingDate: workData.joingDate?.split("T")[0] || "",
        workingTillDate: workData.workingTillDate?.split("T")[0] || "",
        remarks: workData.remarks || "",
      });
    }
  }, [workData]);

  const updateMutation = useMutation({
    mutationFn: (formDataToSend) => AlumniEmployeeService.update(id, formDataToSend,{
      headers:{
        "Content-Type": "multipart/form-data",
      },
    }),
    onSuccess: () => {
      refetch();
      onClose();
      toast.success("Work experience updated Successfully!");
    },
    onError: (error) => {
      console.error("Update failed:", error);
      toast.error("Update failed. Please try again.");
    },
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "joiningLetter") {
      setFormData((prev) => ({
        ...prev,
        joiningLetter: files[0],
        joiningLetterName: files[0]?.name || "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const formDataToSend = new FormData();

  // ✅ map correctly to backend schema
  formDataToSend.append("GraduationApplicationId", alumniStudentId);

  formDataToSend.append("OrganizationName", formData.organizationName);
  formDataToSend.append("Designation", formData.designation);
  formDataToSend.append("OfficeEmail", formData.officeEmail);
  formDataToSend.append("OfficePhone", formData.officePhone);
  formDataToSend.append("Province", formData.province);
  formDataToSend.append("District", formData.district);
  formDataToSend.append("LocalLevel", formData.localLevel);

  formDataToSend.append(
    "WardNo",
    formData.wardNo ? parseInt(formData.wardNo) : 0
  );

  formDataToSend.append("OfficeAddress", formData.officeAddress);
  formDataToSend.append("OfficeUrl", formData.officeUrl);
  formDataToSend.append("WorkingStatus", formData.workingStatus);

  if (formData.joiningLetter) {
    formDataToSend.append("JoiningLetter", formData.joiningLetter);
  }

  formDataToSend.append("JoingDate", formData.joingDate || "");
  formDataToSend.append("WorkingTillDate", formData.workingTillDate || "");
  formDataToSend.append("Remarks", formData.remarks || "");

  updateMutation.mutate(formDataToSend);
};


  if (isLoading) return <div>Loading work details...</div>;

  return (
    <Paper
      elevation={3}
      className="m-4 p-5 w-full"
      sx={{ margin: "auto", maxWidth: "1000px" }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          mt: 2.5,
          color: "rgb(43, 110, 181)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Update Work Experience
      </Typography>

      <Grid container spacing={2} sx={{ mt: 5 }}>
        {/* Organization Name */}
        <Grid item xs={12} sm={8} md={6}>
          <TextField
            label="Organization Name"
            name="organizationName"
            size="small"
            fullWidth
            required
            value={formData.organizationName}
            onChange={handleChange}
          />
        </Grid>

        {/* Designation */}
        <Grid item xs={12} sm={4} md={3}>
          <TextField
            label="Designation"
            name="designation"
            size="small"
            fullWidth
            required
            value={formData.designation}
            onChange={handleChange}
          />
        </Grid>

        {/* Office Email */}
        <Grid item xs={12} sm={4} md={3}>
          <TextField
            label="Office Email"
            name="officeEmail"
            size="small"
            fullWidth
            value={formData.officeEmail}
            onChange={handleChange}
          />
        </Grid>

        {/* Office Phone */}
        <Grid item xs={12} sm={4} md={3}>
          <TextField
            label="Office Phone"
            name="officePhone"
            size="small"
            fullWidth
            required
            value={formData.officePhone}
            onChange={handleChange}
          />
        </Grid>

        {/* Province */}
        <Grid item xs={12} sm={4} md={2.5}>
          <FormControl required fullWidth size="small">
            <InputLabel>Province</InputLabel>
            <Select
              name="province"
              label="Province"
              value={formData.province}
              onChange={handleChange}
            >
              <MenuItem value="Karnali">Karnali</MenuItem>
              <MenuItem value="Lumbini">Lumbini</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* District */}
        <Grid item xs={12} sm={4} md={3}>
          <FormControl required fullWidth size="small">
            <InputLabel>District</InputLabel>
            <Select
              name="district"
              label="District"
              value={formData.district}
              onChange={handleChange}
            >
              <MenuItem value="Banke">Banke</MenuItem>
              <MenuItem value="Kathmandu">Kathmandu</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Local Level */}
        <Grid item xs={12} sm={6} md={3.5}>
          <FormControl required fullWidth size="small">
            <InputLabel>Local level</InputLabel>
            <Select
              name="localLevel"
              label="Local level"
              value={formData.localLevel}
              onChange={handleChange}
            >
              <MenuItem value="Ten">Ten</MenuItem>
              <MenuItem value="Twenty">Twenty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Ward No. */}
        <Grid item xs={12} sm={3} md={2.2}>
          <FormControl required fullWidth size="small">
            <InputLabel>Ward No.</InputLabel>
            <Select
              name="wardNo"
              label="Ward No."
              value={formData.wardNo}
              onChange={handleChange}
            >
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Office Address */}
        <Grid item xs={12} sm={4} md={3.8}>
          <TextField
            label="Office Address"
            name="officeAddress"
            size="small"
            fullWidth
            required
            value={formData.officeAddress}
            onChange={handleChange}
          />
        </Grid>

        {/* Office URL */}
        <Grid item xs={12} sm={5} md={3.5}>
          <TextField
            label="Office URL"
            name="officeUrl"
            size="small"
            fullWidth
            value={formData.officeUrl}
            onChange={handleChange}
          />
        </Grid>

        {/* Working Status */}
        <Grid item xs={12} sm={3} md={2.5}>
          <FormControl fullWidth required size="small">
            <InputLabel>Working Status</InputLabel>
            <Select
              name="workingStatus"
              label="Working Status"
              value={formData.workingStatus}
              onChange={handleChange}
            >
              <MenuItem value="Currently working">Currently working</MenuItem>
              <MenuItem value="Resigned">Resigned</MenuItem>
              <MenuItem value="Retired">Retired</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Joining Letter */}
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            type="file"
            size="small"
            name="joiningLetter"
            accept="image/*"
            label="Joining Letter"
            InputLabelProps={{ shrink: true }}
            fullWidth
            onChange={handleChange}
            helperText={formData?.joiningLetterName}
          />
        </Grid>

        {/* Joining Date */}
        <Grid item xs={12} sm={4} md={3}>
          <TextField
            label="Joining date"
            type="date"
            name="joingDate"
            size="small"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={formData.joingDate}
            onChange={handleChange}
          />
        </Grid>

        {/* Worked Till Date */}
        <Grid item xs={12} sm={8} md={5}>
          <TextField
            label="Worked till date (if currently not working)"
            type="date"
            name="workingTillDate"
            size="small"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={formData.workingTillDate}
            onChange={handleChange}
          />
        </Grid>

        {/* Remarks */}
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            label="Remarks"
            name="remarks"
            size="small"
            fullWidth
            multiline
            rows={4}
            value={formData.remarks}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, pt: 4 }}>
        <DialogActions>
          <Button
            variant="contained"
            size="small"
            onClick={onClose}
            disabled={updateMutation.isLoading}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            size="small"
            type="submit"
            disabled={updateMutation.isLoading}
          >
            {updateMutation.isLoading ? "Updating..." : "Update"}
          </Button>
        </DialogActions>
      </Box>
    </Paper>
  );
};

export default EditWork;
