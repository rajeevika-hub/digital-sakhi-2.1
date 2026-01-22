import { useNavigate } from "react-router-dom";

export default function BackButton({ label = "← वापस जाएं" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        flex items-center gap-2
    
        px-4 py-2
        rounded-full
        my-8 
        bg-white
        shadow-md
        hover:shadow-lg
        border
        border-gray-200
        text-sm font-semibold
        transition
        active:scale-95
      "
      style={{ color: "var(--primary-color)" }}
    >
      {label}
    </button>
  );
}
