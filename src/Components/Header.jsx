import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex" }}>
        
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <Typography variant="h6" fontWeight="bold">
            Billing App
          </Typography>
        </Box>

        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <SearchBar />
        </Box>

        <Box sx={{ flex: 1 }} />

      </Toolbar>
    </AppBar>
  );
}

export default Header;
