import React, { useState } from "react";
import { FaArrowRight, FaTimes, FaStar } from "react-icons/fa";
import BackButton from "../components/BackButton";

const mentor = {
  id: "mentor",
  name: "Gaurav Sharma",
  skill: "Chief Technology Mentor",
  roleView: "Guiding the next generation of digital leaders.",
  role:
    "15+ years of experience in scalable systems, government projects and mentoring large technical teams.",
  image:
    "/images/Gaurav.jpg",
};

const members = [
  {
    id: 1,
    name: "Zaahid khan",
    skill: "Full-Stack Developer",
    roleView: "Building reliable and scalable systems.",
    role:
      "Expert in React, Node.js and modern UI systems.",
    image:
      "/images/Zahid.jpg",
  },
  {
    id: 2,
    name: "Lakshmi Jangid",
    skill: "Backend Developer",
    roleView: "Designing clean and user-friendly interfaces.",
    role:
      "Focused on accessibility and women-centric UX design.",
    image:
      "/images/Lakshmi.jpg",
  },
  {
    id: 3,
    name: "Shiva Kumar",
    skill: "UI / UX Designer",
    roleView: "Creating soft & intuitive designs.",
    role:
      "Designs interfaces especially suitable for rural & first-time users.",
    image:
      "/images/Shiva.jpg",
  },
  {
    id: 4,
    name: "Himesh ",
    skill: "Frontend Developer",
    roleView: "Strong logic, secure systems.",
    role:
      "Handles APIs, databases and authentication systems.",
    image:
      "/images/Himesh.jpg",
  },
  {
    id: 5,
    name: "Narpat",
    skill: "Frontend Developer",
    roleView: "Keeping systems fast & reliable.",
    role:
      "Deployment, performance optimization and scaling.",
    image:
      "/images/narpat.jpg",
  },
];

export default function Developers() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🌸 Infinite Soft Background Animation */}
      <div
        className="absolute inset-0 animate-pulse opacity-20"
        style={{
          background:
            "radial-gradient(circle at top, var(--secondary-color), transparent 70%)",
        }}
      />

               {/* back button */}
        <BackButton label=" ← पीछे जाएं" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== MENTOR ===== */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
          style={{ color: "var(--primary-color)" }}
        >
          Our Mentor
        </h2>

        <div className="flex justify-center mb-32">
          <div className="relative max-w-sm group">
            <div className="bg-white  rounded-3xl shadow-xl overflow-hidden">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--primary-color)" }}
                >
                  {mentor.name}
                </h3>
                <p className="text-sm text-gray-600 italic">
                  {mentor.skill}
                </p>
                <p className="text-gray-700 mt-3 text-sm">
                  “{mentor.roleView}”
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelected(mentor)}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <FaStar />
            </button>
          </div>
        </div>

        {/* ===== TEAM ===== */}
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-16"
          style={{ color: "var(--primary-color)" }}
        >
          Our Development Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {members.map((m) => (
            <div
              key={m.id}
              className="relative bg-white rounded-3xl shadow-lg overflow-hidden group hover:-translate-y-2 transition"
            >
              <img
                src={m.image}
                alt={m.name}
                className="h-60 w-full object-cover group-hover:scale-105 transition"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.skill}</p>
                <p className="text-xs text-gray-600 mt-2 italic">
                  “{m.roleView}”
                </p>
              </div>

              <button
                onClick={() => setSelected(m)}
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white shadow"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelected(null)}
          />
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <FaTimes size={24} />
            </button>

            <img
              src={selected.image}
              alt={selected.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />

            <h2
              className="text-2xl font-bold text-center"
              style={{ color: "var(--primary-color)" }}
            >
              {selected.name}
            </h2>

            <p className="text-center text-sm text-gray-500 mb-4">
              {selected.skill}
            </p>

            <p className="text-gray-700 text-sm leading-relaxed text-center">
              {selected.role}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
