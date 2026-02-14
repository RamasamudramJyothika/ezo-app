import React from "react";
import {useState} from 'react';
import { Card, CardContent, CardMedia, Typography,IconButton, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductCard({product, quantity,addToCart, removeFromCart}) {
    return(
        <Card 
          sx={{
            width: 190, 
            height:280, 
            borderRadius: 3, 
            boxShadow: 3, 
            transition: "0.2s",
            "&:hover": {
                boxShadow: 6,
                transform: "translateY(-2px)",
            }
            }}
        >

            <CardMedia component="img" image={product.image} alt={product.name} sx={{height:140,objectFit:"contain", backgroundColor: "#f5f5f5"}}/>
            <CardContent>
                <Typography variant="subtitle1" fontWeight={"bold"}>{product.name}</Typography>
                <Typography>₹{product.price}</Typography>

                <Box mt={2} display="flex" alignItems="center" justifyContent="space-between" sx={{border:"1px solid #ddd", borderRadius:2, px:1}} >
                    <IconButton size="small" onClick={()=>removeFromCart(product)} disabled={quantity === 0}>
                        <RemoveIcon/>
                    </IconButton>

                    <Typography>{quantity}</Typography>

                    <IconButton size="small" onClick={()=> addToCart(product)}>
                        <AddIcon/>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>

    )
};
export default ProductCard;