import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaYoutube
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Office Address",
    value: "Zila Parishad, Churu",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+91 9001784791, +91 8890635842",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "rajeevika@digitalsakhichuru.in",
  },
];

const socials = [
  {
    icon: FaFacebookF,
    link: "#",
    className: "bg-[#1877F2] hover:bg-[#0f5fd1]  text-white"   // Facebook
  },
  {
    icon: FaTwitter,
    link: "#",
    className: "bg-[#1DA1F2] hover:bg-[#0d8ddb] text-white"   // Twitter
  },
  {
    icon: FaInstagram,
    link: "#",
    className:
      "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]  text-white"
  },
  {
    icon: FaLinkedinIn,
    link: "#",
    className: "bg-[#0A66C2] hover:bg-[#084d96] text-white"   // LinkedIn
  },
  {
    icon: FaYoutube,
    link: "#",
    className: "bg-[#FF0000] hover:bg-[#cc0000] text-white"   // YouTube Red
  },
];


export default function Contact() {
  const formRef = useRef();
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      "service_35m551k",
     "template_akg5err",
      formRef.current,
      "VNmY9eJ2OfmLh0yFR"
    )
    .then(
      () => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      },
      (error) => {
        console.error(error);
        alert("Message send nahi ho paya 😢");
        setLoading(false);
      }
    );
};

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--primary-color)" }}>
            Get In Touch
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            कोई सवाल या सुझाव है? हम आपसे सुनना चाहेंगे 🌸
          </p>
        </header>

        {/* GRID */}
        <div className="grid gap-6 lg:grid-cols-2  items-start ">

          {/* LEFT INFO */} 
          <div className="flex flex-col items-center ">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex  my-3 w-full  items-center max-w-lg gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center text-xl font-extrabold justify-center w-12 h-12 rounded-lg " style={{ color: "var(--primary-color)" , backgroundColor: "var(--shade-2)" }}>
                    <Icon size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-500 font-medium">
                      {item.title}
                    </p>
                    <p className="text-base font-semibold text-gray-800">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* SOCIAL ICONS */}
            <div className="hidden lg:flex gap-4 pt-4">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.link}
                    className={`w-10 h-10 rounded-full font-extrabold  flex items-center justify-center ' ' ${s.className}` }
                   
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white m-auto self-center rounded-2xl w-full md:w-[80%] lg:w-full shadow-lg p-6 sm:p-10">

            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">


              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  
                  placeholder="Apna message yahan likhein..."
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-lg text-white py-3 font-semibold active:scale-95 disabled:opacity-60"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane size={16} />
              </button>


            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
