import React, { useState } from "react";
import categories from "../Data/categories";
import products from "../Data/products";
import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import CategorySection from "../Components/CategorySection";
import BillPreview from "../Components/BillPreview";
import { Container, Box } from "@mui/material";

function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const normalizedSearch = search.trim().toLowerCase();

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
            {categories.map((category) => {
              const categoryProducts = products.filter(
                (product) =>
                  product.categoryId === category.id &&
                  product.name
                    .toLowerCase()
                    .includes(normalizedSearch)
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
        </Box>
      </Container>
    </>
  );
}

export default Home;