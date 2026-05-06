import { useNavigate } from "react-router-dom"; // Correction de l'import

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion ici
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl mb-4 text-center font-bold">Connexion</h2>

        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          required
          className="border p-2 w-full mb-3 rounded"
        />

        <button 
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition-colors"
        >
          Se connecter
        </button>
      </form> {/* Balise </form> ajoutée ici */}
    </div>
  );
}