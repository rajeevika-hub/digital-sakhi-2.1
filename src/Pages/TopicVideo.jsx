import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseData from "../data/CourseData";

export default function VideoPage() {
  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();

  // 1. सही मॉड्यूल ढूंढना (String conversion के साथ ताकि error न आए)
  const module = courseData.find(
    (m) => String(m.id) === `module-${moduleId}` || String(m.id) === moduleId
  );

  // 2. सही टॉपिक ढूंढना
  const topic = module?.topics.find(
    (t) => String(t.id) === String(topicId)
  );

  // YouTube पर वीडियो खोलने का फंक्शन
  const openYouTube = (url) => {
    if (!url) {
      alert("वीडियो लिंक उपलब्ध नहीं है!");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer"); 
  };

  // अगर डेटा न मिले तो एरर मैसेज
  if (!module || !topic) {
    return (
      <div className="pt-24 text-center text-red-500 text-lg font-bold">
        ❌ टॉपिक या वीडियो नहीं मिला! <br />
        <button onClick={() => navigate(-1)} className="text-blue-500 underline mt-4">
          वापस जाएं
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-24 pb-24 bg-cover bg-center relative"
      style={{ backgroundImage: "var(--bg-image)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1
            className="text-2xl md:text-3xl font-bold"
            style={{ color: "var(--primary-color)" }}
          >
            {topic.title}
          </h1>
          <p className="text-gray-700 mt-2">
            वीडियो देखकर सीखें और आगे बढ़ें 🌸
          </p>
        </div>

        {/* Video Button Section */}
        <div className="bg-white/90 rounded-[28px] shadow-xl p-8 md:p-12 text-center">
          <div 
            className="flex flex-col justify-center items-center h-64 rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 shadow-inner"
          >
            <div className="mb-4 text-5xl">📺</div>
            <p className="mb-6 text-gray-600 font-medium">पढ़ने के लिए नीचे दिए गए बटन पर क्लिक करें</p>
            
            <button
              onClick={() => openYouTube(topic.videoUrl)}
              className="
                px-10 py-4 rounded-full font-bold text-lg
                text-white shadow-lg
                transition transform active:scale-95 hover:scale-105 hover:opacity-90
              "
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              ▶️ YouTube पर टॉपिक वीडियो देखें
            </button>
          </div>

          {/* Action Navigation Buttons */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <button
              onClick={() => navigate(`/module/${moduleId}/topic/${topicId}/notes`)}
              className="py-3 rounded-full font-semibold bg-white shadow-md border border-gray-100 transition active:scale-95 hover:bg-gray-50"
              style={{ color: "var(--primary-color)" }}
            >
              📝 नोट्स पढ़ें
            </button>

            <button
              onClick={() => navigate(`/module/${moduleId}/topic/${topicId}/quiz`)}
              className="py-3 rounded-full font-semibold bg-white shadow-md border border-gray-100 transition active:scale-95 hover:bg-gray-50"
              style={{ color: "var(--primary-color)" }}
            >
              ❓ अभ्यास प्रश्न
            </button>

            <button
              onClick={() => navigate(`/module/${moduleId}`)}
              className="py-3 rounded-full font-semibold text-white shadow-md transition active:scale-95 hover:opacity-90"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              ← सभी विषय
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
