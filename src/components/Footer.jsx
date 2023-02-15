import React from "react";
import { Box, Typography, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#/">
          DhengGhuring
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          display={"flex"}
          justifyContent={"center"}
        >
          Made with <FavoriteIcon color="warning" />
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}
