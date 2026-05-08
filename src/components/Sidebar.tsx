import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Tableau de Bord", path: "/dashboard" },
    { name: "Plan du Parking", path: "/parking-map" },
    { name: "Historique", path: "/history" }, 
  ];

  return (
    <div className="w-full md:w-64 bg-[#1e293b] h-screen shadow-xl flex flex-col text-white">
      {/* Header avec Bleu Nuit */}
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Unipro <span className="text-[#3b82f6]">Parking</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`block p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-[#3b82f6] text-white shadow-lg" // Bleu Sport pour l'élément actif
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Pied de page Sidebar */}
      <div className="p-4 border-t border-gray-700">
        <Link 
          to="/" 
          className="flex items-center text-gray-400 hover:text-red-400 transition-colors"
        >
          <span>Déconnexion</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;