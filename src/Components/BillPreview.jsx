import React from "react";
import {Card, CardContent, Typography, Box, Button, Divider, CardMedia} from "@mui/material";

function BillPreview({cart, clearCart}){
    const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 
        0
    );

    return(
        <Card sx={{boderRadius: 3, boxShadow: 3}}>
            <CardContent>
                <Typography variant="h6" mb={2}>
                    Bill Summary
                </Typography>
                {cart.length === 0 ? (
                    <Typography color="text.secondary">
                        No items added
                    </Typography>
                ) : (
                    cart.map((item) => (
                        <Box key={item.id} display="flex" alignItems="space-between" mb={1}>
                            <Box display="flex" alignItems="center" gap={1} flex={1}>
                            <CardMedia 
                                component="img"
                                image={item.image}
                                alt={item.name}
                                sx={{
                                    width: 40,
                                    height: 40,
                                    objectFit: "cover",
                                    borderRadius: 1,
                                    mr: 1
                                }}
                                />
                            <Typography>
                                {item.name} * {item.quantity} No
                            </Typography>
                            </Box>
                            <Typography>
                                  ₹{item.price * item.quantity} 
                            </Typography>
                        </Box>
                    ))
                )}

                <Divider sx={{my:2}}/>

                <Box display="flex" justifyContent="space-between">
                    <Typography fontWeight="bold">Total</Typography>
                    <Typography fontWeight="bold">₹{totalAmount}</Typography>
                </Box>

                <Button 
                    fullWidth
                    sx={{mt:2}}
                    variant="contained"
                    color="success"
                    disabled={cart.length === 0}
                    onClick={clearCart}
                >
                    Confirm Bill
                </Button>
            </CardContent>
        </Card>
    );
}

export default BillPreview;