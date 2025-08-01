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
} from "@mui/material";

const EditWork = () => {
  return (
    <>
      <Paper
        elevation={3}
        className="m-4 p-5 w-full"
        sx={{ margin: "auto", maxWidth: "1000px" }}
      >
        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginTop: "20px",
            color: "rgb(43, 110, 181)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Edit Work Experience
        </Typography>

         <Grid container spacing={2} className="mt-10">
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              label="Organization Name"
              name="Organization-name"
              size="small"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Designation"
              name="designation"
              size="small"
              fullWidth
              required
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
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2.5}>
            <FormControl required fullWidth size="small">
              <InputLabel>Province</InputLabel>
              <Select label="Province">
                <MenuItem>Karnali</MenuItem>
                <MenuItem>Lumbini</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FormControl required fullWidth size="small">
              <InputLabel>district</InputLabel>
              <Select label="district">
                <MenuItem>Banke</MenuItem>
                <MenuItem>Kathmandu</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3.5}>
            <FormControl required fullWidth size="small">
              <InputLabel>Local level</InputLabel>
              <Select label="Local level">
                <MenuItem>Ten</MenuItem>
                <MenuItem>Twenty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} md={2.2}>
            <FormControl required fullWidth size="small">
              <InputLabel>Ward No.</InputLabel>
              <Select label="Ward No.">
                <MenuItem>4</MenuItem>
                <MenuItem>5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={3.8}>
            <TextField
              label="Office Address"
              name="office-address"              
              size="small"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={5} md={3.5}>
            <TextField
              label="Office URL"
              name="office-url"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3} md={2.5}>
            <FormControl fullWidth required size="small">
              <InputLabel>Working Status</InputLabel>
              <Select label="Working Status">
                <MenuItem>Currently working</MenuItem>
                <MenuItem>Resigned</MenuItem>
                <MenuItem>Retired</MenuItem>
                <MenuItem>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              type="file"
              size="small"
              name="joining-letter"
              accept="image/*"
              label="Joining Letter"
              InputLabelProps={{ shrink: true }}
              // inputProps={{accept:"application/pdf"}}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Joining date"
              type="date"
              name="duration"
              size="small"
               InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5}>
            <TextField
              label="Worked till date (if currently not working)"
              type="date"
              name="duration"
              size="small"
               InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              label="Remarks"
              name="remarks"
              size="small"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, pt: 4 }}>
          <Button variant="contained" size="small">
            Cancel
          </Button>
          <Button variant="outlined" size="small">
            Update
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default EditWork;
