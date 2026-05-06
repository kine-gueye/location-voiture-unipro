import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Connexion from "./pages/Connexion";
import Dashboard from "./pages/Dashboard";

// Note: Si tu n'as pas créé le fichier Inscription,
// ton collègue pourra l'ajouter plus tard ici.

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        {/* Ta page principale */}
        <Route path="/" element={<LandingPage />} />

        {/* Les pages que ton collègue va remplir */}
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Route de secours : si l'adresse n'existe pas, on revient à l'accueil */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
