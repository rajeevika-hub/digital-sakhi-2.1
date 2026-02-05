import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseData from "../data/CourseData";

/* 🔹 YouTube URL → Embed URL Converter */
const getEmbedUrl = (url) => {
  if (!url) return "";

  // youtu.be/VIDEO_ID
  if (url.includes("youtu.be")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }


  if (url.includes("youtube.com/embed")) {
    return url;
  }

  return url;
};

export default function VideoPage() {
    const openYouTube = (url) => {
  if (!url) return;
  window.open(url, "_blank"); 
};


  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();

  const module = courseData.find(
    (m) => m.id === `module-${moduleId}`
  );

  const topic = module?.topics.find(
    (t) => t.id === topicId
  );

  if (!module || !topic) {
    return (
      <div className="pt-24 text-center text-red-500 text-lg">
        ❌ Video not found
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

        {/* Video Card */}
        <div className="bg-white/90 rounded-[28px] shadow-xl p-5 md:p-6">

<div className="flex justify-center items-center h-56 md:h-64 rounded-2xl bg-gray-100 shadow-md">
  <button
    onClick={() => openYouTube(topic.videoUrl)}
    className="
      px-8 py-4 rounded-full font-bold text-lg
      text-white
      transition active:scale-95 hover:opacity-90
    "
    style={{ backgroundColor: "var(--primary-color)" }}
  >
    ▶️ YouTube पर टॉपिक वीडियो देखें
  </button>
</div>


          {/* Action Buttons */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <button
              onClick={() =>
                navigate(`/module/${moduleId}/topic/${topicId}/notes`)
              }
              className="
                py-3 rounded-full font-semibold
                bg-white shadow
                transition active:scale-95 hover:shadow-lg
              "
              style={{ color: "var(--primary-color)" }}
            >
              📝 नोट्स पढ़ें
            </button>

            <button
              onClick={() =>
                navigate(`/module/${moduleId}/topic/${topicId}/quiz`)
              }
              className="
                py-3 rounded-full font-semibold
                bg-white shadow
                transition active:scale-95 hover:shadow-lg
              "
              style={{ color: "var(--primary-color)" }}
            >
              ❓ अभ्यास प्रश्न
            </button>

            <button
              onClick={() => navigate(`/module/${moduleId}`)}
              className="
                py-3 rounded-full font-semibold
                text-white shadow
                transition active:scale-95 hover:shadow-lg
              "
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
