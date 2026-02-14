import React, { useState, useEffect } from "react";
import categories from "../Data/categories";
import products from "../Data/products";
import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import CategorySection from "../Components/CategorySection";
import BillPreview from "../Components/BillPreview";
import { Container, Box ,Typography} from "@mui/material";

function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  //const normalizedSearch = search.trim().toLowerCase();

  useEffect(()=>{
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim().toLowerCase())
    }, 400);
    return ()=> clearTimeout(timer);
  },[search]);

  const isSearching = debouncedSearch.length > 0;

  const hasSearchResults = 
    debouncedSearch.length > 0 &&
    products.some((product)=>
      product.name.toLowerCase().includes(debouncedSearch)
  );

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Header/>

      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Box sx={{maxWidth:600, mx:"auto", mb:4}}>
          <SearchBar value={search} onChange={setSearch}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          {/* LEFT — PRODUCTS (fluid) */}
          <Box sx={{ flex: 1 }}>
            {isSearching && !hasSearchResults && (
              <Typography align="center" sx={{mt:6, color:"gray"}}>
                No products found
              </Typography>
            )}

            {categories.map((category) => {
              const categoryProducts = products.filter(
                (product) =>
                  product.categoryId === category.id &&
                  product.name
                    .toLowerCase()
                    .includes(debouncedSearch)
              );

              if (categoryProducts.length === 0) return null;

              return (
                <CategorySection
                  key={category.id}
                  category={category}
                  products={categoryProducts}
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </Box>

          {/* RIGHT — BILL (controlled width) */}
          {!isSearching && (
            <Box
            sx={{
              width: 360,          
              minWidth: 320,
              position: "sticky",
              top: 250,
            }}
          >
            <BillPreview
              cart={cart}
              clearCart={() => setCart([])}
            />
          </Box>
          )}
          
        </Box>
      </Container>
    </>
  );
}

export default Home;