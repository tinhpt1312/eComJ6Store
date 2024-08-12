import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import CartFeatures from "./features/Cart";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import ProductDetailPage from "./pages/ProductDetail";
import ShippingForm from "./components/ShippingForm";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/*" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartFeatures />} />
      </Routes>
      {/* <ShippingForm /> */}
      <Footer />
    </div>
  );
}

export default App;
