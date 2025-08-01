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
import EditWork from "./EditWork";
import AddWork from "./AddWork";
import Batchmate from "../Profile/Batchmate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAlumni } from "../../../context/AlumniContext";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const imageUrl = import.meta.env.VITE_UPLOAD_URL;

const AlumniLoader = () => {
  const { setAlumniStudentId } = useAlumni();
}

const WorkList = () => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddWorkDialog, setOpenAddWorkDialog] = useState(false);

  //get data using react-query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["AlumniEmployee"],
    queryFn: () => axios.get(`${backendUrl}/AlumniEmployee`)
  });
  if (isLoading) {
    return <div>Page is Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log(data)

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
      <Grid container spacing={3} className="px-6">
        <Grid item xs={12} md={8}>
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
                marginBottom: "5px",
              }}
            >
              Add Work
            </Button>
          </Box>
          <TableContainer component={Paper}>
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
                    WorkingStatus
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
                {data?.data.map(
                  (
                    {
                      organizationName,
                      officeAddress,
                      officeEmail,
                      designation,
                      createdBy,
                      workingStatus,
                    },
                    index
                  ) => (
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
                        {organizationName}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "6px" }}
                      >
                        {officeAddress}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "6px" }}
                      >
                        {officeEmail}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "4px" }}
                      >
                        {designation}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "4px" }}
                      >
                        {createdBy}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "1px solid #c2c2c2", padding: "4px" }}
                      >
                        {workingStatus}
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
            <AddWork onClose={handleCloseAddWorkDialog} />
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
        <Grid item xs={12} md={4}>
          <Batchmate />
        </Grid>
      </Grid>
    </>
  );
};

export default WorkList;
