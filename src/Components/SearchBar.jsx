import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
function SearchBar({value, onChange}) {
    return(
        <TextField 
            fullWidth
            size="medium" 
            variant="outlined"
            placeholder="search..."
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            sx={{backgroundColor:"#fff", borderRadius:3, boxShadow: "0 2px 8px rgba(0,0,0,0,0.8)",}}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon color="action"/>
                    </InputAdornment>
                )
            }}/>
    )
}
export default SearchBar;