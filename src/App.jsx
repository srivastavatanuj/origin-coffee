import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Wholesale from "./pages/wholesale/Wholesale";
import Taste from "./pages/taste/Taste";
import Contact from "./pages/contact/ContactPage";
import Login from "./pages/login/Login";
import { useEffect } from "react";
import Products from "./pages/products/Products";
import DetailedView from "./pages/products/Detailed/DetailedView";
import { useStore } from "./store/store";
import useApi from "./APIs/useApi";
import Cart from "./pages/cart/Cart";

function App() {
  const { refreshToken, getBasicProfile } = useApi();
  const { userLoggedIn, userLoggedOut, setUserName, setCartItems } = useStore();

  useEffect(() => {
    const refresh = () => {
      const token = localStorage.getItem("refresh");

      if (token) {
        refreshToken({ refresh: token })
          .then((res) => {
            userLoggedIn();
            localStorage.setItem("access", res["access"]);
            getBasicProfile();
          })
          .catch((error) => {
            console.log(error);
            localStorage.clear();
            userLoggedOut();
          });
      } else {
        localStorage.clear();
        userLoggedOut();
      }
    };

    refresh();

    const interval = setInterval(refresh, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:str" element={<DetailedView />} />
      <Route path="/wholesale" element={<Wholesale />} />
      <Route path="/taste" element={<Taste />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
