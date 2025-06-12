import { useParams, useNavigate } from "react-router-dom"
import { Container, Typography, Box, Chip, Button, Divider } from "@mui/material"
import { ArrowBack, CalendarToday, Person } from "@mui/icons-material"

 const blogPosts = [
    {
      id: 1,
      title: "SmartBus đồng hành cùng Finsey - Doanh nghiệp hỗ trợ sinh viên vay vốn học phí",
      content: `
        <p>SmartBus chia sẻ thông tin về Finsey – Doanh nghiệp tài chính cung cấp dịch vụ vay vốn học phí dành cho sinh viên (Học trước – trả sau).</p>
        
        <p>SmartBus luôn cam kết đồng hành cùng cộng đồng, đặc biệt là các bạn sinh viên trong hành trình học tập và phát triển. Chính vì vậy, chúng tôi rất vui mừng được giới thiệu đến các bạn về Finsey - một doanh nghiệp tài chính uy tín chuyên cung cấp dịch vụ vay vốn học phí cho sinh viên.</p>

        <h2>Finsey là gì?</h2>
        <p>Finsey là một nền tảng tài chính công nghệ (Fintech) chuyên cung cấp các giải pháp vay vốn học phí linh hoạt cho sinh viên Việt Nam. Với phương châm "Học trước - Trả sau", Finsey giúp các bạn sinh viên có thể tiếp cận giáo dục chất lượng cao mà không phải lo lắng về vấn đề tài chính.</p>

        <h2>Lợi ích khi sử dụng dịch vụ của Finsey</h2>
        <ul>
          <li><strong>Thủ tục đơn giản:</strong> Quy trình đăng ký và phê duyệt nhanh chóng, hoàn toàn trực tuyến</li>
          <li><strong>Lãi suất ưu đãi:</strong> Mức lãi suất cạnh tranh, phù hợp với sinh viên</li>
          <li><strong>Linh hoạt trong thanh toán:</strong> Nhiều phương thức trả góp linh hoạt</li>
          <li><strong>Hỗ trợ tận tình:</strong> Đội ngũ tư vấn chuyên nghiệp, sẵn sàng hỗ trợ 24/7</li>
        </ul>

        <p>SmartBus tin rằng việc hợp tác với Finsey sẽ mang lại nhiều giá trị tích cực cho cộng đồng sinh viên, giúp các bạn có thể tập trung vào việc học tập mà không phải lo lắng về gánh nặng tài chính.</p>
      `,
      image: "/images/blog/1.png",
      date: "15/12/2024",
      author: "SmartBus Team",
      category: "Đối tác",
    },
    {
      id: 2,
      title: "SmartBus đồng hành cùng Finsey - Doanh nghiệp hỗ trợ sinh viên vay vốn học phí",
      content: `
        <p>SmartBus chia sẻ thông tin về Finsey – Doanh nghiệp tài chính cung cấp dịch vụ vay vốn học phí dành cho sinh viên (Học trước – trả sau).</p>
        
        <p>SmartBus luôn cam kết đồng hành cùng cộng đồng, đặc biệt là các bạn sinh viên trong hành trình học tập và phát triển. Chính vì vậy, chúng tôi rất vui mừng được giới thiệu đến các bạn về Finsey - một doanh nghiệp tài chính uy tín chuyên cung cấp dịch vụ vay vốn học phí cho sinh viên.</p>

        <h2>Finsey là gì?</h2>
        <p>Finsey là một nền tảng tài chính công nghệ (Fintech) chuyên cung cấp các giải pháp vay vốn học phí linh hoạt cho sinh viên Việt Nam. Với phương châm "Học trước - Trả sau", Finsey giúp các bạn sinh viên có thể tiếp cận giáo dục chất lượng cao mà không phải lo lắng về vấn đề tài chính.</p>

        <h2>Lợi ích khi sử dụng dịch vụ của Finsey</h2>
        <ul>
          <li><strong>Thủ tục đơn giản:</strong> Quy trình đăng ký và phê duyệt nhanh chóng, hoàn toàn trực tuyến</li>
          <li><strong>Lãi suất ưu đãi:</strong> Mức lãi suất cạnh tranh, phù hợp với sinh viên</li>
          <li><strong>Linh hoạt trong thanh toán:</strong> Nhiều phương thức trả góp linh hoạt</li>
          <li><strong>Hỗ trợ tận tình:</strong> Đội ngũ tư vấn chuyên nghiệp, sẵn sàng hỗ trợ 24/7</li>
        </ul>

        <p>SmartBus tin rằng việc hợp tác với Finsey sẽ mang lại nhiều giá trị tích cực cho cộng đồng sinh viên, giúp các bạn có thể tập trung vào việc học tập mà không phải lo lắng về gánh nặng tài chính.</p>
      `,
      image: "/images/blog/1.png",
      date: "15/12/2024",
      author: "SmartBus Team",
      category: "Đối tác",
    },
    {
      id: 3,
      title: "SmartBus đồng hành cùng Finsey - Doanh nghiệp hỗ trợ sinh viên vay vốn học phí",
      content: `
        <p>SmartBus chia sẻ thông tin về Finsey – Doanh nghiệp tài chính cung cấp dịch vụ vay vốn học phí dành cho sinh viên (Học trước – trả sau).</p>
        
        <p>SmartBus luôn cam kết đồng hành cùng cộng đồng, đặc biệt là các bạn sinh viên trong hành trình học tập và phát triển. Chính vì vậy, chúng tôi rất vui mừng được giới thiệu đến các bạn về Finsey - một doanh nghiệp tài chính uy tín chuyên cung cấp dịch vụ vay vốn học phí cho sinh viên.</p>

        <h2>Finsey là gì?</h2>
        <p>Finsey là một nền tảng tài chính công nghệ (Fintech) chuyên cung cấp các giải pháp vay vốn học phí linh hoạt cho sinh viên Việt Nam. Với phương châm "Học trước - Trả sau", Finsey giúp các bạn sinh viên có thể tiếp cận giáo dục chất lượng cao mà không phải lo lắng về vấn đề tài chính.</p>

        <h2>Lợi ích khi sử dụng dịch vụ của Finsey</h2>
        <ul>
          <li><strong>Thủ tục đơn giản:</strong> Quy trình đăng ký và phê duyệt nhanh chóng, hoàn toàn trực tuyến</li>
          <li><strong>Lãi suất ưu đãi:</strong> Mức lãi suất cạnh tranh, phù hợp với sinh viên</li>
          <li><strong>Linh hoạt trong thanh toán:</strong> Nhiều phương thức trả góp linh hoạt</li>
          <li><strong>Hỗ trợ tận tình:</strong> Đội ngũ tư vấn chuyên nghiệp, sẵn sàng hỗ trợ 24/7</li>
        </ul>

        <p>SmartBus tin rằng việc hợp tác với Finsey sẽ mang lại nhiều giá trị tích cực cho cộng đồng sinh viên, giúp các bạn có thể tập trung vào việc học tập mà không phải lo lắng về gánh nặng tài chính.</p>
      `,
      image: "/images/blog/1.png",
      date: "15/12/2024",
      author: "SmartBus Team",
      category: "Đối tác",
    },
    {
      id: 4,
      title: "SmartBus đồng hành cùng Finsey - Doanh nghiệp hỗ trợ sinh viên vay vốn học phí",
      content: `
        <p>SmartBus chia sẻ thông tin về Finsey – Doanh nghiệp tài chính cung cấp dịch vụ vay vốn học phí dành cho sinh viên (Học trước – trả sau).</p>
        
        <p>SmartBus luôn cam kết đồng hành cùng cộng đồng, đặc biệt là các bạn sinh viên trong hành trình học tập và phát triển. Chính vì vậy, chúng tôi rất vui mừng được giới thiệu đến các bạn về Finsey - một doanh nghiệp tài chính uy tín chuyên cung cấp dịch vụ vay vốn học phí cho sinh viên.</p>

        <h2>Finsey là gì?</h2>
        <p>Finsey là một nền tảng tài chính công nghệ (Fintech) chuyên cung cấp các giải pháp vay vốn học phí linh hoạt cho sinh viên Việt Nam. Với phương châm "Học trước - Trả sau", Finsey giúp các bạn sinh viên có thể tiếp cận giáo dục chất lượng cao mà không phải lo lắng về vấn đề tài chính.</p>

        <h2>Lợi ích khi sử dụng dịch vụ của Finsey</h2>
        <ul>
          <li><strong>Thủ tục đơn giản:</strong> Quy trình đăng ký và phê duyệt nhanh chóng, hoàn toàn trực tuyến</li>
          <li><strong>Lãi suất ưu đãi:</strong> Mức lãi suất cạnh tranh, phù hợp với sinh viên</li>
          <li><strong>Linh hoạt trong thanh toán:</strong> Nhiều phương thức trả góp linh hoạt</li>
          <li><strong>Hỗ trợ tận tình:</strong> Đội ngũ tư vấn chuyên nghiệp, sẵn sàng hỗ trợ 24/7</li>
        </ul>

        <p>SmartBus tin rằng việc hợp tác với Finsey sẽ mang lại nhiều giá trị tích cực cho cộng đồng sinh viên, giúp các bạn có thể tập trung vào việc học tập mà không phải lo lắng về gánh nặng tài chính.</p>
      `,
      image: "/images/blog/1.png",
      date: "15/12/2024",
      author: "SmartBus Team",
      category: "Đối tác",
    },
    {
      id: 5,
      title: "SmartBus đồng hành cùng Finsey - Doanh nghiệp hỗ trợ sinh viên vay vốn học phí",
      content: `
        <p>SmartBus chia sẻ thông tin về Finsey – Doanh nghiệp tài chính cung cấp dịch vụ vay vốn học phí dành cho sinh viên (Học trước – trả sau).</p>
        
        <p>SmartBus luôn cam kết đồng hành cùng cộng đồng, đặc biệt là các bạn sinh viên trong hành trình học tập và phát triển. Chính vì vậy, chúng tôi rất vui mừng được giới thiệu đến các bạn về Finsey - một doanh nghiệp tài chính uy tín chuyên cung cấp dịch vụ vay vốn học phí cho sinh viên.</p>

        <h2>Finsey là gì?</h2>
        <p>Finsey là một nền tảng tài chính công nghệ (Fintech) chuyên cung cấp các giải pháp vay vốn học phí linh hoạt cho sinh viên Việt Nam. Với phương châm "Học trước - Trả sau", Finsey giúp các bạn sinh viên có thể tiếp cận giáo dục chất lượng cao mà không phải lo lắng về vấn đề tài chính.</p>

        <h2>Lợi ích khi sử dụng dịch vụ của Finsey</h2>
        <ul>
          <li><strong>Thủ tục đơn giản:</strong> Quy trình đăng ký và phê duyệt nhanh chóng, hoàn toàn trực tuyến</li>
          <li><strong>Lãi suất ưu đãi:</strong> Mức lãi suất cạnh tranh, phù hợp với sinh viên</li>
          <li><strong>Linh hoạt trong thanh toán:</strong> Nhiều phương thức trả góp linh hoạt</li>
          <li><strong>Hỗ trợ tận tình:</strong> Đội ngũ tư vấn chuyên nghiệp, sẵn sàng hỗ trợ 24/7</li>
        </ul>

        <p>SmartBus tin rằng việc hợp tác với Finsey sẽ mang lại nhiều giá trị tích cực cho cộng đồng sinh viên, giúp các bạn có thể tập trung vào việc học tập mà không phải lo lắng về gánh nặng tài chính.</p>
      `,
      image: "/images/blog/1.png",
      date: "15/12/2024",
      author: "SmartBus Team",
      category: "Đối tác",
    },
  ]

export default function BlogPostPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.id === parseInt(id || "0"))

  if (!post) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center">Bài viết không tồn tại</Typography>
        <Box textAlign="center" mt={2}>
          <Button variant="contained" onClick={() => navigate("/blog")}>Quay lại Blog</Button>
        </Box>
      </Container>
    )
  }

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Container sx={{ py: 6, maxWidth: "800px" }}>
        <Button
          variant="text"
          startIcon={<ArrowBack />}
          onClick={() => navigate("/blog")}
          sx={{ mb: 2, color: "green" }}
        >
          Quay lại Blog
        </Button>

        <Chip label={post.category} color="success" />
        <Typography variant="h4" fontWeight="bold" mt={2}>{post.title}</Typography>
        <Box display="flex" gap={3} mt={1} color="text.secondary">
          <Box display="flex" alignItems="center" gap={1}><CalendarToday fontSize="small" />{post.date}</Box>
          <Box display="flex" alignItems="center" gap={1}><Person fontSize="small" />{post.author}</Box>
        </Box>

        <Box
          mt={4}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            maxHeight: 400,
          }}
        >
          <img src={post.image} alt={post.title} style={{ width: "100%", objectFit: "cover" }} />
        </Box>

        <Box mt={4} sx={{ typography: "body1" }} dangerouslySetInnerHTML={{ __html: post.content }} />

        <Divider sx={{ mt: 6, mb: 3 }} />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="text.secondary">Chia sẻ bài viết:</Typography>
            <Box display="flex" gap={1} mt={1}>
              <Button variant="outlined" size="small">Facebook</Button>
              <Button variant="outlined" size="small">Twitter</Button>
              <Button variant="outlined" size="small">LinkedIn</Button>
            </Box>
          </Box>
          <Button variant="contained" color="success" onClick={() => navigate("/blog")}>
            Xem thêm bài viết
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
