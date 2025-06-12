import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
} from "@mui/material"
import { ChevronLeft, ChevronRight, CalendarToday, Person } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const blogPosts = [
  {
    id: 1,
    title: "SmartBus đồng hành cùng Finsey - Doanh nghiệp hỗ trợ sinh viên vay vốn học phí",
    excerpt:
      "SmartBus chia sẻ thông tin về Finsey – Doanh nghiệp tài chính cung cấp dịch vụ vay vốn học phí dành cho sinh viên (Học trước – trả sau). SmartBus...",
    image: "/images/blog/1.png",
    date: "15/12/2024",
    author: "SmartBus Team",
    category: "Đối tác",
  },
  {
    id: 2,
    title: "Thông báo ngừng hiển thị các tuyến buýt Becamex Tokyo trên ứng dụng SmartBus",
    excerpt:
      "Từ ngày 1/10/2024, các tuyến xe buýt Becamex Tokyo sẽ không còn hiển thị trên ứng dụng SmartBus. Vì một số lý do khách quan, SmartBus rất...",
    image: "/images/blog/2.png",
    date: "01/10/2024",
    author: "SmartBus Team",
    category: "Thông báo",
  },
  {
    id: 3,
    title: "Khám phá Saigon Sniper cùng SmartBus: Hướng dẫn đăng ký chi tiết",
    excerpt:
      "Bạn súng thể thao không chỉ là một hoạt động giải trí mà còn giúp người chơi: Giảm căng thẳng: Giúp thư giãn sau một ngày làm việc. Tăng sức bền và...",
    image: "/images/blog/3.png",
    date: "25/09/2024",
    author: "SmartBus Team",
    category: "Giải trí",
  },
  {
    id: 4,
    title: "Cập nhật tính năng mới: Thanh toán QR Code trên SmartBus",
    excerpt:
      "SmartBus vừa ra mắt tính năng thanh toán QR Code mới, giúp người dùng thanh toán vé xe buýt nhanh chóng và tiện lợi hơn bao giờ hết...",
    image: "/images/blog/4.png",
    date: "10/12/2024",
    author: "SmartBus Team",
    category: "Tính năng",
  },
  {
    id: 5,
    title: "Hướng dẫn sử dụng tính năng theo dõi xe buýt thời gian thực",
    excerpt:
      "Với tính năng theo dõi thời gian thực, bạn có thể biết chính xác xe buýt đang ở đâu và sẽ đến trạm của bạn lúc nào...",
    image: "/images/blog/5.png",
    date: "05/12/2024",
    author: "SmartBus Team",
    category: "Hướng dẫn",
  },
  {
    id: 6,
    title: "SmartBus mở rộng dịch vụ đến 5 thành phố lớn",
    excerpt:
      "Chúng tôi vui mừng thông báo SmartBus đã chính thức mở rộng dịch vụ đến 5 thành phố lớn: Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng và Cần Thơ...",
    image: "/images/blog/6.jpg",
    date: "28/11/2024",
    author: "SmartBus Team",
    category: "Thông báo",
  },
  {
    id: 7,
    title: "Bí quyết tiết kiệm chi phí di chuyển với SmartBus",
    excerpt:
      "Khám phá những mẹo hay giúp bạn tiết kiệm chi phí di chuyển hàng ngày khi sử dụng dịch vụ xe buýt thông qua ứng dụng SmartBus...",
    image: "/images/blog/5.png",
    date: "20/11/2024",
    author: "SmartBus Team",
    category: "Mẹo hay",
  },
  {
    id: 8,
    title: "Câu chuyện thành công: Người dùng SmartBus chia sẻ trải nghiệm",
    excerpt:
      "Lắng nghe những câu chuyện thú vị từ cộng đồng người dùng SmartBus về cách ứng dụng đã thay đổi thói quen di chuyển của họ...",
    image: "/images/blog/3.png",
    date: "15/11/2024",
    author: "SmartBus Team",
    category: "Câu chuyện",
  },
  {
    id: 9,
    title: "Tương lai của giao thông công cộng thông minh tại Việt Nam",
    excerpt:
      "Tìm hiểu về xu hướng phát triển của giao thông công cộng thông minh và vai trò của SmartBus trong việc xây dựng hệ thống giao thông bền vững...",
    image: "/images/blog/2.png",
    date: "08/11/2024",
    author: "SmartBus Team",
    category: "Xu hướng",
  },
]
const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, endIndex)
  const navigate = useNavigate()

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <Box sx={{ py: 8,background: "linear-gradient(to bottom, #d1fae5, #fff)", color: "#000", textAlign: "center" }}>
        <Container>
          <Typography variant="h3" fontWeight="bold">SmartBus Blog</Typography>
          <Typography variant="subtitle1" mt={2}>
            Khám phá câu chuyện và những tin tức mới nhất từ SmartBus
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {currentPosts.map((post) => (
            <Box
              key={post.id}
              sx={{
                width: { xs: "100%", sm: "47%", lg: "31%" },
                flexShrink: 0,
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Chip label={post.category} color="success" size="small" />
                  <Typography variant="h6" mt={1} onClick={() => navigate(`/blog/${post.id}`)}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>{post.excerpt}</Typography>
                  <Box mt={2} display="flex" gap={2} color="text.secondary">
                    <Box display="flex" alignItems="center" gap={1}>
                      <CalendarToday fontSize="small" /> {post.date}
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Person fontSize="small" /> {post.author}
                    </Box>
                  </Box>
                  <Button size="small" onClick={() => navigate(`/blog/${post.id}`)} sx={{ mt: 1 }}>
                    Xem thêm →
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" mt={6} gap={2}>
          <IconButton onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
            <ChevronLeft />
          </IconButton>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "contained" : "outlined"}
              onClick={() => setCurrentPage(page)}
              color="success"
            >
              {page}
            </Button>
          ))}
          <IconButton onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
