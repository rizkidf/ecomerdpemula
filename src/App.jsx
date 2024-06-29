import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import MenuList from "./pages/menuList";
import Order from "./pages/order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu-list" element={<MenuList />} />
        <Route path="/order/:menu_id" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
