import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseData from "../data/CourseData";
import BackButton from "../components/BackButton";

export default function ModulePage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const module = courseData.find(
    (m) => m.id === `module-${moduleId}`
  );

  if (!module) {
    return (
      <div className="pt-[96px] text-center text-red-500">
        Module not found
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-[96px] pb-24 bg-cover mt-8 bg-center relative"
      style={{ backgroundImage: "var(--bg-image)" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>


   

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4">
                 {/* back button */}
        <BackButton label=" ← पीछे जाएं" />

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--primary-color)" }}
          >
            {module.title}
          </h1>
          <p className="text-gray-700 mt-3">
            नीचे दिए गए विषयों में से किसी एक को चुनें
          </p>
        </div>

{/* TOPIC CARDS */}
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {module.topics.map((topic, index) => (
    <div
      key={topic.id}
      className="
        relative
        rounded-[28px]
        p-8
        shadow-lg
        transition
        hover:-translate-y-1
        hover:shadow-2xl
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            color-mix(in srgb, var(--secondary-color) 75%, white),
            #ffffff
          )
        `,
      }}
    >
      {/* 🌸 TOP NUMBER BADGE */}
      <div
        className="
          absolute -top-4 left-6
          px-4 py-1 rounded-full
          text-sm font-semibold text-white
          shadow-md
        "
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        विषय {index + 1}
      </div>

      {/* TITLE */}
      <h3 className="mt-6 text-lg font-bold text-gray-800 leading-snug">
        {topic.title}
      </h3>

      {/* DIVIDER */}
      <div
        className="w-16 h-1 rounded-full my-4"
        style={{ backgroundColor: "var(--primary-color)" }}
      ></div>

      {/* BUTTONS */}
      <div className="flex flex-col gap-3 mt-6">
        <button
          onClick={() =>
            navigate(
              `/module/${moduleId}/topic/${topic.id}/video`
            )
          }
          className="
            w-full py-3 rounded-full
            text-white font-semibold
            text-sm
            shadow
            transition active:scale-95
          "
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          ▶ वीडियो देखें
        </button>

        <button
          onClick={() =>
            navigate(
              `/module/${moduleId}/topic/${topic.id}/notes`
            )
          }
          className="
            w-full py-3 rounded-full
            text-sm font-medium
            bg-white
            shadow
            hover:bg-gray-50
            transition active:scale-95
          "
          style={{ color: "var(--primary-color)" }}
        >
          📝 नोट्स पढ़ें
        </button>

        <button
          onClick={() =>
            navigate(
              `/module/${moduleId}/topic/${topic.id}/quiz`
            )
          }
          className="
            w-full py-3 rounded-full
            text-sm font-medium
            bg-white
            shadow
            hover:bg-gray-50
            transition active:scale-95
          "
          style={{ color: "var(--primary-color)" }}
        >
          ❓ अभ्यास प्रश्न
        </button>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
}
