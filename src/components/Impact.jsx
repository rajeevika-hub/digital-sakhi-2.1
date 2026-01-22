export default function Impact() {
  const stats = [
    { value: "3,000+", label: "पूर्ण रूप से प्रशिक्षित महिलाएं" },
    { value: "4,000+", label: "आंशिक रूप से प्रशिक्षित" },
    { value: "7,000+", label: "SHG सदस्य शामिल" },
    { value: "300+", label: "डिजिटल मार्केटिंग प्रशिक्षु" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <div className="mb-16 reveal opacity-0 translate-y-16 transition-all duration-700">
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "var(--primary-color)",
            }}
          >
            प्रभाव
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            ज़मीनी स्तर पर वास्तविक प्रभाव
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            डिजिटल सखी पहल ने ग्रामीण समुदायों में
            सामाजिक, आर्थिक और डिजिटल स्तर पर
            मापने योग्य सकारात्मक प्रभाव डाला है।
          </p>
        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="reveal opacity-0 translate-y-16 transition-all duration-700 rounded-3xl p-8 shadow hover:shadow-xl"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              <h3
                className="text-4xl font-extrabold"
                style={{ color: "var(--primary-color)" }}
              >
                {item.value}
              </h3>
              <p className="mt-2 text-gray-700 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
