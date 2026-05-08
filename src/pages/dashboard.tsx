import React, { useState } from 'react';
import { 
  Car, 
  CheckCircle,
  Clock,
  Search,
  Bell
} from 'lucide-react';

interface Reservation {
  id: string;
  car: string;
  date: string;
  price: string;
  status: 'Confirmé' | 'En attente' | 'Terminé';
}

const Dashboard: React.FC = () => {
  const [reservations] = useState<Reservation[]>([
    { id: '1', car: 'Toyota Prado', date: '12 Mai 2026', price: '45.000 FCFA', status: 'Confirmé' },
    { id: '2', car: 'Range Rover Evoque', date: '15 Mai 2026', price: '75.000 FCFA', status: 'En attente' },
    { id: '3', car: 'Mercedes Classe C', date: '01 Mai 2026', price: '60.000 FCFA', status: 'Terminé' },
  ]);

  return (
    <div className="flex flex-col space-y-6">
      {/* 1. Navbar interne (Search + Profil) */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <div className="flex items-center bg-white border border-gray-200 px-3 py-2 rounded-lg w-full md:w-96 shadow-sm">
          <Search size={18} className="text-gray-400" />
          <input type="text" placeholder="Rechercher..." className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full outline-none" />
        </div>
        
        <div className="flex items-center space-x-4 self-end">
          <button className="relative p-2 text-gray-400 hover:bg-white hover:shadow-sm rounded-full transition">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#3b82f6] rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2 border-l pl-4">
            <div className="w-9 h-9 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold shadow-sm">
              YB
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[#1e293b]">Youssouf Bah</p>
              <p className="text-xs text-gray-500">Administrateur</p>
            </div>
          </div>
        </div>
      </header>

      <h1 className="text-2xl font-bold text-[#1e293b]">Mon Tableau de Bord</h1>

      {/* 2. Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#3b82f6]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Locations Actives</p>
              <h3 className="text-3xl font-bold text-[#1e293b] mt-1">1</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg text-[#3b82f6]">
              <Car size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total Dépensé</p>
              <h3 className="text-3xl font-bold text-[#1e293b] mt-1">180.000 <span className="text-sm font-normal text-gray-400">F</span></h3>
            </div>
            <div className="p-2 bg-green-50 rounded-lg text-green-500 text-xl font-bold">F</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">À venir</p>
              <h3 className="text-3xl font-bold text-[#1e293b] mt-1">2</h3>
            </div>
            <div className="p-2 bg-amber-50 rounded-lg text-amber-500">
              <Clock size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Tableau */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="font-bold text-[#1e293b]">Historique des réservations</h2>
          <button className="text-xs font-bold text-[#3b82f6] hover:underline uppercase tracking-tighter">Voir tout</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-[11px] uppercase tracking-widest font-bold">
              <tr>
                <th className="px-6 py-4">Véhicule</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Prix</th>
                <th className="px-6 py-4">Statut</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {reservations.map((res) => (
                <tr key={res.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">{res.car}</td>
                  <td className="px-6 py-4 text-gray-600">{res.date}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{res.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold 
                      ${res.status === 'Confirmé' ? 'bg-blue-50 text-[#3b82f6]' : 
                        res.status === 'Terminé' ? 'bg-green-50 text-green-600' : 
                        'bg-amber-50 text-amber-600'}`}>
                      {res.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#3b82f6] font-bold hover:text-[#1e293b] transition-colors">Gérer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;