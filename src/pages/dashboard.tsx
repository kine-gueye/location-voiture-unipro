import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Car, 
  History, 
  User, 
  LogOut, 
  Search, 
  Bell,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

// Types pour nos données de location
interface Reservation {
  id: string;
  car: string;
  date: string;
  price: string;
  status: 'Confirmé' | 'En attente' | 'Terminé';
}

const Dashboard: React.FC = () => {
  // Simulation de données dynamiques (Logique de données - Bloc 2)
  const [reservations] = useState<Reservation[]>([
    { id: '1', car: 'Toyota Prado', date: '12 Mai 2026', price: '45.000 FCFA', status: 'Confirmé' },
    { id: '2', car: 'Range Rover Evoque', date: '15 Mai 2026', price: '75.000 FCFA', status: 'En attente' },
    { id: '3', car: 'Mercedes Classe C', date: '01 Mai 2026', price: '60.000 FCFA', status: 'Terminé' },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* 1. Sidebar - Couleur Bleu Nuit (#1e293b) */}
      <aside className="w-64 bg-[#1e293b] text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-700">
          Unipro<span className="text-[#3b82f6]">Car</span>
        </div>
        
        <nav className="flex-1 mt-6 px-4 space-y-2">
          <a href="#" className="flex items-center space-x-3 p-3 bg-[#3b82f6] rounded-lg transition">
            <LayoutDashboard size={20} />
            <span>Tableau de bord</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded-lg transition">
            <Car size={20} />
            <span>Mes Locations</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded-lg transition">
            <History size={20} />
            <span>Historique</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded-lg transition">
            <User size={20} />
            <span>Profil</span>
          </a>
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button className="flex items-center space-x-3 p-3 text-red-400 hover:bg-slate-700 w-full rounded-lg transition">
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* 2. Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Navbar supérieure */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">
          <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md w-96">
            <Search size={18} className="text-gray-400" />
            <input type="text" placeholder="Rechercher une réservation..." className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#3b82f6] rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2 border-l pl-4">
              <div className="w-8 h-8 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold">
                YB
              </div>
              <span className="text-sm font-medium text-gray-700">Youssouf Bah</span>
            </div>
          </div>
        </header>

        {/* Contenu du Dashboard */}
        <div className="p-8">
          <h1 className="text-2xl font-bold text-[#1e293b] mb-6">Mon Tableau de Bord</h1>

          {/* Cartes de statistiques rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#3b82f6]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">Locations Actives</p>
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
                  <p className="text-sm text-gray-500 uppercase font-semibold">Total Dépensé</p>
                  <h3 className="text-3xl font-bold text-[#1e293b] mt-1">180.000</h3>
                </div>
                <div className="p-2 bg-green-50 rounded-lg text-green-500">
                  <span className="font-bold text-xl">F</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">Réservations à venir</p>
                  <h3 className="text-3xl font-bold text-[#1e293b] mt-1">2</h3>
                </div>
                <div className="p-2 bg-amber-50 rounded-lg text-amber-500">
                  <Clock size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Tableau des réservations (Modèle Figma adapté) */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="font-bold text-[#1e293b]">Historique des réservations</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                  <tr>
                    <th className="px-6 py-4 font-medium">Véhicule</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Prix</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                    <th className="px-6 py-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reservations.map((res) => (
                    <tr key={res.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-medium text-gray-900">{res.car}</td>
                      <td className="px-6 py-4 text-gray-600">{res.date}</td>
                      <td className="px-6 py-4 text-gray-600">{res.price}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                          ${res.status === 'Confirmé' ? 'bg-blue-100 text-[#3b82f6]' : 
                            res.status === 'Terminé' ? 'bg-green-100 text-green-800' : 
                            'bg-amber-100 text-amber-800'}`}>
                          {res.status === 'Confirmé' && <CheckCircle size={12} className="mr-1" />}
                          {res.status === 'En attente' && <Clock size={12} className="mr-1" />}
                          {res.status === 'Terminé' && <CheckCircle size={12} className="mr-1" />}
                          {res.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-[#3b82f6] hover:underline text-sm font-medium">Détails</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;