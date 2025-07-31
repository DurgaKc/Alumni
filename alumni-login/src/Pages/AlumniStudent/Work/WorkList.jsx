import {
  Box,
  Button,
  Dialog,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import EditWork from "./EditWork";
import AddWork from "./AddWork";
import Batchmate from "../Profile/Batchmate";
const works = [
  {
    office_name: "Debugsoft",
    office_address: "Lalitpur",
    office_email: "dbug.mgmt@gmail.com",
    position: "Developer",
    added_by: "Rosan",
    duration: "2 years",
  },
  {
    office_name: "Debugsoft",
    office_address: "Kupondole",
    office_email: "dibugsoft.mgmt@gmail.com",
    position: "Developer",
    added_by: "Rosan",
    duration: "2 years",
  },
];

const WorkList = () => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddWorkDialog, setOpenAddWorkDialog] = useState(false);

  // for edit dialog
  const handleEditClick = (id) => {
    setOpenEditDialog(true);
  };
  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };
  // for add work dialog
  const handleAddWorkClick = (id) => {
    setOpenAddWorkDialog(true);
  };
  const handleCloseAddWorkDialog = (id) => {
    setOpenAddWorkDialog(false);
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7.6}>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              marginTop: "30px",
              color: "rgb(43, 110, 181)",
              display: "flex",
              justifyContent: "center",
             
            }}
          >
            Work Experience List
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="outlined"
              startIcon={<IoIosAdd />}
              onClick={handleAddWorkClick}
              sx={{
                color: "#fff",
                backgroundColor: "#2B6EB5",
                textTransform: "none",
                fontWeight: 500,
                paddingY: "4px",
                paddingX: "12px",
                marginBottom:"5px"
              }}
            >
              Add Work
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{  mx: "20px" }}>
            <Table>
              <TableHead sx={{ backgroundColor: "rgb(43, 110, 181)" }}>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{
                      color: "white",
                      border: "1px solid  #c2c2c2",
                      padding: "4px",
                    }}
                  >
                    S.NO.
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "white",
                      border: "1px solid  #c2c2c2",
                      padding: "3px",
                    }}
                  >
                    Office Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "white",
                      border: "1px solid  #c2c2c2",
                      padding: "3px",
                    }}
                  >
                    Office Address
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "white",
                      border: "1px solid  #c2c2c2",
                      padding: "3px",
                    }}
                  >
                    Office Email
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "white",
                      border: "1px solid  #c2c2c2",
                      padding: "4px",
                    }}
                  >
                    Working Position
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "white",
                      border: "1px solid  #c2c2c2",
                      padding: "4px",
                    }}
                  >
                    Added By
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "white",
                      border: "1px solid  #c2c2c2",
                      padding: "4px",
                    }}
                  >
                    Duration
                  </TableCell>
                  
                  <TableCell
                    align="left"
                    sx={{
                      color: "white",
                      border: "1px solid  #c2c2c2",
                      padding: "4px",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {works.map(
                  ({ office_name, office_address, office_email, position, added_by, duration }, index) => (
                    <TableRow key={index}>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "3px" }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "6px" }}
                      >
                        {office_name}
                      </TableCell>
                       <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "6px" }}
                      >
                        {office_address}
                      </TableCell>
                       <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "6px" }}
                      >
                        {office_email}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "4px" }}
                      >
                        {position}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "4px" }}
                      >
                        {added_by}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "4px" }}
                      >
                        {duration}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "4px" }}
                      >
                        <Box display="flex" justifyContent="center">
                          <Button
                            variant="outlined"
                            onClick={handleEditClick}
                            sx={{
                              color: "#2B6EB5",
                              borderColor: "#2B6EB5",
                              textTransform: "none",
                              fontWeight: 500,
                              paddingY: "1px",
                            }}
                          >
                            edit
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* add work dialog */}
          <Dialog
            open={openAddWorkDialog}
            onClose={handleCloseAddWorkDialog}
            maxWidth
          >
            <AddWork />
          </Dialog>
          {/* edit */}
          <Dialog
            open={openEditDialog}
            onClose={handleCloseEditDialog}
            maxWidth
          >
            <EditWork />
          </Dialog>
        </Grid>
        <Grid item xs={12} md={4.2}   sx={{marginX:"10px"}}>
          <Batchmate/>
        </Grid>
      </Grid>
    </>
  );
};

export default WorkList;
