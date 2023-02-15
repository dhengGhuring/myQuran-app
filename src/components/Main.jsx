import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  CardContent,
  Typography,
  Card,
  Stack,
} from "@mui/material";
import axios from "axios";

export default function Main() {
  const [surat, setSurat] = useState([]);
  const getAPI = async () => {
    const checkResponse = await axios("https://equran.id/api/v2/surat");
    setSurat(checkResponse.data.data);
  };
  useEffect(() => {
    getAPI();
  }, []);

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
          </Container>
          <Content data={surat} />
        </Box>
      </main>
    </>
  );
}

const Content = ({ data }) => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {data.map((data) => (
            <Grid item key={data.nomor} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <hr />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    fontSize={"30px"}
                  >
                    {data.nama}
                  </Typography>
                  <Typography fontSize={"15px"}>{data.namaLatin}</Typography>
                  <Stack
                    direction={"row"}
                    paddingTop={"20px"}
                    justifyContent={"center"}
                  >
                    <Typography
                      fontSize={"12px"}
                      fontWeight={400}
                      bgcolor={"green"}
                      color={"white"}
                      p={"8px"}
                      mr={"10px"}
                      borderRadius={"20px"}
                    >
                      {data.arti}
                    </Typography>
                    <Typography
                      fontSize={"12px"}
                      fontWeight={400}
                      bgcolor={"teal"}
                      color={"white"}
                      p={"8px"}
                      borderRadius={"20px"}
                      textAlign={"center"}
                    >
                      {data.tempatTurun}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
