import { useEffect } from "react";
import Hero from "../components/Hero";
import DigitalSakhi from "../components/Digital-Sakhi";
import DigitalSakhi2 from "../components/Digital-Sakhi2.0";
import Impact from "../components/Impact";
import HowToUse from "../components/HowToUse";

export default function FrontPage() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) =>
            e.isIntersecting &&
            e.target.classList.remove("opacity-0", "translate-y-16")
        ),
      { threshold: 0.2 }
    );
    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div style={{ backgroundColor: "var(--section-bg, #ffffff)" }}>
      <Hero />
      <DigitalSakhi />  
      <DigitalSakhi2 />
      <Impact />
      <HowToUse />
    </div>
  );
}
