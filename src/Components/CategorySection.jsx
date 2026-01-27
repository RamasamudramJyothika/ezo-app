import React from "react";
import ProductCard from "./ProductCard";
import { Typography, Grid } from "@mui/material";

function CategorySection({category,products,cart,addToCart,removeFromCart}) {
    return(
       <>
        <Typography variant="h6" mt={3} mb={2}>
            {category.name}
        </Typography>

         <Grid container spacing={2}>
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);

          return (
            <Grid item key={product.id}>
              <ProductCard
                product={product}
                quantity={cartItem?.quantity || 0}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </Grid>
          );
        })}
      </Grid>
       </>
    )
};
export default CategorySection;