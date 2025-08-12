import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ pt: 6, bgcolor: "#222", color: "white" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
            pb: 4,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Box
              component="img"
              src="/images/logobogoc.png"
              alt="SmartBus Logo"
              sx={{ height: 100, width: "auto", mb: 1 }}
            />
            <Typography variant="body2">
              Giải pháp di chuyển thông minh cho người dân thành phố.
            </Typography>
          </Box>

          <Box sx={{ flex: 1, minWidth: 150 }}>
            <Typography fontWeight={600} gutterBottom>Liên kết</Typography>
            {[
              { label: "Tính năng", path: "/features", external: false },
              { label: "Cách sử dụng", path: "/features", external: false },
              {
                label: "Tải ứng dụng",
                path: "https://expo.dev/artifacts/eas/ho8ZLQhzr6EwG9nBs9J61p.apk",
                external: true
              },
            ].map((item, i) => (
              <Typography key={i} variant="body2">
                {item.external ? (
                  <MuiLink
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="hover"
                  >
                    {item.label}
                  </MuiLink>
                ) : (
                  <MuiLink
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                    underline="hover"
                  >
                    {item.label}
                  </MuiLink>
                )}
              </Typography>
            ))}
          </Box>


          <Box sx={{ flex: 1, minWidth: 150 }}>
            <Typography fontWeight={600} gutterBottom>Hỗ trợ</Typography>
            {[
              { label: "Trung tâm hỗ trợ", path: "/contact" },
              { label: "Câu hỏi thường gặp", path: "/faq" },
              { label: "Liên hệ", path: "/contact" },
            ].map((item, i) => (
              <Typography key={i} variant="body2">
                <MuiLink
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  underline="hover"
                >
                  {item.label}
                </MuiLink>
              </Typography>
            ))}
          </Box>

          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Typography fontWeight={600} gutterBottom>Liên hệ</Typography>
            <Typography variant="body2">Email: contact.smartbus@gmail.com</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Điện thoại: 0942 414 188
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Box
                component="a"
                href="https://www.facebook.com/profile.php?id=61576087121259"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "inherit" }}
              >
                <FacebookIcon fontSize="small" />
              </Box>

              <Box
                component="a"
                href="https://www.instagram.com/smartbus__?igsh=MTFvOW5ubHBzNDZ6Mw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "inherit" }}
              >
                <InstagramIcon fontSize="small" />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ pt: 3, textAlign: "center" }}>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
            © 2024 SmartBus. Tất cả các quyền được bảo lưu.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
