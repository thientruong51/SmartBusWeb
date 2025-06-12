import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ScrollToTopButton from "../components/ScrollToTopButton"

const faqItems = {
  general: [
    {
      question: "SmartBus là gì?",
      answer:
        "SmartBus là ứng dụng đặt xe buýt thông minh giúp bạn tìm tuyến phù hợp, theo dõi xe thời gian thực và thanh toán vé qua ứng dụng.",
    },
    {
      question: "SmartBus đã triển khai tại khu vực nào?",
      answer:
        "Hiện hoạt động tại Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng và Cần Thơ. Ứng dụng sẽ mở rộng trong tương lai.",
    },
    {
      question: "SmartBus có phải là ứng dụng thuộc quản lý của nhà nước không?",
      answer:
        "Không. Đây là ứng dụng tư nhân phát triển, hợp tác với đơn vị vận tải và cơ quan quản lý để đảm bảo chất lượng.",
    },
    {
      question: "Dữ liệu các tuyến xe trên SmartBus có chính xác không?",
      answer:
        "Dữ liệu được đồng bộ từ các đơn vị vận tải và hệ thống GPS. Có thể báo lỗi nếu bạn phát hiện sai.",
    },
    {
      question: "Quyền lợi của gói Premium trên SmartBus là gì?",
      answer:
        "Nhận cảnh báo ưu tiên, lịch sử không giới hạn, gợi ý AI, hỗ trợ 24/7 và không quảng cáo.",
    },
    {
      question: "Tôi sẽ được quyền lợi gì khi đăng ký tài khoản SmartBus?",
      answer:
        "Lưu tuyến yêu thích, thông báo cá nhân hóa, đồng bộ nhiều thiết bị, tích điểm nhận ưu đãi.",
    },
    {
      question: "Có thể di chuyển bằng nhiều phương tiện khi sử dụng SmartBus không?",
      answer:
        "Có. SmartBus gợi ý lộ trình kết hợp xe buýt với đi bộ, taxi hoặc xe máy để tối ưu chuyến đi.",
    },
  ],
  feature: [
    {
      question: "Làm sao để xem thời gian thực của xe buýt?",
      answer:
        "Chọn tuyến xe → chọn trạm → xem thời gian đến theo thời gian thực. Có thể bật thông báo xe sắp đến.",
    },
    {
      question: "Tôi muốn phản ánh về dịch vụ xe buýt?",
      answer:
        "Bạn có thể báo cáo trong app, email contact.smartbus@gmail.com, hotline 19001234 hoặc trang liên hệ.",
    },
    {
      question: "Tôi phải xử lý thế nào khi dữ liệu xe buýt bị lỗi?",
      answer:
        "Làm mới app, kiểm tra mạng, cập nhật phiên bản mới, báo lỗi trong app để được xử lý nhanh chóng.",
    },
    {
      question: "Tại sao tôi không thấy xe trên ứng dụng?",
      answer:
        "Có thể do xe ngừng hoạt động, GPS lỗi, thay đổi lịch trình. Bạn có thể báo lỗi để kiểm tra.",
    },
    {
      question: "Tôi muốn đề xuất tính năng mới?",
      answer:
        "Bạn có thể gửi đề xuất qua form trong app, email hoặc trang liên hệ với tiêu đề rõ ràng.",
    },
    {
      question:
        "Tôi có thể tin tưởng khi đặt vé xe buýt liên tỉnh trên SmartBus hay không?",
      answer:
        "Có. Chúng tôi hợp tác với nhà xe uy tín, mã hóa giao dịch và bảo vệ thông tin cá nhân của bạn.",
    },
  ],
}

const FAQPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>

      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: "linear-gradient(to bottom, #d1fae5, #fff)",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h6"
            sx={{ color: "green", fontWeight: 500, mb: 1 }}
          >
            Hỗ trợ
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            Câu hỏi thường gặp
          </Typography>
          <Typography variant="subtitle1" mt={2} color="text.secondary">
            Những thắc mắc phổ biến về dịch vụ SmartBus
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Card variant="outlined" sx={{ mb: 6 }}>
          <CardHeader
            title={
              <Typography variant="h5" color="green">
                Tổng quan
              </Typography>
            }
          />
          <Divider />
          <CardContent>
            {faqItems.general.map((item, index) => (
              <Accordion key={index} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight="600">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardHeader
            title={
              <Typography variant="h5" color="green">
                Tính năng
              </Typography>
            }
          />
          <Divider />
          <CardContent>
            {faqItems.feature.map((item, index) => (
              <Accordion key={index} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight="600">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </Card>
      </Container>

      <ScrollToTopButton />
    </Box>
  )
}

export default FAQPage
