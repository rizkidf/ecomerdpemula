import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import MenuList from "./pages/menuList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu-list" element={<MenuList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
