import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/login"; 
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import Reset from "./pages/Reset";
import ParkingMap from "./pages/ParkingMap"; 
import Sidebar from "./components/Sidebar";

function AppContent() {
  const location = useLocation();

  // Pages d'authentification (sans Sidebar)
  const authPages = ["/", "/register", "/reset"];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar visible uniquement hors pages auth */}
      {!isAuthPage && <Sidebar />}

      <main className="flex-1 p-4 md:p-8">
        <Routes>
          {/* Auth */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />

          {/* Application */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/parking" element={<ParkingMap />} />
        </Routes>
      </main>
    </div>
  );
}

// C'est cette partie qu'il ne faut pas oublier en bas :
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}