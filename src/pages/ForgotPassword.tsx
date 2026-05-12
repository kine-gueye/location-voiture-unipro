import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault(); // EMPECHE LE RAFRAICHISSEMENT DE LA PAGE

    alert("Mot de passe réinitialisé ! Veuillez vérifier votre email.");

    // On renvoie l'utilisateur vers la page de connexion
    navigate("/connexionclient");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Mot de passe oublié
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Entrez votre email pour réinitialiser votre mot de passe
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Adresse Email</label>

            <input
              type="email"
              placeholder="exemple@gmail.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Réinitialiser
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
