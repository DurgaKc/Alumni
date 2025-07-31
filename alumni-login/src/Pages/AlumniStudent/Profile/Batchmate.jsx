import { Box, Paper, Typography } from "@mui/material";
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
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          mt: 4,
          color: "rgb(43, 110, 181)",
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        Batchmate List
      </Typography>

      {batchmates.map((mate, index) => (
        <Paper key={index} className="my-3">
          <Box className="flex items-center p-3 gap-3">
            {/* Profile Image */}
            <Box
              sx={{
                cursor: "pointer",
                "& img": {
                  height: 50,
                  width: 50,
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
              <Typography variant="body1" className="text-gray-700">
                {mate.name}
              </Typography>

              <Box display="flex" gap={2} flexWrap="wrap">
                <Box display="flex" alignItems="center" gap={1}>
                  <FaPhoneAlt className="text-gray-500" />
                  <Typography className="text-gray-500">{mate.phone}</Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                  <MdEmail className="text-gray-500" />
                  <Typography className="text-gray-500">{mate.email}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      ))}
    </>
  );
};

export default Batchmate;
