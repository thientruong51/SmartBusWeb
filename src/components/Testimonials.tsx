import { Box, Container, Paper, Typography, Avatar, Stack, Chip } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ngọc Mai",
    text: "Ứng dụng rất tiện lợi, giúp mình tiết kiệm nhiều thời gian khi di chuyển!",
    avatar: "/images/users/user1.jpg",
    email: "ngocmai@gmail.com",
    active: true,
  },
  {
    name: "Tuấn Anh",
    text: "Tìm xe buýt dễ dàng hơn bao giờ hết. Mình dùng mỗi ngày.",
    avatar: "/images/users/user2.jpg",
    email: "tuananh@gmail.com",
    active: false,
  },
  {
    name: "Lan Phương",
    text: "SmartBus là bạn đồng hành tuyệt vời khi đi lại trong thành phố.",
    avatar: "/images/users/user3.jpg",
    email: "lanphuong@gmail.com",
    active: true,
  },
];

const Testimonials = () => {
  return (
   <Box
  sx={{
    py: 10,
    color: 'white',
    backgroundImage: `linear-gradient(135deg,rgb(25, 210, 71) 0%,rgb(37, 221, 77) 100%), url('/images/decorations/testimonial-bg.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
  }}
>

      <Container>
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          gutterBottom
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{color:"black"}}
        >
          Người dùng nói gì?
        </Typography>
        <Typography
          align="center"
          sx={{ opacity: 0.9, mb: 6, color:"black" }}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Cảm nhận thực tế từ những người đang sử dụng SmartBus mỗi ngày.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            flexWrap: 'wrap',
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Paper
                sx={{
                  p: 3,
                  maxWidth: 300,
                  borderRadius: 3,
                  backgroundColor: 'white',
                  color: 'black',
                }}
                elevation={3}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar src={item.avatar} alt={item.name} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>{item.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.email}
                    </Typography>
                  </Box>
                  <FiberManualRecordIcon
                    fontSize="small"
                    sx={{ color: item.active ? 'green' : 'red', ml: 'auto' }}
                  />
                </Box>

                <Stack direction="row" spacing={0.5} mb={1}>
                  {[...Array(4)].map((_, i) => (
                    <StarIcon key={i} fontSize="small" sx={{ color: '#FFD700' }} />
                  ))}
                  <StarIcon fontSize="small" sx={{ color: '#FFD700' }} />
                </Stack>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {item.text}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                  <Chip label="+2 More" size="small" color="default" />
                  <Typography variant="caption" fontWeight={500}>
                    Total Tickets: <Box component="span" sx={{ color: 'error.main' }}>20</Box>{" "}
                    <Box component="span" sx={{ color: 'success.main' }}>10</Box>
                  </Typography>
                </Stack>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;