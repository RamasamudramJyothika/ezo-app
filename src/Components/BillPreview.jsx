import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function BillPreview({open, onClose, cart, clearCart}){
    const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const handleConfirm = () => {
        clearCart();
        onClose();
    };

    return(
        <Dialog open={open} onClose={onClose} full maxWidth="sm">
            <DialogTitle>Bill Preview</DialogTitle>
            <DialogContent>
                {cart.length===0 ? (
                    <Typography>No items in cart</Typography>) : (cart.map(item =>(
                        <Box key={item.id} display="flex" justifyContent="space-between" mb={1}>
                            <Typography>{item.name} * {item.quantity}</Typography>
                            <Typography>{item.price * item.quantity}</Typography>
                        </Box>
                    ))
                )}
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Typography fontWeight="bold">Total</Typography>
                    <Typography fontWeight="bold">{totalAmount}</Typography>
                </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button variant="contained" color="success" onClick={handleConfirm}>Confirm Bill</Button>
                </DialogActions>
        </Dialog>

    )
};
export default BillPreview;