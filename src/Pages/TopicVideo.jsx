import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseData from "../data/CourseData";


const getEmbedUrl = (url) => {
  if (!url) return "";
  let videoId = "";

  if (url.includes("youtu.be")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  } else if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1]?.split("&")[0];
  } else if (url.includes("youtube.com/embed")) {
    return url;
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

export default function VideoPage() {
  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();


  const module = courseData.find(
    (m) => String(m.id) === `module-${moduleId}` || String(m.id) === moduleId
  );

  const topic = module?.topics.find(
    (t) => String(t.id) === String(topicId)
  );

  const openYouTube = (url) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  if (!module || !topic) {
    return (
      <div className="pt-24 text-center text-red-500 text-lg">
        ❌ टॉपिक नहीं मिला! (Module: {moduleId}, Topic: {topicId})
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-24 pb-24 bg-cover bg-center relative"
      style={{ backgroundImage: "var(--bg-image)" }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--primary-color)" }}>
            {topic.title}
          </h1>
          <p className="text-gray-700 mt-2">वीडियो देखकर सीखें और आगे बढ़ें 🌸</p>
        </div>

        {/* Video Card */}
        <div className="bg-white/90 rounded-[28px] shadow-xl p-5 md:p-6">
          
          {/* 2. UI Fix: बटन के बजाय actual Video दिखाएं (Optional but Recommended) */}
          <div className="relative overflow-hidden w-full rounded-2xl shadow-md bg-black" style={{ aspectRatio: "16/9" }}>
            {topic.videoUrl ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={getEmbedUrl(topic.videoUrl)}
                title={topic.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-white p-4">
                <p className="mb-4">वीडियो उपलब्ध नहीं है</p>
                <button
                  onClick={() => openYouTube(topic.videoUrl)}
                  className="px-6 py-2 rounded-full font-bold bg-red-600 hover:bg-red-700 transition"
                >
                  YouTube पर देखें
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <button
              onClick={() => navigate(`/module/${moduleId}/topic/${topicId}/notes`)}
              className="py-3 rounded-full font-semibold bg-white shadow transition active:scale-95 hover:shadow-lg"
              style={{ color: "var(--primary-color)" }}
            >
              📝 नोट्स पढ़ें
            </button>

            <button
              onClick={() => navigate(`/module/${moduleId}/topic/${topicId}/quiz`)}
              className="py-3 rounded-full font-semibold bg-white shadow transition active:scale-95 hover:shadow-lg"
              style={{ color: "var(--primary-color)" }}
            >
              ❓ अभ्यास प्रश्न
            </button>

            <button
              onClick={() => navigate(`/module/${moduleId}`)}
              className="py-3 rounded-full font-semibold text-white shadow transition active:scale-95 hover:shadow-lg"
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
