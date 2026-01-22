import React from "react";
import { useNavigate } from "react-router-dom";
const modules = [
  "डिजिटल मार्केटिंग का परिचय",
  "ब्रांडिंग की समझ",
  "फोटो और वीडियो कंटेंट",
  "WhatsApp Business",
  "Instagram Business",
  "ऑनलाइन सेलिंग प्लेटफॉर्म",
];

// 🎨 Soft non-linear shade pattern
const shadePattern = [
  "var(--shade-2)",
  "var(--shade-3)",
  "var(--shade-2)",
  "var(--shade-4)", // 👈 Module-4 special
  "var(--shade-3)",
  "var(--shade-2)",
];

export default function ModuleSidebar() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full max-w-[600px] rounded-3xl p-4"
      style={{
        background: "linear-gradient(180deg, var(--shade-1), #ffffff, opacity(0.6))",
      }}
    >
      {/* HEADER */}
      <div
        className="px-5 py-4 rounded-2xl text-white font-semibold mb-4 text-lg"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        Training Modules
      </div>

      {/* MODULE LIST */}
      <div className="space-y-3">
        {modules.map((title, index) => {
          const isSpecial = index === 3; // Module - 4

          return (
            <div
              key={index}
              onClick={() => navigate(`/module/${index + 1}`)}
              className="
                rounded-2xl px-5 py-5
                flex items-center justify-between
                h-28
                cursor-pointer
                transition
                hover:shadow-md
                hover:-translate-y-[1px]
              "
              style={{
                backgroundColor: shadePattern[index],
              }}
            >
              {/* LEFT TEXT */}
              <div>
                <div
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: isSpecial
                      ? "var(--shade-5)"
                      : "var(--primary-color)",
                  }}
                >
                  Module - {index + 1}
                </div>

                <div
                  className="text-base leading-snug"
                  style={{
                    color: isSpecial ? "#1f2937" : "#374151",
                  }}
                >
                  {title}
                </div>
              </div>

              {/* ARROW */}
              <div
                className="text-xl font-bold"
                style={{
                  color: isSpecial
                    ? "var(--shade-5)"
                    : "var(--primary-color)",
                }}
              >
                ❯
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
