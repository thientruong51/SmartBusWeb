import { Fab, useMediaQuery, useTheme } from "@mui/material"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            bottom: isMobile ? 12 : 24,
            right: isMobile ? 12 : 24,
            zIndex: 1500,
            maxWidth: "100vw",          
            overflow: "hidden",        
            boxSizing: "border-box",
          }}
        >
          <Fab
            color="primary"
            size={isMobile ? "small" : "medium"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              width: isMobile ? 40 : 56,
              height: isMobile ? 40 : 56,
              minHeight: "auto",
              boxShadow: 4,
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopButton
