import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ProductList />
      </div>
    </BrowserRouter>
  );
}
