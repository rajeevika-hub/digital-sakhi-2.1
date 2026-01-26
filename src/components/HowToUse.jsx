export default function HowToUse() {
  const steps = [
    {
      step: "01",
      title: "मॉड्यूल चुनें",
      desc: "होम पेज पर उपलब्ध मॉड्यूल में से अपना कोर्स चुनें।",
      img: "/how/module.png",
    },
    {
      step: "02",
      title: "विषय पढ़ें",
      desc: "मॉड्यूल के अंदर दिए गए विषयों को एक-एक करके खोलें।",
      img: "/how/topics.png",
    },
    {
      step: "03",
      title: "वीडियो • नोट्स • प्रश्नोत्तरी",
      desc: "हर विषय के लिए वीडियो देखें, नोट्स पढ़ें और प्रश्नोत्तरी हल करें।",
      img: "/how/learn.png",
    },
    {
      step: "04",
      title: "अंतिम परीक्षा दें",
      desc: "सभी विषय पूरे होने के बाद अंतिम परीक्षा अनलॉक हो जाती है।",
      img: "/how/test.png",
    },
    {
      step: "05",
      title: "प्रमाणपत्र प्राप्त करें",
      desc: "अंतिम परीक्षा उत्तीर्ण करने पर तुरंत प्रमाणपत्र डाउनलोड करें।",
      img: "/how/certificate.png",
    },
  ];

  return (
    <section id="how" className="py-24 relative overflow-hidden">
      {/* soft bg */}
      <div className="absolute opacity-25 inset-0 bg-linear-to-b from-white to-var(--secondary-color)/30"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-20 reveal opacity-0 translate-y-16 transition-all duration-700">
          <span
            className="inline-block mb-4 px-5 py-2 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "var(--primary-color)",
            }}
          >
            यह कैसे काम करता है
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            डिजिटल सखी प्लेटफ़ॉर्म का उपयोग कैसे करें
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            चरण-दर-चरण प्रक्रिया का पालन करके कोर्स पूरा करें
            और प्रमाणपत्र प्राप्त करें 🌸
          </p>
        </div>

        {/* STEPS */}
        <div className="space-y-20">
          {steps.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              } reveal opacity-0 translate-y-16 transition-all duration-700`}
            >
              {/* IMAGE */}
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full overflow-hidden rounded-2xl h-65 md:h-65 object-contain p-6"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="md:w-1/2">
                <div className="bg-white/90 backdrop-blur rounded-xl p-8 shadow-lg">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg mb-4"
                    style={{
                      backgroundColor: "var(--secondary-color)",
                      color: "var(--primary-color)",
                    }}
                  >
                    {item.step}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
