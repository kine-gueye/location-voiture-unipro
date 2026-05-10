import BarreNavigation from "../composants/BarreNavigation";
import CarteVoiture from "../composants/CarteVoiture";

const LandingPage = () => {
  // 1. On crée d'abord la liste des voitures (les données)
  const voitures = [
    {
      id: 1,
      nom: "Toyota Prado",
      prix: "50 000 FCFA",
      categorie: "SUV",
      image: "",
    },
    {
      id: 2,
      nom: "Mercedes Classe C",
      prix: "75 000 FCFA",
      categorie: "Luxe",
      image: "",
    },
    {
      id: 3,
      nom: "Hyundai Accent",
      prix: "30 000 FCFA",
      categorie: "Économique",
      image: "",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <BarreNavigation />

      {/* --- Section Héro --- */}
      <header className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-primary mb-6">
          La liberté de rouler, <br />
          <span className="text-secondary">en toute simplicité.</span>
        </h1>
        <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
          Découvrez notre large gamme de véhicules pour tous vos déplacements à
          Dakar et partout au Sénégal.
        </p>
        <button className="bg-primary text-white px-10 py-4 rounded-lg text-lg font-bold shadow-xl hover:scale-105 transition">
          Voir les véhicules disponibles
        </button>
      </header>

      {/* --- 2. NOUVELLE SECTION : LISTE DES VOITURES --- */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-primary mb-8 border-l-4 border-secondary pl-4">
          Nos Véhicules Disponibles
        </h2>

        {/* Grille responsive : 1 colonne sur mobile, 3 sur ordi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {voitures.map((voiture) => (
            <CarteVoiture
              key={voiture.id}
              nom={voiture.nom}
              prix={voiture.prix}
              categorie={voiture.categorie}
              image={voiture.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
