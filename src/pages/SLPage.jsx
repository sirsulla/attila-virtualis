import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { slPagesData } from "../data/slpagesdata"

export default function CardPage() {
  const { id } = useParams();
  const slpage = slPagesData.find(c => c.id === parseInt(id));
   if (!slpage) return <Typography>Card not found</Typography>;

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        {slpage.title}
      </Typography>

      <Typography variant="body1" paragraph>
        {slpage.text}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <img
          src={slpage.image}
          alt={slpage.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>
    </Container>
  );
}