import React from "react";
import {useState} from 'react';
import { Card, CardContent, CardMedia, Typography,IconButton, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductCard({product, quantity,addToCart, removeFromCart}) {
    return(
        <Card sx={{width: 180, height:260, display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
            <CardMedia component="img" image={product.image} alt={product.name} sx={{width:"100%", height:140,objectFit:"contain"}}/>
            <CardContent>
                <Typography variant="subtitle1" fontWeight={"bold"}>{product.name}</Typography>
                <Typography>₹{product.price}</Typography>

                <Box mt={2} display="flex" alignItems="center" justifyContent="space-between" >
                    <IconButton size="small" onClick={()=>removeFromCart(product)} disabled={quantity === 0}>
                        <RemoveIcon/>
                    </IconButton>

                    <Typography mx={1}>{quantity}</Typography>

                    <IconButton size="small" onClick={()=> addToCart(product)}>
                        <AddIcon/>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>

    )
};
export default ProductCard;