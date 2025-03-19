import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ScrollToTop } from "./components/Helpers/Helpers";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="main-header">
      <Navbar />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <br></br>
      <br></br>
      <Footer />
    </Router>
  );
};

export default App;