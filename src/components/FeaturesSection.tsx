import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    title: "Tìm đường thông minh",
    desc: "SmartBus giúp bạn lựa chọn cách di chuyển hợp lý nhất giữa 2 địa điểm bất kỳ thông qua tính năng hiển thị trạm lên/xuống, ước tính quãng đường và thời gian cần cho việc đi bộ và đi xe, kết hợp với các phương tiện khác như xe ôm công nghệ.",
    img: "/images/features/route.png",
  },
  {
    title: "Tra cứu tuyến xe",
    desc: "Xem chi tiết lịch trình, các điểm dừng, khoảng cách và thời gian dự kiến của hàng ngàn tuyến xe buýt.",
    img: "/images/features/search.png",
  },
  {
    title: "Vị trí xe theo thời gian thực",
    desc: "Theo dõi chính xác vị trí xe buýt đang chạy, khoảng cách và thời gian chờ dựa trên dữ liệu GPS.",
    img: "/images/features/gps.png",
  },
   {
    title: "Mua vé và sử dụng tiện lợi",
    desc: "Vé xe được mua trực tiếp trên ứng dụng bằng nhiều hình thức thanh toán và sử dụng mã QR của vé để lên xe.",
    img: "/images/features/ticket.png",
  },
];

const FeaturesSection = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => setIndex((prev) => (prev + 1) % features.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + features.length) % features.length);
  const current = features[index];

  return (
    <Box sx={{ py: 10, bgcolor: '#transparent' }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          color="primary"
          gutterBottom
        >
          Tính năng nổi bật
        </Typography>

        <Box
          sx={{
            mt: 6,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <Box
            component={motion.img}
            key={current.img}
            src={current.img}
            alt={current.title}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
            whileHover={{ scale: 1.03 }}
            sx={{
              width: { xs: '100%', md: '50%' },
              maxWidth: 500,
              borderRadius: 4,
              boxShadow: 4,
              border: '5px solid #00796b',
              outline: '2px solid white',
              outlineOffset: '-6px',
              cursor: 'pointer'
            }}
          />

          <motion.div
            key={current.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: 700, minHeight: 500 }}
          >
            <Box
              sx={{
                bgcolor: '#ffffff',
                borderRadius: 4,
                p: 4,
                boxShadow: 3,
              }}
            >
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                {features.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setIndex(i)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: i === index ? '#ff9800' : '#ccc',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </Box>

              <Typography variant="h3" fontWeight={700} gutterBottom>
                {current.title}
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
                {current.desc}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="outlined" onClick={handlePrev}>
                  Trước đó
                </Button>
                <Button variant="contained" onClick={handleNext}>
                  Tiếp theo
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
