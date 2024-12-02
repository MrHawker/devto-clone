'use client'
import { HeadNav } from "./_components/HeadNav";
import { Body } from "./_components/Body";
import { Marker } from "./_components/Marker";
import { SideNav } from "./_components/SideNav";
import { useEffect, useState } from "react";

export default function Home() {
  const [showMarker, setShowMarker] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const width = window.innerWidth;
      setShowMarker(width >= 1024); 
      setShowSideNav(width >= 768); 
    };
    updateVisibility(); 
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);
  
  return (
    <main className="antialiased ">
      <HeadNav />
      <div className="bg-[#f5f5f5] justify-center flex ">
      <div className=" grid max-w-[1380px]
          md:grid-cols-[2fr_5fr] lg:grid-cols-[240px_2fr_1fr] md:gap-[17px] mx-auto p-0 md:p-2 lg:p-4">
        {showSideNav && <SideNav />}
        <Body />
        {showMarker && <Marker />}
      </div>
      </div>
      
    </main>
  );
}
