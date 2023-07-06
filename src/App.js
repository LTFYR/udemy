import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Cart, Courses } from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  console.log(search);
  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
