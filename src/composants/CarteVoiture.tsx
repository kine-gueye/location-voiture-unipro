interface VoitureProps {
  nom: string;
  image: string;
  prix: string;
  categorie: string;
}

const CarteVoiture = ({ nom, image, prix, categorie }: VoitureProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {/* On mettra une vraie image plus tard */}
        <span className="text-gray-400">Photo {nom}</span>
      </div>
      <div className="p-5">
        <span className="text-secondary text-sm font-bold uppercase">{categorie}</span>
        <h3 className="text-primary text-xl font-bold mt-1">{nom}</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600 font-bold">{prix} <small>/ jour</small></span>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-secondary transition">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarteVoiture;