import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login"; 
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import Reset from "./pages/Reset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page principale */}
        <Route path="/" element={<Login />} />

        {/* Auth */}
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;