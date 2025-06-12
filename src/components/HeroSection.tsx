import { Box, Button, Container, Typography } from "@mui/material"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "60vh", md: "75vh" },
        backgroundImage: 'url("/images/banner.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        },
        pt: { xs: 10, md: 16 },
        pb: { xs: 12, md: 20 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-end" },
          textAlign: { xs: "center", md: "right" },
          ml: { md: 70 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%", maxWidth: 550 }}
        >
          <Box
            sx={{
              mt: 4,
              px: { xs: 2, sm: 4, md: 5 },
              py: { xs: 4, md: 5 },
              borderRadius: 5,
              boxShadow: 6,

            }}
          >
            <Typography variant="h3" fontWeight={800} color="primary" sx={{ mb: 3, WebkitTextStroke: '0.5px #000', textAlign: 'center',textShadow: "2px 2px 4px rgba(0,0,0,0.3)", }}>
              SmartBus
            </Typography>
            <Typography variant="h3" fontWeight={800} color="primary" sx={{ mb: 3, WebkitTextStroke: '0.5px #000', textAlign: 'center',textShadow: "2px 2px 4px rgba(0,0,0,0.3)", }}>
              Di chuyển thông minh
            </Typography>
           <Typography variant="h5" sx={{ mb: 4, color: 'white', WebkitTextStroke: '0.1px black', textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
              Cùng SmartBus trải nghiệm hệ thống giao thông công cộng nhanh,
              tiết kiệm và dễ sử dụng tại Việt Nam.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Button variant="contained" color="primary" size="large" sx={{ fontWeight: 700 }}>
                Tải ứng dụng
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Box
        component="svg"
        viewBox="-19 -20 1440 200"
        sx={{
          position: "absolute",
          zIndex: 2,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
        }}
      >
        <path
          fill="#f5f5f5"
          fillOpacity="1"
          d="M0,224L80,218.7C160,213,320,203,480,176C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </Box>
    </Box>
  )
}

export default HeroSection
