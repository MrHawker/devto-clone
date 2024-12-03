"use client";
import { HeadNav } from "./_components/HeadNav";
import { Body } from "./_components/Body";
import { Marker } from "./_components/Marker";
import { SideNav } from "./_components/SideNav";
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateVisibility = () => {
      setWidth(window.innerWidth);
    };
    updateVisibility();
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (width === 0) return <div></div>;

  return (
    <main className="antialiased">
      <HeadNav width={width}/>
      <div className="flex justify-center bg-[#f5f5f5]">
        <div className="mx-auto grid max-w-[1380px] p-0 md:grid-cols-[2fr_5fr] md:gap-[17px] md:p-2 lg:grid-cols-[240px_2fr_1fr] lg:p-4">
          {width >= 768 && <SideNav width={width} />}
          <Body width={width} />
          {width >= 1024 && <Marker width={width} />}
        </div>
      </div>
    </main>
  );
}
