// import React from "react";
// import { AppBar, Toolbar, Typography, Box } from "@mui/material";
// import SearchBar from "./SearchBar";

// function Header() {
//   return (
//     <AppBar
//       position="sticky"
//       elevation={1}
//       sx={{
//         backgroundColor: "#325db8ff",
//         color: "#000",
//       }}
//     >
//       <Toolbar sx={{ px: 3 }}>
//         <Typography variant="h6" fontWeight="bold">
//           Billing App
//         </Typography>
//         <Box sx={{ flexGrow: 1, dispaly: "flex", justifyContent:"center" }} >
//         <SearchBar />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;

import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex" }}>
        
        {/* Left Section */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <Typography variant="h6" fontWeight="bold">
            Billing App
          </Typography>
        </Box>

        {/* Center Section */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <SearchBar />
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 1 }} />

      </Toolbar>
    </AppBar>
  );
}

export default Header;
