import React from "react";
import { FaUserTie, FaMapMarkerAlt, FaAward } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";

const DmEliteCard = () => {
  return (
   
      <div className="relative  items-center max-w-sm md:max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

      
        <div className="grid grid-cols-1 p-1 md:grid-cols-2">

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-full">
            <img
              src="/images/Abhishekh.jpg"
              alt="Abhishek Surana"
              className="h-full w-full object-cover"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-90">Leadership Profile</p>
              <h3 className="text-xl font-semibold tracking-wide">
                Digital Sakhi Initiative
              </h3>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-4 lg:p-6 flex flex-wrap flex-col justify-center">

            <h1 className="text-4xl font-semibold text-slate-800 tracking-tight">
              Abhishek Surana
            </h1>

            <p className="mt-2 font-medium flex items-center gap-2" 
            style={{
              color: "var(--primary-color)",
              fontSize: "1.1rem",
            }}
            >
              <FaUserTie /> District Magistrate
            </p>

            

            {/* INFO STRIP */}
            <div className="mt-4 grid grid-cols-2 gap-6 text-sm">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className=" text-lg" style={{ color: "var(--primary-color)"}}/>
                <div>
                  <p className="font-semibold text-slate-700">Region</p>
                  <p className="text-slate-500">District Administration</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MdOutlineWorkOutline className="text-lg" style={{ color: "var(--primary-color)"}} />
                <div>
                  <p className="font-semibold text-slate-700">Focus</p>
                  <p className="text-slate-500">Digital Empowerment</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaAward className="text-lg" style={{ color: "var(--primary-color)"}} />
                <div>
                  <p className="font-semibold text-slate-700">Role</p>
                  <p className="text-slate-500">Mentor & Guide</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaUserTie className="text-lg"  style={{ color: "var(--primary-color)"}}/>
                <div>
                  <p className="font-semibold text-slate-700">Leadership</p>
                  <p className="text-slate-500">Public Service</p>
                </div>
              </div>

            </div>

          

          </div>
        </div>
      </div>
  
  );
};

export default DmEliteCard;
