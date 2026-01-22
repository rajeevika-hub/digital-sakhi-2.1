import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseData from "../data/CourseData";
import BackButton from "../components/BackButton";

export default function NotesPage() {
  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const module = courseData.find((m) => m.id === `module-${moduleId}`);

  const topic = module?.topics.find((t) => t.id === topicId);

  if (!module || !topic) {
    return (
      <div className="pt-24 text-center text-red-500">Notes not found</div>
    );
  }

  const speakNotes = () => {
  if (isSpeaking) {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    return;
  }

  if (!topic?.notes) return;

  const utterance = new SpeechSynthesisUtterance(topic.notes);
  utterance.lang = "hi-IN";
  utterance.rate = 0.9;

  utterance.onend = () => {
    setIsSpeaking(false);
  };

  setIsSpeaking(true);
  window.speechSynthesis.speak(utterance);
};


  return (
    <div
      className="min-h-screen mt-8 pt-24 pb-24 bg-cover bg-center relative"
      style={{ backgroundImage: "var(--bg-image)" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/80-opacity-20 backdrop-blur-sm"></div>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-4">

        {/* back button */}
        <BackButton label=" ← पीछे जाएं" />

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1
            className="text-2xl md:text-3xl font-bold"
            style={{ color: "var(--primary-color)" }}
          >
            {topic.title}
          </h1>
          <p className="text-gray-700 mt-2">
            नीचे दिए गए नोट्स को ध्यान से पढ़ें 🌸
          </p>
        </div>

        {/* OPTIONS CARD */}
        <div
          className="
            bg-white/90 backdrop-blur
            rounded-[28px]
            shadow-xl
            p-8
            mb-10
          "
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href={topic.pdfUrl}
              download
              className={`
    block rounded-2xl p-6 text-center shadow transition
    ${topic.pdfUrl ? "hover:-translate-y-1" : "opacity-50 pointer-events-none"}
  `}
              style={{
                background:
                  "linear-gradient(180deg, var(--secondary-color), #ffffff)",
              }}
            >
              <div className="text-4xl mb-3">📄</div>{" "}
              <h3 className="font-bold text-lg mb-2"> PDF डाउनलोड करें </h3>{" "}
              <p className="text-sm text-gray-600">
                {" "}
                मोबाइल में सेव करके कभी भी पढ़ें{" "}
              </p>{" "}
            </a>

            {/* WRITTEN NOTES */}
            <div
              className="
                rounded-2xl
                p-6
                text-center
                shadow
              "
              style={{
                background: "linear-gradient(180deg, #ffffff, #fff7fb)",
              }}
            >
              <div className="text-4xl mb-3">📝</div>
              <h3 className="font-bold text-lg mb-2">लिखे हुए नोट्स</h3>
              <p className="text-sm text-gray-600">
                नीचे दिए गए नोट्स को सीधे पढ़ें
              </p>
            </div>
          </div>
        </div>

        {/* WRITTEN NOTES SECTION */}
        <div
          className="
            bg-white
            rounded-[28px]
            shadow-lg
            p-8
            leading-relaxed
          "
        >
          {/* SPEAK BUTTON */}
          <button
  onClick={speakNotes}
  className="mb-4 flex items-center gap-2  text-white px-4 py-2 rounded-lg shadow"
  style={{
    background: 'var(--primary-color)'
  }}
>
  {isSpeaking ? "⏹ रोकें" : "🔊 नोट्स सुनें"}
</button>


          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "var(--primary-color)" }}
          >
            📘 विषय विवरण
          </h2>

          <p className="text-gray-700 text-base whitespace-pre-line">
            {topic.notes}
          </p>
        </div>

        {/* NAV BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() =>
              navigate(`/module/${moduleId}/topic/${topicId}/video`)
            }
            className="
              px-6 py-3 rounded-full
              bg-white shadow
              font-semibold
            "
            style={{ color: "var(--primary-color)" }}
          >
            ▶ वीडियो देखें
          </button>

          <button
            onClick={() => navigate(`/module/${moduleId}`)}
            className="
              px-6 py-3 rounded-full
              text-white shadow
              font-semibold
            "
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            ← सभी विषय
          </button>
        </div>
      </div>
    </div>
  );
}
