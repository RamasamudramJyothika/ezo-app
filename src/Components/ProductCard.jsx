import React from "react";
import {useState} from 'react';
import { Card, CardContent, CardMedia, Typography,IconButton, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductCard({product}) {
    const[quantity, setQuantity] = useState(0);
    return(
        <Card sx={{width: 180, height:260, display:"flex", flexDirection:"column", justiftContent:"space-between"}}>
            <CardMedia component="img" image={product.image} alt={product.name} sx={{width:"100%", height:140,objectFit:"contain"}}/>
            <CardContent>
                <Typography variant="subtitle1" fontWeight={"bold"}>{product.name}</Typography>
                <Typography>₹{product.price}</Typography>

                <Box mt={2} display="flex" alignItems="center" justifyContent="space-between" >
                    <IconButton size="small" onClick={()=>setQuantity(Math.max(quantity-1, 0))}>
                        <RemoveIcon/>
                    </IconButton>

                    <Typography>{quantity}</Typography>

                    <IconButton size="small" onClick={()=> setQuantity(quantity + 1)}>
                        <AddIcon/>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>

    )
};
export default ProductCard;