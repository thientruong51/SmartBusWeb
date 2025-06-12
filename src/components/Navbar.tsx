import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  ListItemButton,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"

const pages = [
    { label: "Tính năng", path: "/features" },
  { label: "FAQ", path: "/faq" },
  { label: "Liên Hệ", path: "/contact" },

  { label: "Blog", path: "/blog" },

]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "primary.main", py: 1 }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                gap: 1.2,
              }}
            >
              <Box
                component="img"
                src="/images/logobg.jpg"
                alt="SmartBus Logo"
                sx={{ height: 65, borderRadius: 5 }}
              />
              <Typography variant="h6" fontWeight={700}>
                SmartBus
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 3, color:"white" }}>
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    color="inherit"
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      fontWeight: 600,
                      "&:hover": { color: "#116C28" },
                    }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
            )}

            {isMobile && (
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {pages.map((page) => (
              <ListItem key={page.label} disablePadding>
                <ListItemButton component={RouterLink} to={page.path}>
                  <ListItemText primary={page.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
