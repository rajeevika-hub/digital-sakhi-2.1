export default function DigitalSakhi() {
  return (
    <section id="sakhi" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div className="reveal opacity-0 translate-y-16 transition-all duration-700">
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "var(--primary-color)",
            }}
          >
            पहल के बारे में
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            क्या है{" "}
            <span style={{ color: "var(--primary-color)" }}>
              डिजिटल सखी?
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            डिजिटल सखी एक महिला सशक्तिकरण पहल है, जिसका उद्देश्य ग्रामीण
            क्षेत्रों में डिजिटल अंतर को कम करना है। इसके अंतर्गत
            महिलाओं को डिजिटल साक्षरता, वित्तीय समावेशन और
            तकनीक आधारित आजीविका के अवसर प्रदान किए जाते हैं।
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            यह कार्यक्रम स्वयं सहायता समूह (SHG) की महिलाओं को
            सामुदायिक स्तर पर डिजिटल लीडर बनाता है, जो आगे
            अन्य महिलाओं को भी डिजिटल टूल्स अपनाने में सक्षम बनाती हैं।
          </p>
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="grid sm:grid-cols-2 gap-6 reveal opacity-0 translate-y-16 transition-all duration-700">
          {[
            "डिजिटल साक्षरता",
            "वित्तीय समावेशन",
            "सामुदायिक नेतृत्व",
            "महिला सशक्तिकरण",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              <h4 className="font-semibold text-lg">{item}</h4>
              <p className="text-sm text-gray-700 mt-2">
                संरचित डिजिटल कौशलों के माध्यम से महिलाओं को सशक्त बनाना।
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
