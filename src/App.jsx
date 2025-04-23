import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Wholesale from "./pages/wholesale/Wholesale";
import Taste from "./pages/taste/Taste";
import Contact from "./pages/contact/ContactPage";
import { useEffect } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/wholesale" element={<Wholesale />} />
      <Route path="/taste" element={<Taste />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
