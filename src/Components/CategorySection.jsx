import React from "react";
import ProductCard from "./ProductCard";
import { Typography, Box } from "@mui/material";

function CategorySection({category,products}) {
    return(
       <Box>
        <Typography variant="h5" gutterBottom>
            {category.name}
        </Typography>

        <Box display="flex" gap={2} flexWrap="wrap">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}

        </Box>
       </Box>
    )
};
export default CategorySection;