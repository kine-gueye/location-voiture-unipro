import { Link } from 'react-router-dom';

const BarreNavigation = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo / Nom du projet */}
      <div className="text-primary font-bold text-2xl tracking-tight">
        Auto<span className="text-secondary">Unipro</span>
      </div>

      {/* Liens de navigation */}
      <div className="hidden md:flex space-x-8 font-medium text-gray-600">
        <Link to="/" className="hover:text-secondary transition">Accueil</Link>
        <Link to="/voitures" className="hover:text-secondary transition">Véhicules</Link>
        <Link to="/contact" className="hover:text-secondary transition">Contact</Link>
      </div>

      {/* Bouton de Connexion */}
      <div>
        <Link 
          to="/connexion" 
          className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg"
        >
          Connexion
        </Link>
      </div>
    </nav>
  );
};

export default BarreNavigation;