import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden", 
        position: "relative", 
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
};

export default DefaultLayout;
