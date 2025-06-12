import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
];

const tags = [
  "#energetic 🚌", "#dailyLife 🌐", "#citylover 💚", "#busholic 🚌", "#ecofriendly 🌍", "#joyful 💚"
];

const Gallery = () => {
  const [x, setX] = useState(0);
  const [tagX, setTagX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => (prev - 1) % (images.length * 240));
      setTagX((prev) => (prev - 0.5) % (tags.length * 140));
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ py: 10, bgcolor: '#transparent' }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight={800}
          align="center"
          gutterBottom
          sx={{ color: 'primary.main', mb: 4 }}
        >
          ✨ #BusLife with SmartBus 🚌
        </Typography>

        <Box
          sx={{
            overflow: 'hidden',
            borderRadius: 4,
            boxShadow: 3,
            bgcolor: '#ffffff',
            px: 3,
            py: 5,
            border: '3px dashed #64b5f6',
            position: 'relative',
          }}
        >
          <Box
            component={motion.div}
            animate={{ x }}
            transition={{ ease: 'linear', duration: 0.01 }}
            sx={{
              display: 'flex',
              gap: 2,
              width: 'max-content',
            }}
          >
            {[...images, ...images, ...images].map((src, i) => (
              <Box
                key={i}
                component={motion.img}
                whileHover={{ scale: 1.05, rotate: 1 }}
                src={src}
                alt={`gallery-${i}`}
                sx={{
                  width: 420,
                  height: 360,
                  borderRadius: 6,
                  objectFit: 'cover',
                  boxShadow: 4,
                  transition: 'transform 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            mt: 3,
            overflow: 'hidden',
            height: 30,
            position: 'relative',
          }}
        >
          <Box
            component={motion.div}
            animate={{ x: tagX }}
            transition={{ ease: 'linear', duration: 0.01 }}
            sx={{
              display: 'flex',
              gap: 3,
              width: 'max-content',
              px: 2,
              fontSize: 14,
              color: 'text.secondary',
              whiteSpace: 'nowrap',
            }}
          >
            {[...tags, ...tags, ...tags].map((tag, idx) => (
              <Box key={idx} component="span" sx={{ px: 1.5, py: 0.5, bgcolor: '#fffde7', borderRadius: 2 }}>
                {tag}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;