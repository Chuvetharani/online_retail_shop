/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  ImageListItem,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard({ data }) {
  const placeOrder = (productDetails) => {
    fetch("https://uiexercise.theproindia.com/api/Order/AddOrder", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        customerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        productId: productDetails?.productId,
        quantity: productDetails?.count,
      }),
    });
  };

  return (
    <Grid container>
      {data &&
        data?.map((product) => {
          return (
            <Grid item lg={2} md={3} sm={6} xs={12} key={product?.productId}>
              <Card sx={{ width: 250, height: 150, borderRadius: 2 }}>
                <ImageListItem>
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "gray",
                      borderRadius: 0,
                      position: "absolute",
                      top: 15,
                      right: 15,
                    }}
                    aria-label={`${product.productName}`}
                  >
                    <AddShoppingCartIcon onClick={() => placeOrder(product)} />
                  </IconButton>
                </ImageListItem>

                <CardContent>
                  <Typography variant="button" color="text.secondary">
                    {product?.productName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
}
