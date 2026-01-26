import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
function SearchBar({value, onChange}) {
    return(
        <TextField 
            size="medium" 
            variant="outlined"
            placeholder="search..."
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            sx={{width:260, backgroundColor:"#fff", borderRadius:2}}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                )
            }}>
        </TextField>

    )
}
export default SearchBar;