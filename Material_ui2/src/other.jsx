import { Button, Container, Typography, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const other = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem", textAlign: "center" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        React + Material UI
      </Typography>
      <Typography variant="body1">
        Successfully set up your new React app with Material UI!
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary">
          Contained Button
        </Button>
        <Button variant="outlined" color="secondary" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </Container>
  );
};
export default other;
