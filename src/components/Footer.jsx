import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="relative  overflow-hidden"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      {/* MOVING LINES */}
      <div className="absolute top-0 left-0 w-full h-2 animate-line-move bg-white/40"></div>
      <div className="absolute top-6 left-0 w-full h-2 animate-line-move-reverse bg-white/20"></div>

      {/* FLOATING WAVE */}
      <div className="absolute inset-0 opacity-20 animate-wave">
        <div className="w-[200%] h-full bg-linear-gradient  from-white/10 via-white/30 to-white/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 text-white">

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-3 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 tracking-wide">
              Digital सखी
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              ग्रामीण महिलाओं को डिजिटल रूप से सशक्त बनाने की
              आधुनिक पहल। सीखें, आगे बढ़ें और आत्मनिर्भर बनें।
            </p>

          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-medium mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm opacity-90">
              {[
                "Home",
                "Digital Sakhi 1.0",
                "Digital Sakhi 2.0",
                "How to Use",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-medium mb-4 tracking-wide">
              Follow Us
            </h4>

            <div className="flex justify-center md:justify-start gap-4">
              <a className="social linkedin"><FaLinkedinIn /></a>
              <a className="social x"><FaTwitter /></a>
              <a className="social youtube"><FaYoutube /></a>
              <a className="social instagram"><FaInstagram /></a>
              <a className="social facebook"><FaFacebookF /></a>
              <a className="social telegram"><FaTelegramPlane /></a>
            </div>


            <Link
              to="/developers"
              className="
        flex items-center gap-2
        w-62
        m-auto mt-6
        px-4 py-2
        rounded-full
        my-8 
        bg-white
        shadow-md
        hover:shadow-lg
        border
        border-gray-200
        text-sm font-semibold
        transition
        active:scale-95
      "
      style={{ color: "var(--primary-color)" }}
            >
          

              {/* Icon */}
              <FaCode
                className="
          text-xl
          transition-transform duration-300
          group-hover:rotate-12 group-hover:scale-110
        "
              />

              {/* Text */}
              <span className="relative z-10">
                View Developer
              </span>
            </Link>


          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-6 text-center text-sm opacity-90 border-t border-white/30">
          © {new Date().getFullYear()} Digital सखी • All Rights Reserved
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-line-move {
          animation: moveLine 6s linear infinite;
        }

        .animate-line-move-reverse {
          animation: moveLineReverse 10s linear infinite;
        }

        .animate-wave {
          animation: waveMove 18s linear infinite;
        }

        @keyframes moveLine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }

        @keyframes moveLineReverse {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }

        @keyframes waveMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .social {
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.35s ease;
        }

        .social:hover {
          background: white;
          transform: scale(1.15);
        }

        .linkedin:hover { color: #0A66C2; }
        .x:hover { color: #000000; }
        .youtube:hover { color: #FF0000; }
        .instagram:hover { color: #E1306C; }
        .facebook:hover { color: #1877F2; }
        .telegram:hover { color: #229ED9; }
      `}</style>
    </footer>
  );
}
