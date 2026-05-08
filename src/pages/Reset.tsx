import { Link } from "react-router-dom";

export default function Reset() {
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Plus tard, tu ajouteras ici la logique Firebase ou API
    alert("Lien de réinitialisation envoyé !");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form 
        onSubmit={handleReset}
        className="bg-white p-8 rounded-xl shadow-lg w-96 border-t-4 border-[#3b82f6]"
      >
        <h2 className="text-2xl mb-2 text-center font-bold text-[#1e293b]">
          Mot de passe oublié ?
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Entrez votre email pour recevoir un lien de récupération.
        </p>

        <input
          type="email"
          placeholder="Votre email"
          required
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none transition"
        />

        <button 
          type="submit"
          className="bg-[#3b82f6] hover:bg-[#1e293b] text-white font-bold p-3 w-full rounded-lg transition-colors shadow-md"
        >
          Réinitialiser
        </button>

        <p className="text-center mt-5">
          <Link to="/" className="text-[#3b82f6] hover:text-[#1e293b] text-sm font-medium transition">
            ← Retour à la connexion
          </Link>
        </p>
      </form>
    </div>
  );
}