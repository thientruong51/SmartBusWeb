import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Card,
    CardContent,
    Avatar,
    Stack,
} from "@mui/material"
import type { ChangeEvent } from "react"
import type { SelectChangeEvent } from "@mui/material/Select"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

import ScrollToTopButton from "../components/ScrollToTopButton"

interface FormData {
    name: string
    email: string
    subject: string
    region: string
    platform: string
    message: string
}

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        region: "",
        platform: "",
        message: "",
    })

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Submitted:", formData)
    }

    return (
        <Box sx={{ minHeight: "100vh" }}>

            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(to bottom, #d1fae5, #fff)",
                    color: "black",
                }}
            >
                <Container>
                    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4} alignItems="center">
                        <Box flex={1}>
                            <Typography variant="h3" fontWeight="bold" gutterBottom>
                                Liên hệ với chúng tôi
                            </Typography>
                            <Typography variant="subtitle1" maxWidth={600}>
                                Bất cứ những góp ý phản hồi về SmartBus hay những điều gì bạn muốn, hãy chia sẻ tại đây!
                            </Typography>
                        </Box>
                        <Box flex={1}>
                            <Box
                                component="img"
                                src="/images/contact/contact.png"
                                alt="Liên hệ"
                                sx={{ width: "100%", maxWidth: 250, objectFit: "contain" }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Container sx={{ py: 8 }}>
                <Box display="flex" flexDirection={{ xs: "column", lg: "row" }} gap={4}>
                    <Card sx={{ flex: 1 }}>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <Stack direction="row" spacing={2}>
                                        <TextField
                                            label="Tên của bạn"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            fullWidth
                                            required
                                        />
                                        <TextField
                                            label="Email của bạn"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            fullWidth
                                            required
                                        />
                                    </Stack>

                                    <FormControl fullWidth required>
                                        <InputLabel>Chức năng muốn phản hồi</InputLabel>
                                        <Select
                                            name="subject"
                                            value={formData.subject}
                                            label="Chức năng muốn phản hồi"
                                            onChange={handleSelectChange}
                                        >
                                            <MenuItem value="bug-report">Báo lỗi</MenuItem>
                                            <MenuItem value="feature-request">Đề xuất tính năng</MenuItem>
                                            <MenuItem value="general-feedback">Phản hồi chung</MenuItem>
                                            <MenuItem value="partnership">Hợp tác</MenuItem>
                                            <MenuItem value="other">Khác</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <Stack direction="row" spacing={2}>
                                        <FormControl fullWidth required>
                                            <InputLabel>Khu vực</InputLabel>
                                            <Select
                                                name="region"
                                                value={formData.region}
                                                label="Khu vực"
                                                onChange={handleSelectChange}
                                            >
                                                <MenuItem value="hanoi">Hà Nội</MenuItem>
                                                <MenuItem value="hcmc">TP. Hồ Chí Minh</MenuItem>
                                                <MenuItem value="danang">Đà Nẵng</MenuItem>
                                                <MenuItem value="haiphong">Hải Phòng</MenuItem>
                                                <MenuItem value="cantho">Cần Thơ</MenuItem>
                                                <MenuItem value="other">Khác</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl fullWidth required>
                                            <InputLabel>Hệ điều hành</InputLabel>
                                            <Select
                                                name="platform"
                                                value={formData.platform}
                                                label="Hệ điều hành"
                                                onChange={handleSelectChange}
                                            >
                                                <MenuItem value="ios">iOS</MenuItem>
                                                <MenuItem value="android">Android</MenuItem>
                                                <MenuItem value="web">Web</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>

                                    <TextField
                                        label="Nội dung tin nhắn"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        multiline
                                        rows={5}
                                        fullWidth
                                        required
                                    />

                                    <Typography variant="body2" color="text.secondary">
                                        Bạn có thể <span style={{ textDecoration: "underline", cursor: "pointer" }}>đính kèm hình ảnh</span> sau khi gửi.
                                    </Typography>

                                    <Button type="submit" variant="contained" color="success" size="large">
                                        Gửi tin nhắn
                                    </Button>
                                </Stack>
                            </form>
                        </CardContent>
                    </Card>

                    <Box flex={1} display="flex" flexDirection="column" gap={3}>
                        <Typography variant="h5" fontWeight="bold">Thông tin liên hệ</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi qua các kênh sau:
                        </Typography>

                        {[
                            {
                                icon: Mail,
                                title: "Email",
                                value: "contact.smartbus@gmail.com",
                            },
                            {
                                icon: Phone,
                                title: "Điện thoại",
                                value: "1900 1234",
                            },
                            {
                                icon: MapPin,
                                title: "Địa chỉ",
                                value: `Tầng 10, Tòa nhà ABC\n123 Đường XYZ, Quận 1\nTP. Hồ Chí Minh`,
                            },
                            {
                                icon: Clock,
                                title: "Giờ làm việc",
                                value: `Thứ 2 - Thứ 6: 8:00 - 18:00\nThứ 7: 8:00 - 12:00`,
                            },
                        ].map((item, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                gap={2}
                                p={2}
                                sx={{
                                    border: "1px solid #dcfce7",
                                    background: "#f0fdf4",
                                    borderRadius: 2,
                                    ":hover": { background: "#ecfdf5" },
                                }}
                            >
                                <Avatar sx={{ bgcolor: "#bbf7d0", color: "green", width: 48, height: 48 }}>
                                    <item.icon />
                                </Avatar>
                                <Box>
                                    <Typography fontWeight="bold">{item.title}</Typography>
                                    <Typography color="text.secondary" whiteSpace="pre-line">
                                        {item.value}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>

            <ScrollToTopButton />
        </Box>
    )
}

export default ContactPage
