export default function DigitalSakhi2() {
  return (
    <section id="sakhi2" className="py-24 relative overflow-hidden">

      {/* soft glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 blur-3xl rounded-full"
        style={{ backgroundColor: "var(--secondary-color)" }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <div className="reveal opacity-0 translate-y-16 transition-all duration-700">
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "var(--primary-color)",
            }}
          >
            चरण 2
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            डिजिटल सखी{" "}
            <span style={{ color: "var(--primary-color)" }}>2.0</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600">
            डिजिटल सखी 2.0 महिलाओं को मोबाइल एप्लिकेशन,
            साइबर सुरक्षा जागरूकता, आर्टिफिशियल इंटेलिजेंस टूल्स
            और डिजिटल मार्केटिंग के माध्यम से
            आय सृजन के लिए सशक्त बनाता है।
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8 reveal opacity-0 translate-y-16 transition-all duration-700">
          {[
            "मोबाइल एप्लिकेशन",
            "साइबर सुरक्षा जागरूकता",
            "आर्टिफिशियल इंटेलिजेंस",
            "डिजिटल मार्केटिंग",
            "ब्रांडिंग और कंटेंट",
            "ई-कॉमर्स प्लेटफॉर्म",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 shadow hover:shadow-xl transition"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              <h4 className="text-lg font-semibold mb-2">{item}</h4>
              <p className="text-sm text-gray-700">
                वास्तविक उपयोग के उदाहरणों के साथ व्यावहारिक प्रशिक्षण।
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
