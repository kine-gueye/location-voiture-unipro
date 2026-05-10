import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; // Ta page d'accueil
import Connexion from "./pages/Connexion";   // Ton fichier de login
import Dashboard from "./pages/Dashboard";
import Footer from "./composants/footer";
import Apropos from "./pages/Apropos";

function AppContent() {
  const location = useLocation();

  // On définit les pages où on veut cacher le Footer (Dashboard)
  const hideFooterPages = ["/dashboard"];
  const shouldShowFooter = !hideFooterPages.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <main className="flex-1">
        <Routes>
          {/* Pages avec Footer potentiel */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/connexion" element={<Connexion />} />
          
          {/* Page sans Footer (le Dashboard gère tout seul son affichage) */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </main>

      {/* On affiche le footer uniquement si on n'est pas sur le dashboard */}
      {shouldShowFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return <AppContent />;
}