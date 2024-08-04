import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Homepage from "./customer/pages/HomePage/Homepage";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
