import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ProductFeatures from "./features/Product";
import HomePage from "./pages/Home";
import CategoryFeatures from "./features/Category";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/*" element={<ProductFeatures />} />
      </Routes>
      <CategoryFeatures />
      <Footer />
    </div>
  );
}

export default App;
