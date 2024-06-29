import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";

// import pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import TeamPage from "./pages/TeamPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/services" element={<ServicePage></ServicePage>}></Route>
        <Route
          path="/portfolio"
          element={<PortfolioPage></PortfolioPage>}
        ></Route>
        <Route path="/pricing" element={<PricingPage></PricingPage>}></Route>
        <Route path="/team" element={<TeamPage></TeamPage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
      <Footer></Footer>

      {/* <Home></Home> */}
    </div>
  );
}

export default App;
