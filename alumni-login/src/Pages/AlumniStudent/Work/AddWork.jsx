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

const AddWork = () => {
  return (
    <>
      <Paper
        elevation={3}
        className="m-4 p-5 w-full"
        style={{ margin: "auto", maxWidth: "1000px" }}
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: "20px",
            color: "rgb(43, 110, 181)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Add Work Experience
        </Typography>

        <Grid container spacing={2} className="mt-10">
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Office Name"
              name="office-name"
              size="small"
              fullWidth
              // required
            />
          </Grid>
          
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Designation"
              name="designation"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Office Email"
              name="office-email"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Office Phone"
              name="office-phone"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Province</InputLabel>
              <Select  label="Province">
                <MenuItem>Karnali</MenuItem>
                <MenuItem>Lumbini</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>district</InputLabel>
              <Select  label="district">
                <MenuItem>Banke</MenuItem>
                <MenuItem>Kathmandu</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={5} md={3.8}>
            <FormControl fullWidth size="small">
              <InputLabel>Local level</InputLabel>
              <Select label="Local level">
                <MenuItem>Ten</MenuItem>
                <MenuItem>Twenty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} md={2.2}>
            <FormControl fullWidth size="small">
              <InputLabel>Ward No</InputLabel>
              <Select  label="Wars No">
                <MenuItem>4</MenuItem>
                <MenuItem>5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={3.5}>
            <TextField
              label="Office Address"
              name="office-address"
              size="small"
              fullWidth
              // required
            />
          </Grid>
          
          <Grid item xs={12} sm={5} md={3.5}>
            <TextField
              label="Office Url"
              name="office-url"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <FormControl fullWidth required size="small">
                  <InputLabel>Status</InputLabel>
                  <Select
                    name="status"
                    label="Status"
                    // sx={{
                    //   color: formData.status ? "green" : "red",
                    // }}
                  >
                    <MenuItem value={true}>Active</MenuItem>
                    <MenuItem value={false}>Inactive</MenuItem>
                  </Select>
                </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
                    type="file"
                    size="small"
                    name="joining-letter"
                    accept="image/*"
                    label="Joining Letter"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    required
                  />
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Added person"
              name="added-person"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Duration"
              name="duration"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <TextField label="Remarks" name="remarks" size="small" fullWidth />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, pt: 4 }}>
          <Button type="submit" variant="contained" size="small">
            Submit
          </Button>
          <Button variant="outlined" size="small">
            Clear
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default AddWork;
