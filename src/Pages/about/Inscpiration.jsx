import React from "react";
import DmEliteCard from "./DMCard";
import RajeevikaSection from "./Rajivika";
import { FaUserTie, FaMapMarkerAlt } from "react-icons/fa";


  {/* Leader Card */}
  const LeaderCard = ({ image, name, role }) => (
    <div className="group flex items-center gap-5 bg-white rounded-2xl p-1 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">

      {/* Image */}
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl "></div>
        <img
          src={image}
          alt={name}
          className="relative w-40 h-40  rounded-2xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FaUserTie  style={{ color: "var(--primary-color)" }} />
          {name}
        </h3>

        <p className="mt-1 text-sm text-gray-600 flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-400" />
          {role}
        </p>

       
      </div>
    </div>
  );


export default function InspirationPage() {
  return (
    <div
      className="min-h-screen pt-28 pb-20 px-6"
      style={{
        background:
          "linear-gradient(135deg, var(--secondary-color), #ffffff)",
      }}
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Digital <span style={{ color: "var(--primary-color)" }}>सखी</span>
        </h1>
        <p className="mt-2 text-gray-700">
          Women Digital Empowerment Initiative
        </p>
      </div>

      {/* ===== DM CARD ===== */}
      <div className="flex items-center justify-center py-6"><DmEliteCard /></div>
     

      {/* ===== LEADERS ===== */}
      <div className="max-w-5xl mx-auto grid items-center justify-center gap-6 mb-14 md:grid-cols-2">
       <LeaderCard
    image="/images/durga.jpg"
    name="Durga Devi Dhaka"
    role="District Project Manager, Churu"
  />

  {/* Leader 2 */}
  <LeaderCard
    image="/images/rakesh.jpg"
    name="Rakesh Kumar Chhepat"
    role="District Resource Cell In-Charge, Churu"
  />

      </div>


   
      {/* ---------------------------- Content------------- Rajivika ----------------------- */}

          <RajeevikaSection />

          {/* ===== ABOUT DIgital sakhi ---------------------------------------------------------------- ===== */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          About Digital{" "}
          <span style={{ color: "var(--primary-color)" }}>सखी</span>
        </h2>
        <p className="mt-2 text-gray-700">
          ग्रामीण महिलाओं को तकनीकी कौशल प्रदान कर आत्मनिर्भर बनाना
        </p>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
        {/* Sakhi 1.0 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: "var(--primary-color)" }}
          >
            ❝ Digital Sakhi 1.0
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Digital Sakhi 1.0 का उद्देश्य ग्रामीण एवं स्वयं सहायता समूह की
            महिलाओं को डिजिटल साक्षरता प्रदान करना था। इस चरण में महिलाओं
            को स्मार्टफोन का उपयोग, इंटरनेट की समझ, डिजिटल भुगतान,
            सरकारी सेवाओं और ऑनलाइन प्लेटफॉर्म से जोड़ा गया।
          </p>
        </div>

        {/* Sakhi 2.0 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: "var(--primary-color)" }}
          >
            ❝ Digital Sakhi 2.0
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Digital Sakhi 2.0 में महिलाओं को डिजिटल मार्केटिंग, सोशल मीडिया,
            ऑनलाइन बिजनेस, ब्रांडिंग और कंटेंट क्रिएशन जैसे
            रोजगारोन्मुख कौशल सिखाए जा रहे हैं ताकि वे आय सृजन कर सकें।
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2">
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: "var(--primary-color)" }}
          >
            ❝ Progress & Impact
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Digital Sakhi initiative के अंतर्गत हजारों महिलाओं को
            प्रशिक्षित किया गया है। यह कार्यक्रम महिलाओं को
            डिजिटल आत्मनिर्भरता की दिशा में आगे बढ़ा रहा है
            और स्थानीय स्तर पर रोजगार के अवसर पैदा कर रहा है।
          </p>
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--primary-color)" }}
          >
            ❝ Key Highlights
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>ग्रामीण महिलाओं को डिजिटल सशक्तिकरण</li>
            <li>ऑनलाइन व्यवसाय एवं डिजिटल मार्केटिंग प्रशिक्षण</li>
            <li>आत्मनिर्भरता एवं रोजगार सृजन</li>
            <li>सरकारी योजनाओं से सीधा जुड़ाव</li>
            <li>स्थायी एवं मापनीय सामाजिक प्रभाव</li>
          </ul>
        </div>
      </div>

  
    </div>
  );
}





