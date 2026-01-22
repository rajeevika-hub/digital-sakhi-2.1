export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "var(--bg-image)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-5 items-center">

<div className="order-2 md:order-1 reveal opacity-0 translate-y-16 transition-all duration-700">

          <span
            className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "var(--primary-color)",
            }}
          >
            महिला डिजिटल सशक्तिकरण पहल
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            डिजिटल{" "}
            <span style={{ color: "var(--primary-color)" }}>सखी</span>
          </h1>

          <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
            डिजिटल साक्षरता से डिजिटल नेतृत्व तक
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto md:mx-0">
            डिजिटल सखी एक परिवर्तनकारी पहल है, जिसका उद्देश्य ग्रामीण महिलाओं
            को डिजिटल साक्षरता, मोबाइल एप्लिकेशन, साइबर सुरक्षा,
            आर्टिफिशियल इंटेलिजेंस और डिजिटल मार्केटिंग जैसे
            आधुनिक कौशलों से सशक्त बनाना है।
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/home"
              className="px-8 py-3 rounded-full font-semibold shadow transition active:scale-95"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "#fff",
              }}
            >
              कार्यक्रम देखें
            </a>

            <a
              href="#impact"
              className="px-8 py-3 rounded-full font-semibold border-2 transition active:scale-95"
              style={{
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)",
              }}
            >
              प्रभाव देखें
            </a>
          </div>
        </div>

<div className="relative order-1 md:order-2 reveal opacity-0 md:translate-x-16 transition-all duration-700">

          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-3 sm:p-4 shadow-xl">

            {/* RESPONSIVE VIDEO WRAPPER */}
            <div className="w-full aspect-video sm:mr-10 rounded-2xl overflow-hidden">
              <video
                src="/images/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

          
            {[
              "📱 मोबाइल स्किल्स",
              "🛡️ साइबर सुरक्षा",
              "🤖 एआई व डिजिटल मार्केटिंग",
            ].map((text, i) => (
              <div
                key={i}
                className="hidden sm:block absolute bg-white px-3 py-2 rounded-xl shadow-md text-sm font-semibold"
                style={{
                  top: i === 0 ? "-1rem" : i === 1 ? "auto" : "50%",
                  bottom: i === 1 ? "-1rem" : "auto",
                  left: i !== 2 ? "1rem" : "auto",
                  right: i === 2 ? "-1.5rem" : "auto",
                }}
              >
                {text}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
