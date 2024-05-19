import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { FavoriteContext } from "./components/FavoriteContext";

export default function App() {
  const [favoriteCount, setFavoriteCount] = useState(0);

  const updateFavoriteValue = () => {
    setFavoriteCount(favoriteCount + 1);
  };

  return (
    <BrowserRouter>
      <FavoriteContext.Provider
        value={{ favoriteValue: favoriteCount, updateFavoriteValue }}
      >
        <div className="App">
          <Navbar />
          <ProductList />
        </div>
      </FavoriteContext.Provider>
    </BrowserRouter>
  );
}
