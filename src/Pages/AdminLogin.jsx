import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!password) {
      alert("Please enter password");
      return;
    }

    // temporary store (later secure karenge)
    localStorage.setItem("adminPass", password);

    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px]">

        <h2 className="text-2xl font-bold text-center mb-6">
          Admin Panel
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Enter your password to continue
        </p>

        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}
