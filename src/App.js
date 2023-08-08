import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import BlogDetails from "./components/BlogDetails/BlogDetails";

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}
