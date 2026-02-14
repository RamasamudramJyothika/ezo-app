import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Header() {
  return (
    <AppBar position="sticky" eleveation={1}>
      <Toolbar>
        
        <Box sx={{ flex: 1}}>
          <Typography variant="h6" fontWeight="bold">
            Billing App
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
