import React from "react";
import {
  Box,
  Container,
  Grid,
  CardContent,
  Typography,
  Card,
} from "@mui/material";

export default function Main() {
  return (
    <>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              fontWeight={600}
              align="center"
              color="text.primary"
              gutterBottom
            >
              Al-Quran Apps
            </Typography>
            <Typography
              variant="h5"
              align="center"
              fontWeight={300}
              color="text.secondary"
              paragraph
            >
              Membaca Al-Quran dengan mudah dan kapan saja
            </Typography>
            <Content />
          </Container>
        </Box>
      </main>
    </>
  );
}

const Content = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  <>
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>;
};
