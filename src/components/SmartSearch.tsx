import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

const SmartSearch = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#fafafa' }}>
      <Container>
        <Typography variant="h4" fontWeight={600} align="center" gutterBottom>
          Tìm đường thông minh
        </Typography>
        <Paper sx={{ p: 4, mt: 4, maxWidth: 600, mx: 'auto' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Điểm bắt đầu" variant="outlined" fullWidth />
            <TextField label="Điểm đến" variant="outlined" fullWidth />
            <Button variant="contained" color="primary">Tìm tuyến</Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SmartSearch;