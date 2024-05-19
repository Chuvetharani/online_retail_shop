/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  Badge,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Close, Favorite } from "@mui/icons-material";
import { FavoriteContext } from "./FavoriteContext";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const FavouriteCount = useContext(FavoriteContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setProductName("");
    setQuantity("");
    setIsActive(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <AddBusinessIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            Online Retile Store
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<AddBoxIcon />}
            onClick={handleClickOpen}
          >
            Add Product
          </Button>
          <IconButton size="large" aria-label="Favorite Count" color="inherit">
            <Badge badgeContent={FavouriteCount?.favoriteValue} color="warning">
              <Favorite color="error" />
            </Badge>
          </IconButton>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: "form",
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                fetch(
                  "https://uiexercise.theproindia.com/api/Product/AddProduct",
                  {
                    method: "POST",
                    headers: new Headers(),
                    body: formJson,
                  }
                )
                  .then((res) => res.json())
                  .then((data) => console.log(data))
                  .catch((err) => console.log(err));
                handleClose();
                handleSubmit();
              },
            }}
          >
            <DialogTitle>Add Product</DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <Close />
            </IconButton>
            <DialogContent dividers>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                label="Product Name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                label="Quantity"
                type="number"
                fullWidth
                variant="standard"
              />
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Is Active
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="isActive"
                  value={isActive}
                  onChange={() =>
                    isActive ? setIsActive(false) : setIsActive(true)
                  }
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
