import { Link } from "react-router-dom";

export default function Reset() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-center">
          Mot de passe oublié
        </h2>

        <input
          type="email"
          placeholder="Votre email"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-blue-600 text-white p-2 w-full">
          Réinitialiser
        </button>

        <p className="text-center mt-3">
          <Link to="/" className="text-blue-500">
            Retour connexion
          </Link>
        </p>
      </form>
    </div>
  );
}