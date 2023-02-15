import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <AppBar position="relative" color="warning">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Bismillah Baca
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
