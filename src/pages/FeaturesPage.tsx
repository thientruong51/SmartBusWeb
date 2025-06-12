import {
    Box,
    Container,
    Typography,
    Card,
    Avatar,
    Stack,
} from "@mui/material"
import {
    MapPin,
    Clock,
    CreditCard,
    Bell,
    Map,
    Search,
    Smartphone,
    Users,
    Shield,
} from "lucide-react"
import ScrollToTopButton from "../components/ScrollToTopButton"
import FeaturesSection from "../components/FeaturesSection"

const features = [
    {
        icon: MapPin,
        title: "Tìm tuyến xe buýt",
        description:
            "Dễ dàng tìm kiếm và xem thông tin chi tiết về các tuyến xe buýt gần bạn. Hiển thị lộ trình, trạm dừng và thời gian hoạt động.",
    },
    {
        icon: Clock,
        title: "Thời gian thực",
        description:
            "Theo dõi vị trí xe buýt và thời gian đến trạm theo thời gian thực. Không còn phải đoán mò thời gian chờ xe.",
    },
    {
        icon: CreditCard,
        title: "Thanh toán dễ dàng",
        description:
            "Thanh toán vé xe buýt trực tiếp qua ứng dụng với nhiều phương thức: thẻ ngân hàng, ví điện tử, QR code.",
    },
    {
        icon: Bell,
        title: "Thông báo thông minh",
        description:
            "Nhận thông báo khi xe buýt sắp đến trạm, thay đổi lịch trình hoặc có khuyến mãi đặc biệt.",
    },
    {
        icon: Map,
        title: "Bản đồ tương tác",
        description:
            "Xem bản đồ tương tác với vị trí xe buýt, trạm dừng, lộ trình di chuyển và các điểm quan tâm xung quanh.",
    },
    {
        icon: Search,
        title: "Tìm đường thông minh",
        description:
            "Gợi ý lộ trình tối ưu với nhiều phương tiện kết hợp để đến đích nhanh nhất và tiết kiệm nhất.",
    },
    {
        icon: Smartphone,
        title: "Giao diện thân thiện",
        description:
            "Thiết kế giao diện đơn giản, dễ sử dụng cho mọi lứa tuổi. Hỗ trợ chế độ tối và sáng.",
    },
    {
        icon: Users,
        title: "Cộng đồng người dùng",
        description:
            "Kết nối với cộng đồng người dùng, chia sẻ kinh nghiệm và nhận hỗ trợ từ những người dùng khác.",
    },
    {
        icon: Shield,
        title: "Bảo mật thông tin",
        description:
            "Đảm bảo an toàn thông tin cá nhân và giao dịch với công nghệ mã hóa tiên tiến.",
    },
]

export default function FeaturesPage() {
    return (
        <Box sx={{ minHeight: "100vh" }}>

            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(to bottom, #d1fae5, #fff)",
                    textAlign: "center",
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h6" color="green">
                        Tính năng
                    </Typography>
                    <Typography variant="h3" fontWeight="bold">
                        Tính năng SmartBus
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" mt={2}>
                        Khám phá những tính năng thông minh giúp bạn di chuyển dễ dàng và tiện lợi hơn
                    </Typography>
                </Container>
            </Box>
<Box sx={{ bgcolor: "#f1f5f9" }}>
                <Container>

                    <FeaturesSection/>
                </Container>
            </Box>
            <Container sx={{ py: 8 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 4,
                        justifyContent: { xs: "center", md: "flex-start" },
                    }}
                >
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: "100%", sm: "47%", lg: "31%" },
                                flexShrink: 0,
                            }}
                        >
                            <Card variant="outlined" sx={{ height: "100%", p: 3 }}>
                                <Stack spacing={2} alignItems="center" textAlign="center">
                                    <Avatar
                                        sx={{ bgcolor: "lightgray", color: "#4BB842", width: 56, height: 56 }}
                                    >
                                        <feature.icon />
                                    </Avatar>
                                    <Typography variant="h6" fontWeight="bold">
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>

            

            <ScrollToTopButton />
        </Box>
    )
}
