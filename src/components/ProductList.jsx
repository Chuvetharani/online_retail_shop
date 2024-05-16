import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      ProductId: "f3b658d4-ca43-4e8a-8278-006f097c73e1",
      ProductName: "FairnLovely",
      Quantity: 368,
      IsActive: true,
    },
    {
      ProductId: "6fcae71a-5f28-4ad9-8eee-007f5864663f",
      ProductName: "Oppo Mobile",
      Quantity: 0,
      IsActive: true,
    },
    {
      ProductId: "50127115-40e7-4c41-b0d1-00f89366c093",
      ProductName: "Oneplus Nord CE4",
      Quantity: 0,
      IsActive: true,
    },
    {
      ProductId: "7e7cfc92-4813-410a-af65-027054b92fa5",
      ProductName: "vijayhhh",
      Quantity: 0,
      IsActive: true,
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      fetch(`https://uiexercise.theproindia.com/api/Product/GetAllProduct`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={1} paddingTop="20px">
          <ProductCard data={products} />
        </Grid>
      )}
    </>
  );
};

export default ProductList;
