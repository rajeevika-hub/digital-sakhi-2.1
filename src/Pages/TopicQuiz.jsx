import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseData from "../data/CourseData";
import BackButton from "../components/BackButton";

export default function QuizPage() {

  useEffect(() => {

    window.speechSynthesis.getVoices();
  }, [])

  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();


  const module = courseData.find(
    (m) => m.id === `module-${moduleId}`
  );
  const topic = module?.topics.find(
    (t) => t.id === topicId
  );

  const questions = topic?.quiz || [];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioObj, setAudioObj] = useState(null);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);



  if (!module || !topic) {
    return (
      <div className="pt-25 text-center text-red-500">
        Quiz not found
      </div>
    );
  }

  const handleSelect = (option) => {
    setAnswers({ ...answers, [current]: option });
  };

  const score = questions.reduce((acc, q, i) => {
    return acc + (answers[i] === q.answer ? 1 : 0);
  }, 0);

  // Stop any ongoing audio 
  const stopAudio = () => {
    // Browser speech stop
    window.speechSynthesis.cancel();

    setActiveIndex(null);
    setIsSpeaking(false);
  };

  // Function to speak question and options

  const speakQuestionAndOption = (questionObj) => {
    if (!window.speechSynthesis) {
      alert("Audio supported nahi hai");
      return;
    }

    window.speechSynthesis.cancel();
    setIsSpeaking(true);

    const speak = (text, index = null) => {
      return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "hi-IN";
        utterance.pitch = 1;
        utterance.rate = 1;

        if (index !== null) {
          setActiveIndex(index);
        } else {
          setActiveIndex(null);
        }

        utterance.onend = () => resolve();
        window.speechSynthesis.speak(utterance);
      });
    };

    const start = async () => {
      await speak(`सवाल है: ${questionObj.question}`);

      for (let i = 0; i < questionObj.options.length; i++) {
        await speak(`विकल्प ${i + 1}: ${questionObj.options[i]}`, i);
      }

      setActiveIndex(null);
      setIsSpeaking(false);
    };

    start();
  };


  return (
    <div
      className="min-h-screen mt-8 pt-25 pb-24 bg-cover bg-center relative"
      style={{ backgroundImage: "var(--bg-image)" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80-opacity-30 backdrop-blur-sm"></div>

     

      <div className="relative max-w-3xl mx-auto px-4">

      

        {/* HEADER */}
        <div className="text-center mb-8">
            
            {/* back */}
             <BackButton label=" पीछे जाएं" />

          <h1
            className="text-2xl md:text-3xl font-bold"
            style={{ color: "var(--primary-color)" }}
          >
            {topic.title}
          </h1>
          <p className="text-gray-600 mt-2">
            प्रश्न {current + 1} / {questions.length}
          </p>
        </div>

        {/* QUIZ CARD */}
        <div className="bg-white rounded-[28px] shadow-xl p-8 relative ">

          {!submitted ? (
            <div>

 {/* SPEAK BUTTON */}
              <button
                onClick={() => {
                  if (isSpeaking) {
                    stopAudio();
                  } else {
                    speakQuestionAndOption(questions[current]);
                  }
                }}
                className="mb-6  flex items-center gap-2 px-4 py-2 rounded-lg shadow text-white"
                 style={{
                      backgroundColor: "var(--primary-color)",
                    }}
              >
                {isSpeaking ? "⏹ रोकें" : "🔊 सुनें"}
              </button>


              {/* QUESTION */}
              <p className="font-semibold mb-6 text-lg">
                {current + 1}. {questions[current].question}
              </p>


             


              {/* OPTIONS */}
              <div className="space-y-3 mb-8">
                {questions[current].options.map((opt, index) => (
                  <label
                    key={opt}
                    className={`
                     flex items-center gap-3
      p-4 rounded-xl cursor-pointer
      border transition-all duration-300

                      

                      ${activeIndex === index ? "bg-yellow-100 border-yellow-500 scale-105 shadow-lg" :
                        answers[current] === opt
                          ? "border-[var(--primary-color)] bg-pink-50"
                          : "border-gray-200"}
                    `}
                  >
                    <input
                      type="radio"
                      name="option"
                      checked={answers[current] === opt}
                      onChange={() => handleSelect(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>

              {/* NAV BUTTONS */}
              <div className="flex justify-between gap-4">
                {current > 0 && (
                  <button
                    onClick={() => setCurrent(current - 1)}
                    className="px-6 py-3 rounded-full bg-gray-100"
                  >
                    ← पिछला
                  </button>
                )}

                {current < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrent(current + 1)}
                    disabled={answers[current] == null}
                    className="px-6 py-3 rounded-full text-white disabled:opacity-50"
                    style={{
                      backgroundColor: "var(--primary-color)",
                    }}
                  >
                    अगला →
                  </button>
                ) : (
                  <button
                    onClick={() => setSubmitted(true)}
                    className="px-6 py-3 rounded-full text-white"
                    style={{
                      backgroundColor: "var(--primary-color)",
                    }}
                  >
                    ✔ जमा करें
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* RESULT */
            <div>
              <h2 className="text-xl font-bold mb-4 text-center">
                🎉 आपका परिणाम
              </h2>

              <p className="text-center mb-6">
                आपने {questions.length} में से{" "}
                <span
                  style={{ color: "var(--primary-color)" }}
                  className="font-bold"
                >
                  {score}
                </span>{" "}
                सही उत्तर दिए
              </p>

              {/* ANSWER REVIEW */}
              <div className="space-y-4">
                {questions.map((q, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gray-50"
                  >
                    <p className="font-semibold">
                      {i + 1}. {q.question}
                    </p>
                    <p className="text-sm mt-1">
                      आपका उत्तर:{" "}
                      <span
                        className={
                          answers[i] === q.answer
                            ? "text-green-600"
                            : "text-red-500"
                        }
                      >
                        {answers[i] || "नहीं चुना"}
                      </span>
                    </p>
                    <p className="text-sm text-green-700">
                      सही उत्तर: {q.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
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
