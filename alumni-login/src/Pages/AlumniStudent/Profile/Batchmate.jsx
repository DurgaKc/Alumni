import { Box, Grid, Paper, Typography } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Batchmate = () => {
  const batchmates = [
    {
      name: "Roshan Ghimire",
      phone: "9866712356",
      email: "roshan34@gmail.com",
      image: "/images.jpeg",
    },
    {
      name: "Evil Devil",
      phone: "9814555887",
      email: "evil@gmail.com",
      image: "/lily.jpeg",
    },
  ];

  return (
    <>
     <Grid>
       <Typography
        variant="h5"
        gutterBottom
        sx={{
          mt: 4,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          
        }}
        className="rounded-xl p-2 bg-[#2B6EB5]"
      >
        2080 Batchmate
      </Typography>

      {batchmates.map((mate, index) => (
        <Paper key={index} className="my-3">
          <Box className="flex items-center p-3 gap-3">
            {/* Profile Image */}
            <Box
              sx={{
                cursor: "pointer",
                "& img": {
                  height: 60,
                  width: 60,
                  borderRadius: "50%",
                  objectFit: "cover",
                  "&:hover": {
                    border: "2px solid #56aeff",
                  },
                },
              }}
            >
              <img src={mate.image} alt={mate.name} className="p-0.5" />
            </Box>

            {/* Info */}
            <Box>
              <Typography className="text-gray-700">
                {mate.name}
              </Typography>

              <Box display="flex" gap={2} flexWrap="wrap">
                <Box display="flex" alignItems="center" gap={1}>
                  <FaPhoneAlt className="text-gray-500 text-sm" />
                  <Typography className="text-gray-500 italic">{mate.phone}</Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                  <MdEmail className="text-gray-500 " />
                  <Typography className="text-gray-500 italic" >{mate.email}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      ))}
     </Grid>
    </>
  );
};

export default Batchmate;
