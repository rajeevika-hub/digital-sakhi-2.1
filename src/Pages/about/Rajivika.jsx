import React from "react";
import {
  FaHandsHelping,
  FaUsers,
  FaUniversity,
  FaSeedling,
  FaChartLine,
  FaBullseye
} from "react-icons/fa";

const Card = ({ icon: Icon, title, children }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-indigo-50 text-xl" style={{ color: "var(--primary-color)" }}>
          <Icon />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-600 text-md leading-relaxed">
        {children}
      </div>
    </div>
  );
};

const RajeevikaSection = () => {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
          <span style={{ color: "var(--primary-color)" }}>RAJEEVIKA </span>
           -About Us
        </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Rajasthan Grameen Aajeevika Vikas Parishad (RGAVP) empowering rural
            women through sustainable livelihood initiatives.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* About */}
          <Card icon={FaHandsHelping} title="Program Overview">
            “Rajeevika” राजस्थान सरकार का प्रमुख ग्रामीण विकास कार्यक्रम है जो
            महिलाओं के वित्तीय सशक्तिकरण, सामाजिक समावेशन और आजीविका संवर्धन के लिए
            कार्य करता है। यह NRLM के अंतर्गत संचालित है।
          </Card>

          {/* Objective */}
          <Card icon={FaBullseye} title="Main Objective">
            ग्रामीण महिलाओं को आर्थिक रूप से आत्मनिर्भर बनाना — बचत, ऋण, प्रशिक्षण,
            बाज़ार संपर्क और उद्यमिता को Self Help Groups (SHGs) एवं उनकी
            Federations के माध्यम से बढ़ावा देना।
          </Card>

          {/* CBOs */}
          <Card icon={FaUsers} title="Community Organizations (CBOs)">
            <ul className="list-disc ml-5 space-y-1">
              <li>Self Help Groups (SHGs)</li>
              <li>Village Organizations (VOs)</li>
              <li>Cluster Level Federations (CLFs)</li>
            </ul>
            <p className="mt-2">
              ये संस्थाएँ महिलाओं को सामाजिक और आर्थिक निर्णय लेने में सक्षम बनाती हैं।
            </p>
          </Card>

          {/* Financial Inclusion */}
          <Card icon={FaUniversity} title="Financial Inclusion">
            बैंकिंग सेवाएँ, ऋण सुविधा, बीमा, डिजिटल ट्रांजैक्शन और सरकारी योजनाओं
            से महिलाओं को जोड़कर वित्तीय समावेशन को मजबूत किया जाता है।
          </Card>

          {/* Livelihood */}
          <Card icon={FaSeedling} title="Livelihood Opportunities">
            डेयरी, कृषि प्रोसेसिंग, हस्तशिल्प, सिलाई, फूड प्रोसेसिंग, रिटेल एवं
            सर्विस सेक्टर जैसे Farm और Non-Farm उद्यमों में रोजगार के अवसर।
          </Card>

          {/* Impact */}
          <Card icon={FaChartLine} title="Statewide Impact">
            राजस्थान के लगभग सभी जिलों में परियोजनाएँ संचालित हैं जहाँ महिलाएँ
            उद्यमी, उत्पादक, सेवा प्रदाता और सामुदायिक लीडर के रूप में उभर रही हैं।
          </Card>

        </div>

        {/* Vision */}
        <div className="mt-14  rounded-2xl p-8 text-center  shadow-lg"  style={{ color: "var(--primary-color)", backgroundColor: "var(--secondary-color)" }}>
          <h2 className="text-2xl font-semibold mb-3">
            Rajeevika Vision
          </h2>
          <p className="text-lg">
            “आत्मनिर्भर एवं सशक्त ग्रामीण महिलाओं के माध्यम से एक सशक्त समाज का निर्माण।”
          </p>
        </div>

      </div>
    </section>
  );
};

export default RajeevikaSection;
