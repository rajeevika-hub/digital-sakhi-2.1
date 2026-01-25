import { useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState("hi");

  const changeLanguage = (newLang) => {
    const select = document.querySelector(".goog-te-combo");
    if (!select) {
      alert("Translator loading... 2 sec wait karo");
      return;
    }

    select.value = newLang;
    select.dispatchEvent(new Event("change"));
    setLang(newLang);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold">हिंदी</span>

      {/* SWITCH */}
      <div
        onClick={() => changeLanguage(lang === "hi" ? "en" : "hi")}
        className="w-16 h-8 flex items-center bg-linear-to-r from-gray-700 to-blue-900 rounded-full p-1 cursor-pointer shadow-lg transition-all"
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
            lang === "en" ? "translate-x-8" : ""
          }`}
        ></div>
      </div>

      <span className="text-sm font-semibold">EN</span>
    </div>
  );
}
