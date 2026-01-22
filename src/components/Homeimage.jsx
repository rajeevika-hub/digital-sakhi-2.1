import React, { useEffect, useState } from "react";

const images = [
  "/images/sakhi1.jpg",
  "/images/sakhi2.jpg",
  "/images/sakhi3.jpg",
  "/images/sakhi4.png",
  "/images/sakhi5.jpg",
  "/images/sakhi6.png",
  "/images/sakhi7.png",
];

export default function RightWelcomePanel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-white/60 backdrop-blur rounded-3xl shadow-xl px-8 py-10 max-w-3xl w-full text-center">


        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Welcome to{" "}
          <span style={{ color: "var(--primary-color)" }}>
            Digital सखी 2.0
          </span>
        </h1>

        <p className="text-gray-700 text-sm mb-6">
          ग्रामीण महिलाओं के लिए डिजिटल मार्केटिंग एवं ऑनलाइन व्यवसाय प्रशिक्षण
        </p>

        <div className="relative overflow-hidden rounded-xl w-full h-64 md:h-80">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className="w-full h-64 md:h-80 object-cover flex shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition ${
                current === i ? "bg-var(--primary-color)" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-700">
          <span>📱 डिजिटल मार्केटिंग</span>
          <span>🎨 ब्रांडिंग</span>
          <span>📷 फोटो / वीडियो</span>
        </div>

        
        <button
          className="mt-8 px-8 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          ▶ Start Learning
        </button>
      </div>
    </div>
  );
}
