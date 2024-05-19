/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  Typography,
  Grid,
  ImageListItem,
  Button,
  Rating,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { Favorite } from "@mui/icons-material";
import { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";

const customerId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

export default function ProductCard({ data }) {
  const favorite = useContext(FavoriteContext);
  const updateFavorite = favorite?.updateFavoriteValue;

  const placeOrder = (productDetails) => {
    fetch("https://uiexercise.theproindia.com/api/Order/AddOrder", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        customerId: customerId,
        productId: productDetails?.productId,
        quantity: productDetails?.count,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Grid container spacing={2}>
      {data &&
        data?.map((product) => {
          return (
            <Grid item lg={2} md={3} sm={6} xs={12} key={product?.ProductId}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: 350,
                  borderRadius: 2,
                }}
              >
                <ImageListItem>
                  <img
                    style={{
                      height: 150,
                      width: 250,
                      borderRadius: 5,
                      backgroundColor: "lightgrey",
                    }}
                    src={product?.ProductImage}
                    alt={product.title}
                  />
                </ImageListItem>

                <CardContent>
                  <Typography variant="h6" color="ButtonText">
                    {product?.ProductName}
                  </Typography>

                  <Rating name="size-medium" defaultValue={4} />
                </CardContent>
                <Grid container spacing={1} textAlign="center">
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button
                      sx={{ backgroundColor: "#ff9f00", color: "white" }}
                      startIcon={<Favorite />}
                      variant="contained"
                      margin="10px"
                      onClick={updateFavorite}
                    >
                      Add to Favorite
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#fb641b" }}
                      startIcon={<BoltIcon />}
                      onClick={placeOrder(product)}
                    >
                      Buy Now
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
}
