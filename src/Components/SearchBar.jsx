import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { InputAdornment, IconButton } from "@mui/material";

function SearchBar({ value, onChange }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        endAdornment: value && (
          <InputAdornment
            position="end"
            sx={{ pointerEvents: "auto" }} 
          >
            <IconButton
              size="small"
              onClick={() => onChange("")}
              sx={{ pointerEvents: "auto" }} 
            >
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
