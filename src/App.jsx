import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductsSlider from "./components/Products-2";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Products />
      <ProductsSlider />
      <About />
      <Footer />
    </div>
  );
}

export default App;
