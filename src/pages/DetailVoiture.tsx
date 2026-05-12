import { useParams, useNavigate } from "react-router-dom";
import { Calendar, ShieldCheck, Fuel, Gauge, ArrowLeft } from "lucide-react";
import { voitures } from "./LandingPage";

const DetailVoiture = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // On cherche la voiture dans le tableau exporté de LandingPage
  const voitureSelectionnee = voitures.find((v) => v.id === Number(id));
  if (!voitureSelectionnee) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-800">
          Véhicule introuvable
        </h2>
        <button
          onClick={() => navigate("/")}
          className="text-blue-500 hover:underline mt-4"
        >
          Retourner à l'accueil
        </button>
      </div>
    );
  }

  const handleLocationFinale = () => {
    // Vérification du localStorage pour simuler la connexion
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Veuillez vous connecter pour finaliser votre location.");
      navigate("/connexion");
    } else {
      // Si connecté, on simule le succès
      alert(
        `Félicitations ! Votre demande pour la ${voitureSelectionnee.nom} a été enregistrée avec succès.`,
      );
      navigate("/");
    }
  };

  return (
    <div className="pt-32 pb-20 px-8 max-w-6xl mx-auto min-h-screen font-sans">
      {/* Bouton Retour */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-[#3b82f6] mb-8 transition-colors font-bold uppercase text-xs tracking-widest"
      >
        <ArrowLeft size={16} /> Retour à la flotte
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* --- COLONNE GAUCHE : IMAGE --- */}
        <div className="rounded-[40px] overflow-hidden shadow-2xl bg-white border border-gray-100 group">
          <img
            src={voitureSelectionnee.image}
            alt={voitureSelectionnee.nom}
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* --- COLONNE DROITE : INFOS --- */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="bg-blue-50 text-[#3b82f6] px-4 py-1.5 rounded-full font-black uppercase text-[10px] tracking-[0.2em]">
              {voitureSelectionnee.categorie}
            </span>
            <h1 className="text-5xl font-black text-[#1e293b] mt-4 tracking-tighter">
              {voitureSelectionnee.nom}
            </h1>
          </div>

          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-4xl font-black text-[#3b82f6]">
              {voitureSelectionnee.prix}
            </span>
            <span className="text-gray-400 font-bold uppercase text-xs">
              / Journée
            </span>
          </div>

          <div className="bg-gray-50 p-6 rounded-3xl mb-8 border border-gray-100">
            <p className="text-gray-500 leading-relaxed italic">
              "Profitez d'un véhicule récent, climatisé et parfaitement
              entretenu. Chez PROMOVE, nous nous engageons à vous fournir une
              expérience de conduite sans souci à Dakar et partout au Sénégal.
              Assurance tous risques incluse."
            </p>
          </div>

          {/* Caractéristiques techniques simulées */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl">
              <div className="bg-blue-50 p-2 rounded-lg text-[#3b82f6]">
                <Fuel size={18} />
              </div>
              <span className="text-sm font-bold text-[#1e293b]">
                Hybride / Diesel
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl">
              <div className="bg-blue-50 p-2 rounded-lg text-[#3b82f6]">
                <Gauge size={18} />
              </div>
              <span className="text-sm font-bold text-[#1e293b]">
                Automatique
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl">
              <div className="bg-blue-50 p-2 rounded-lg text-[#3b82f6]">
                <ShieldCheck size={18} />
              </div>
              <span className="text-sm font-bold text-[#1e293b]">
                Assurance Incluse
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl">
              <div className="bg-blue-50 p-2 rounded-lg text-[#3b82f6]">
                <Calendar size={18} />
              </div>
              <span className="text-sm font-bold text-[#1e293b]">
                Dispo immédiate
              </span>
            </div>
          </div>

          {/* Bouton d'action final */}
          <button
            onClick={handleLocationFinale}
            className="w-full bg-[#3b82f6] hover:bg-[#1e293b] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-100 transform hover:-translate-y-1 active:scale-95"
          >
            Louer maintenant
          </button>

          <p className="text-center text-[10px] text-gray-400 mt-4 font-bold uppercase tracking-widest">
            Aucun frais de dossier caché · Paiement à la livraison
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailVoiture;
