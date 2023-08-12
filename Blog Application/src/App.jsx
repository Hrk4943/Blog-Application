import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:index" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
