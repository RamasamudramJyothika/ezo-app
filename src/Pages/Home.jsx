import React from "react";
import {useState} from "react";
import categories from "../Data/categories";
import products from "../Data/products";
import Header from "../Components/Header";
import CategorySection from "../Components/CategorySection";
import BillPreview from "../Components/BillPreview";
import { Container } from "@mui/material";
import {Box,Button} from "@mui/material"

function Home() {
  const[search,setSearch] = useState("");
  const[cart, setCart] = useState([]);
  const[openBill, setOpenBill] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if(existing) {
        return prev.map((item) => item.id === product.id 
          ? {...item, quantity:item.quantity + 1} : item
        )
      }
      return[...prev, {...product, quantity: 1}];
    })
  };

  const removeFromCart = (product) => {
    setCart((prev)=>
    prev
      .map((item)=>
      item.id === product.id
      ? {...item, quantity: item.quantity - 1} : item
    )
    .filter((item) => item.quantity > 0)
  );
  };

  return(
    <>
    <Header search={search} setSearch={setSearch}/>

    <Container sx={{marginTop: 4}}>
      {categories.map((category)=>{
        const categoryProducts = products.filter((product)=>product.categoryId === category.id
        && product.name.toLowerCase().includes(search.toLowerCase()));
        if(categoryProducts.length === 0) return null;
        return(
          <CategorySection
            key={category.id}
            category={category}
            products={categoryProducts}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}/>
        )
      })}
      <Box>
        <Button variant="contained" color="success" disabled={cart.length === 0} onClick={()=>setOpenBill(true)}>Preview Bill</Button>
      </Box>
      </Container>
      <BillPreview 
        open={openBill}
        onClose={()=>setOpenBill(false)}
        cart={cart}
        clearCart={()=>setCart([])}
      />
    </>
  )
};
export default Home;

