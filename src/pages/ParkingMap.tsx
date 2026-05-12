import React, { useState } from "react";
import { Info, CheckCircle, XCircle, X } from "lucide-react";
import toyotaImg from "../assets/toyota.jpeg";

interface Space {
  id: number;
  isOccupied: boolean;
  carPlate?: string;
  owner?: string;
}

const ParkingMap: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [spaces, setSpaces] = useState<Space[]>(
    Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      isOccupied: false,
    })),
  );

  // Fonction pour enregistrer la voiture
  const handleRegisterCar = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    if (selectedSpace) {
      const updatedSpaces = spaces.map((s) =>
        s.id === selectedSpace.id
          ? {
              ...s,
              isOccupied: true,
              carPlate: formData.get("plate") as string,
              owner: formData.get("owner") as string,
            }
          : s,
      );
      setSpaces(updatedSpaces);
      setSelectedSpace(null); // Fermer la modale
    }
  };

  return (
    <div className="relative space-y-6">
      <h1 className="text-2xl font-bold text-[#1e293b]">
        Gestion des Emplacements
      </h1>

      {/* Grille de Parking */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {spaces.map((space) => (
          <div
            key={space.id}
            onClick={() => !space.isOccupied && setSelectedSpace(space)}
            className={`relative h-32 flex flex-col items-center justify-center rounded-xl border-2 transition-all cursor-pointer ${
              space.isOccupied
                ? "border-red-200 bg-red-50"
                : "border-green-200 bg-green-50 hover:border-[#3b82f6] hover:scale-105"
            }`}
          >
            {space.isOccupied ? (
              <div className="flex flex-col items-center">
                <img
                  src={toyotaImg}
                  alt="Toyota"
                  className="w-16 h-10 object-contain mb-1"
                />
                <span className="text-[9px] font-bold text-gray-600">
                  {space.carPlate}
                </span>
              </div>
            ) : (
              <CheckCircle size={24} className="text-green-500 opacity-40" />
            )}
            <span className="absolute top-1 left-2 text-[10px] font-black text-[#1e293b]">
              #{space.id}
            </span>
          </div>
        ))}
      </div>

      {/* --- MODALE DU FORMULAIRE --- */}
      {selectedSpace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-[#1e293b] p-4 text-white flex justify-between items-center">
              <h2 className="font-bold">
                Enregistrer un véhicule - Place #{selectedSpace.id}
              </h2>
              <button onClick={() => setSelectedSpace(null)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleRegisterCar} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom du Propriétaire
                </label>
                <input
                  name="owner"
                  type="text"
                  required
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none"
                  placeholder="Ex: Youssouf Bah"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de Plaque
                </label>
                <input
                  name="plate"
                  type="text"
                  required
                  className="w-full border border-gray-100 p-2 rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none"
                  placeholder="Ex: DK-1234-AB"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Modèle du véhicule
                </label>
                <select className="w-full border border-gray-300 p-2 rounded-lg outline-none">
                  <option>Toyota Corolla</option>
                  <option>Toyota Prado</option>
                  <option>Autre</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3b82f6] text-white font-bold py-3 rounded-lg hover:bg-[#1e293b] transition-colors mt-4"
              >
                Confirmer l'occupation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParkingMap;
