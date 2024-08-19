"use client";
import { useRef } from "react";
import { format } from "date-fns";

import RightIcon from "./vectors/RightIcon";
import EventCard from "./EventCard";
import LeftIcon from "./vectors/LeftIcon";

export default function Filtered({ featured }: { featured: any }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div ref={carouselRef} className="flex gap-6 overflow-x-auto noScrollBar">
      {featured?.map((item: any) => (
        <EventCard
          key={item?.id}
          src={item?.artist?.image_url}
          eventName={
            item?.title || `${item?.artist?.name || item?.lineup[0]} Concert`
          }
          location={item?.venue?.city}
          date={format(item?.starts_at, "do MMMM, yyyy")}
          price={15000}
          btntext="Buy Ticket"
          link={item?.url}
          isFeatured
        />
      ))}
      <button
        onClick={scrollRight}
        className={`absolute rounded-full p-2.5 bg-white shadow-btn z-10 -right-4 top-1/2 -translate-y-1/2`}
      >
        <RightIcon />
      </button>
      <button
        onClick={scrollLeft}
        className={`absolute rounded-full p-2.5 bg-white shadow-btn z-10 -left-4 top-1/2 -translate-y-1/2`}
      >
        <LeftIcon />
      </button>
    </div>
  );
}
