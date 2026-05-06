import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // simulation inscription
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl mb-4 text-center">Inscription</h2>

        <input
          type="text"
          placeholder="Nom"
          className="border p-2 w-full mb-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-green-500 text-white p-2 w-full">
          S'inscrire
        </button>

        <p className="text-center mt-3">
          Déjà un compte ?{" "}
          <Link to="/" className="text-blue-500">
            Se connecter
          </Link>
        </p>
      </form>
    </div>
  );
}