import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

export default function CardPage() {
  const { id } = useParams();

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Card {id}
      </Typography>

      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
        semper nisl, et facilisis urna blandit eu. Sed eget eros a urna hendrerit 
        gravida. Integer vel sapien et arcu ullamcorper dapibus non id urna.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <img
          src={`https://picsum.photos/seed/${id}/800/400`}
          alt="Random"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>
    </Container>
  );
}