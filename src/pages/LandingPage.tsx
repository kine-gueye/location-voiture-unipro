import BarreNavigation from "../composants/BarreNavigation";
import CarteVoiture from "../composants/CarteVoiture";
import ToyotaPrado from "../assets/Voituresimg/ToyotaPrado.jpg";
import mercedes from "../assets/Voituresimg/mercedes.jpg";
import HyundaiAccent from "../assets/Voituresimg/HyundaiAccentjpg.jpg";
import ToyotaFortuner from "../assets/Voituresimg/ToyotaFortuner.jpg";
import FordExplorer from "../assets/Voituresimg/FordExplorer.jpg";
import RangeRoverVelar from "../assets/Voituresimg/RangeRoverVelar.jpg";
import HyundaiSantaFe from "../assets/Voituresimg/HyundaiSantaFe.jpg";
import KiaSportage from "../assets/Voituresimg/KiaSportage.jpg";
import ToyotaHilux from "../assets/Voituresimg/ToyotaHilux.jpg";
import AudiA6 from "../assets/Voituresimg/AudiA6.jpg";
import BMWSerie5 from "../assets/Voituresimg/BMWSerie5.jpg";
import ToyotaCamry from "../assets/Voituresimg/ToyotaCamry.jpg";
import HondaAccord from "../assets/Voituresimg/HondaAccord.jpg";
import VolkswagenPassat from "../assets/Voituresimg/VolkswagenPassat.jpg";
import KiaPicanto from "../assets/Voituresimg/KiaPicanto.jpg";
import SuzukiSwift from "../assets/Voituresimg/SuzukiSwift.jpg";
import ToyotaYaris from "../assets/Voituresimg/ToyotaYaris.jpg";
import HyundaiI10 from "../assets/Voituresimg/HyundaiI10.jpg";
import RenaultLogan from "../assets/Voituresimg/RenaultLogan.jpg";
import ToyotaHiace from "../assets/Voituresimg/ToyotaHiace.jpg";
import MercedesSprinter from "../assets/Voituresimg/MercedesSprinter.jpg";
import HyundaiH1 from "../assets/Voituresimg/HyundaiH1.jpg";
import MitsubishiL200 from "../assets/Voituresimg/MitsubishiL200.jpg";
import LEXUSLX600 from "../assets/Voituresimg/LEXUSLX600.jpg";
import heroBg from "../assets/hero-bg.jpg";

export const voitures = [
  // --- TES VOITURES ORIGINALES ---
  {
    id: 1,
    nom: "Toyota Prado",
    prix: "50 000 FCFA",
    categorie: "SUV",
    image: ToyotaPrado,
  },
  {
    id: 2,
    nom: "Mercedes Classe C",
    prix: "75 000 FCFA",
    categorie: "Luxe",
    image: mercedes,
  },
  {
    id: 3,
    nom: "Hyundai Accent",
    prix: "30 000 FCFA",
    categorie: "Économique",
    image: HyundaiAccent,
  },

  {
    id: 4,
    nom: "Toyota Fortuner",
    prix: "55 000 FCFA",
    categorie: "SUV",
    image: ToyotaFortuner,
  },
  {
    id: 5,
    nom: "Mitsubishi L200",
    prix: "45 000 FCFA",
    categorie: "Pick-up",
    image: MitsubishiL200,
  },
  {
    id: 6,
    nom: "Ford Explorer",
    prix: "60 000 FCFA",
    categorie: "SUV",
    image: FordExplorer,
  },
  {
    id: 7,
    nom: "Range Rover Velar",
    prix: "120 000 FCFA",
    categorie: "Luxe",
    image: RangeRoverVelar,
  },
  {
    id: 8,
    nom: "Hyundai Santa Fe",
    prix: "45 000 FCFA",
    categorie: "SUV",
    image: HyundaiSantaFe,
  },
  {
    id: 9,
    nom: "Kia Sportage",
    prix: "40 000 FCFA",
    categorie: "SUV",
    image: KiaSportage,
  },
  {
    id: 10,
    nom: "Toyota Hilux",
    prix: "50 000 FCFA",
    categorie: "Pick-up",
    image: ToyotaHilux,
  },

  {
    id: 11,
    nom: "BMW Série 5",
    prix: "90 000 FCFA",
    categorie: "Luxe",
    image: BMWSerie5,
  },
  {
    id: 12,
    nom: "Audi A6",
    prix: "85 000 FCFA",
    categorie: "Luxe",
    image: AudiA6,
  },
  {
    id: 13,
    nom: "Toyota Camry",
    prix: "45 000 FCFA",
    categorie: "Berline",
    image: ToyotaCamry,
  },
  {
    id: 14,
    nom: "Honda Accord",
    prix: "40 000 FCFA",
    categorie: "Berline",
    image: HondaAccord,
  },
  {
    id: 15,
    nom: "Volkswagen Passat",
    prix: "40 000 FCFA",
    categorie: "Berline",
    image: VolkswagenPassat,
  },

  {
    id: 16,
    nom: "Kia Picanto",
    prix: "20 000 FCFA",
    categorie: "Économique",
    image: KiaPicanto,
  },
  {
    id: 17,
    nom: "Suzuki Swift",
    prix: "22 000 FCFA",
    categorie: "Économique",
    image: SuzukiSwift,
  },
  {
    id: 18,
    nom: "Toyota Yaris",
    prix: "25 000 FCFA",
    categorie: "Économique",
    image: ToyotaYaris,
  },
  {
    id: 19,
    nom: "Hyundai i10",
    prix: "20 000 FCFA",
    categorie: "Économique",
    image: HyundaiI10,
  },
  {
    id: 20,
    nom: "Renault Logan",
    prix: "25 000 FCFA",
    categorie: "Économique",
    image: RenaultLogan,
  },

  {
    id: 21,
    nom: "Toyota Hiace",
    prix: "65 000 FCFA",
    categorie: "Transport",
    image: ToyotaHiace,
  },
  {
    id: 22,
    nom: "Mercedes Sprinter",
    prix: "95 000 FCFA",
    categorie: "Transport",
    image: MercedesSprinter,
  },
  {
    id: 23,
    nom: "Hyundai H1",
    prix: "60 000 FCFA",
    categorie: "Transport",
    image: HyundaiH1,
  },
  {
    id: 24,
    nom: "LEXUS LX600",
    prix: "100 000 FCFA",
    categorie: "Luxe",
    image: LEXUSLX600,
  },
];

const LandingPage = () => {
  const scrollToVehicules = () => {
    const element = document.getElementById("flotte");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <BarreNavigation />

      {/* --- Section Héro avec Background Image --- */}
      <header className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        {/* 2. L'image de fond avec styles Inline */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`, // Utilisation de l'image importée
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* 3. Overlay sombre et flou pour la lisibilité */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        {/* 4. Contenu textuel par-dessus */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
              La liberté de rouler, <br />
              <span className="text-[#3b82f6]">en toute simplicité.</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 font-medium">
              Découvrez notre large gamme de véhicules pour tous vos déplacements
              à Dakar et partout au Sénégal avec PROMOVE.
            </p>
            <button
              onClick={scrollToVehicules}
              className="bg-[#3b82f6] text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#3b82f6] transition-all transform hover:scale-105 shadow-2xl text-lg"
            >
              Voir les véhicules disponibles
            </button>
          </div>
        </div>
      </header>

      {/* --- SECTION : LISTE DES VOITURES --- */}
      <section className="py-20 px-8 max-w-7xl mx-auto" id="flotte">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-black text-[#1e293b]">
            Notre Flotte à Dakar
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            Découvrez notre sélection de véhicules disponibles immédiatement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {voitures.map((voiture) => (
            <CarteVoiture
              key={voiture.id}
              id={voiture.id}
              nom={voiture.nom}
              image={voiture.image}
              prix={voiture.prix}
              categorie={voiture.categorie}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
