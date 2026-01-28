import React from "react";
import {Card, CardContent, Typography, Box, Button, Divider} from "@mui/material";

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
                        <Box key={item.id} display="flex" justifyContent="space-between" mb={1}>
                            <Typography>
                                {item.name} * {item.quantity}
                            </Typography>
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