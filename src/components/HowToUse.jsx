export default function HowToUse() {
  const steps = [
    {
      step: "01",
      title: "Module Select Karein",
      desc: "Home page par available modules me se apna course select karein.",
      img: "/how/module.png",
    },
    {
      step: "02",
      title: "Topics Padhein",
      desc: "Module ke andar diye gaye topics ko ek-ek karke open karein.",
      img: "/how/topics.png",
    },
    {
      step: "03",
      title: "Video • Notes • Quiz",
      desc: "Har topic ke liye video dekhein, notes padhein aur quiz solve karein.",
      img: "/how/learn.png",
    },
    {
      step: "04",
      title: "Final Test Dein",
      desc: "Sab topics complete hone ke baad final test unlock hota hai.",
      img: "/how/test.png",
    },
    {
      step: "05",
      title: "Certificate Paayein",
      desc: "Final test pass karne par turant certificate download karein.",
      img: "/how/certificate.png",
    },
  ];

  return (
    <section id="how" className="py-24 relative overflow-hidden">
      {/* soft bg */}
      <div className="absolute opacity-25 inset-0 bg-linear-to-b  from-white to-[var(--secondary-color)]/84"></div>

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
            How It Works
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Digital Sakhi Platform Kaise Use Karein
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Step-by-step process follow karke course complete karein
            aur certificate haasil karein 🌸
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
                    className="w-full overflow-hidden rounded-2xl h-[260px] md:h-[320px] object-contain p-6"
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
