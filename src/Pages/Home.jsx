import React from "react";
import ModuleSidebar from "../components/ModuleSidebaar";
import RightWelcomePanel from "../components/Homeimage";
import BackButton from "../components/BackButton";

export default function Home() {
  return (
    <div
      className="min-h-screen pt-24 mt-6 pb-20 bg-cover bg-center"
      style={{ backgroundImage: "var(--bg-image)" }}
    >
      <div className="max-w-7xl mx-auto px-4 ">

      
       

        {/* FULL PAGE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_2fr] gap-6">


          {/* LEFT */}
          <ModuleSidebar />

          {/* RIGHT */}
          <RightWelcomePanel />

        </div>

      </div>
    </div>
  );
}
