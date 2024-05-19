import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import { Backdrop, Grid } from "@mui/material";
import productData from "./products.json";

// eslint-disable-next-line react/prop-types
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetchData();
    const filteredProducts = productData?.filter((product) => {
      if (product?.Quantity > 0) return product;
    });
    setProducts(filteredProducts);
    setLoading(false);
  }, []);

  // const fetchData = async () => {
  //   try {
  //     await fetch(
  //       `https://uiexercise.theproindia.com/api/Product/GetAllProduct`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const list = data?.map((product, i) => {
  //           return {
  //             ...product,
  //             productImage: `https://picsum.photos/200/300?random=${i + 1}`,
  //           };
  //         });
  //         setProducts(list);
  //         setLoading(false);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {loading ? (
        <Box>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      ) : (
        <Grid container padding="10px">
          <ProductCard data={products} />
        </Grid>
      )}
    </>
  );
};

export default ProductList;
