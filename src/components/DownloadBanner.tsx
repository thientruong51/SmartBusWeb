import { Box, Container, Typography } from "@mui/material";

const DownloadBanner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        mb: 6,
      }}
    >
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundImage: 'url(/images/banner_footer.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#116C25',
          borderRadius: 6,
          overflow: 'hidden',
          position: 'relative',
          textAlign: 'center',
          maxWidth: 1500,
          width: '100%',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="body1"
            sx={{ fontSize: '1rem', mb: 1 }}
          >
            ● SmartBus – di chuyển an toàn, vô vàn tiện ích
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 3,
            }}
          >
            Tải SmartBus ngay hôm nay <br />
            hoàn toàn miễn phí!
          </Typography>

          <Typography variant="body1" sx={{ mb: 1,  }} fontWeight={600}>
            Tải SmartBus tại
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
              mt: 1,
            }}
          >
            <Box
              component="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                border: '2px solid white',
                borderRadius: 5,
                color: 'white',
                textDecoration: 'none',
                minWidth: 140,
                height: 40,
              }}
            >
              <img src="/images/appstore.png" alt="Apple" width={20} />
              <Typography variant="body2" sx={{textShadow: "2px 2px 4px rgba(0,0,0,0.3)"}}>App Store</Typography>
            </Box>

            <Box
              component="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                border: '2px solid white',
                borderRadius: 5,
                color: 'white',
                textDecoration: 'none',
                minWidth: 140,
                height: 40,
              }}
            >
              <img src="/images/googleplay.png" alt="Google Play" width={20} />
              <Typography variant="body2">Google Play</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DownloadBanner;
