import Header from "./components/Header";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import CarsPage from "./pages/CarsPage";
import CarDetails from "./pages/CarDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
      <Footer />
    </>

  );
}

export default App;