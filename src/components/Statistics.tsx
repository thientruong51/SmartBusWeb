import { Box, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonIcon from '@mui/icons-material/Person';

const stats = [
  {
    icon: <StarIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
    value: " ",
    label: "🌟🌟🌟🌟🌟",
    desc: "Điểm đánh giá ứng dụng",
  },
  {
    icon: <ThumbUpIcon sx={{ fontSize: 40, color: '#F57C00' }} />,
    value: " ",
    label: "Lượt đánh giá",
    desc: "Google Play",
  },
  {
    icon: <DownloadIcon sx={{ fontSize: 40, color: '#7E57C2' }} />,
    value: " ",
    label: "Lượt tải xuống",
    desc: "Trên tất cả nền tảng",
  },
  {
    icon: <PersonIcon sx={{ fontSize: 40, color: '#29B6F6' }} />,
    value: " ",
    label: "Người dùng hoạt động mỗi tháng",
    desc: "Trên tất cả nền tảng",
  },
];

const Statistics = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: '#4BB842',
          borderRadius: 6,
          px: { xs: 3, sm: 4, md: 6 },
          py: { xs: 4, sm: 6, md: 8 },
          maxWidth: 1400,
          width: '100%',
          gap: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            fontWeight={500}
            color="white"
            textAlign={{ xs: 'center', md: 'left' }}
          >
            Hàng trăm ngàn người sử dụng SmartBus để tối ưu hoá hành trình di chuyển bằng phương tiện công cộng 🚌
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            bgcolor: 'white',
            borderRadius: 4,
            px: { xs: 3, md: 4 },
            py: { xs: 3, md: 4 },
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, sm: 4 },
          }}
        >
          {stats.map((stat, i) => (
            <Box
              key={i}
              textAlign="center"
              sx={{
                width: { xs: '100%', sm: '45%', md: '45%' },
                minWidth: 150,
              }}
            >
              <Box mb={1}>{stat.icon}</Box>
              <Typography
                variant="h6"
                fontWeight={700}
                color="#00C853"
                sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {stat.label}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }}
              >
                {stat.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Statistics;
