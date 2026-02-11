// import React, {useState} from "react";
// import {Card, CardContent, Typography, Box, Button, Divider, CardMedia, TextField} from "@mui/material";

// function BillPreview({cart, clearCart}){
//     const [discount, setDiscount] = useState();
//     const totalAmount = cart.reduce(
//         (sum, item) => sum + item.price * item.quantity, 
//         0
//     );
//     const discountAmount = totalAmount * (discount/100);
//     const finalAmount = totalAmo0unt - discountAmount;

//     return(
//         <Card sx={{boderRadius: 3, boxShadow: 3}}>
//             <CardContent>
//                 <Typography variant="h6" mb={2}>
//                     Bill Summary
//                 </Typography>
//                 {cart.length === 0 ? (
//                     <Typography color="text.secondary">
//                         No items added
//                     </Typography>
//                 ) : (
//                     cart.map((item) => (
//                         <Box key={item.id} display="flex" alignItems="space-between" mb={1}>
//                             <Box display="flex" alignItems="center" gap={1} flex={1}>
//                             <CardMedia 
//                                 component="img"
//                                 image={item.image}
//                                 alt={item.name}
//                                 sx={{
//                                     width: 40,
//                                     height: 40,
//                                     objectFit: "cover",
//                                     borderRadius: 1,
//                                     mr: 1
//                                 }}
//                                 />
//                             <Typography>
//                                 {item.name} * {item.quantity} No
//                             </Typography>
//                             </Box>
//                             <Typography>
//                                   ₹{item.price * item.quantity} 
//                             </Typography>
//                         </Box>
//                     ))
//                 )}

//                 <Box>
//                     <Typography>Discount (%)</Typography>
//                     <TextField 
//                         type="number"
//                         size="small"
//                         value={discount}
//                         onChange={(e)=>setDiscount(Number(e.target.value))}
//                         inputProps={{ max:100}}
//                         style={{width:"90px"}}
//                     />

//                 </Box>

//                 <Divider sx={{my:2}}/>

//                 <Box display="flex" justifyContent="space-between">
//                     <Typography fontWeight="bold">Sub Total</Typography>
//                     <Typography fontWeight="bold">₹{totalAmount.toFixed(2)}</Typography>
//                 </Box>

//                 <Box display="flex" justifyContent="space-between">
//                     <Typography color="error">Discount ({discount}%)</Typography>
//                     <Typography color="error">-₹{discountAmount.toFixed(2)}</Typography>
//                 </Box>

//                 <Divider sx={{my: 1}}/>

//                 <Box display="flex" justifyContent="space-between">
//                     <Typography fontWeight="bold">Final Amount</Typography>
//                     <Typography fontWeight="bold">₹{finalAmount.toFixed(2)}</Typography>
//                 </Box>

//                 <Button 
//                     fullWidth
//                     sx={{mt:2}}
//                     variant="contained"
//                     color="success"
//                     disabled={cart.length === 0}
//                     onClick={clearCart}
//                 >
//                     Confirm Bill
//                 </Button>
//             </CardContent>
//         </Card>
//     );
// }

// export default BillPreview;


import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
  CardMedia,
  TextField
} from "@mui/material";

function BillPreview({ cart = [], clearCart }) {
  const [discount, setDiscount] = useState("");

  // 🔹 Calculate subtotal (memoized for performance)
  const totalAmount = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  // 🔹 Normalize discount (0–100)
  const normalizedDiscount = Math.min(Math.max(Number(discount) || 0,0), 100);

  const discountAmount = useMemo(() => {
    return totalAmount * (normalizedDiscount / 100);
  }, [totalAmount, normalizedDiscount]);

  const finalAmount = useMemo(() => {
    return Math.max(totalAmount - discountAmount, 0);
  }, [totalAmount, discountAmount]);

  const isCartEmpty = cart.length === 0;

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" mb={2}>
          Bill Summary
        </Typography>

        {/* 🔹 Cart Items */}
        {isCartEmpty ? (
          <Typography color="text.secondary">
            No items added
          </Typography>
        ) : (
          cart.map((item) => (
            <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    width: 40,
                    height: 40,
                    objectFit: "cover",
                    borderRadius: 1
                  }}
                />
                <Typography variant="body2">
                  {item.name} × {item.quantity}
                </Typography>
              </Box>

              <Typography variant="body2">
                ₹{(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          ))
        )}

        <Divider sx={{ my: 2 }} />

        {/* 🔹 Subtotal */}
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>Subtotal</Typography>
          <Typography>₹{totalAmount.toFixed(2)}</Typography>
        </Box>

        
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography>Discount (%)</Typography>
          <TextField
            type="number"
            size="small"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            onBlur={()=>{
              if(discount === "") setDiscount(0);
            }}
            inputProps={{ min: 0, max: 100 }}
            disabled={isCartEmpty}
            sx={{ width: 90 }}
          />
        </Box>

        
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography color="error">Discount Amount</Typography>
          <Typography color="error">
            -₹{discountAmount.toFixed(2)}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="bold">
            Final Amount
          </Typography>
          <Typography fontWeight="bold">
            ₹{finalAmount.toFixed(2)}
          </Typography>
        </Box>

        
        <Button
          fullWidth
          sx={{ mt: 2 }}
          variant="contained"
          color="success"
          disabled={isCartEmpty}
          onClick={()=>{
            clearCart();
            setDiscount("");
          }}
        >
          Confirm Bill
        </Button>
      </CardContent>
    </Card>
  );
}

export default BillPreview;
