import { Button, Container, Typography, Box } from "@mui/material";

function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box my={4} style={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            We&apos;re dedicated to helping you job search.
          </Typography>
          <Typography variant="h6">
            Forget the endless job boards and filters. Get personalized career
            recommendations and autofill your applications with our extension.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Login
          </Button>
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            15,000,000+ applications submitted
          </Typography>
        </Box>
        {/* Add more components for the rest of the content */}
      </Container>
    </div>
  );
}

export default Home;
