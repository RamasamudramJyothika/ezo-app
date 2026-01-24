import React from "react";
import {useState} from "react";
import categories from "../Data/categories";
import products from "../Data/products";
import Header from "../Components/Header";
import CategorySection from "../Components/CategorySection";
import { Container } from "@mui/material";

function Home() {
  const[selectedCategory, setSelectedCategory] = useState(null);

  return(
    <>
    <Header/>

    <Container sx={{marginTop: 4}}>
      {categories.map((category)=>{
        const categoryProducts = products.filter((product)=>product.categoryId === category.id);
        return(
          <CategorySection
            key={category.id}
            category={category}
            products={categoryProducts}/>
        )
      })}
      </Container>
    </>
  )
};
export default Home;

