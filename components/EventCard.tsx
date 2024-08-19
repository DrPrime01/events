import Image from "next/image";

import LocationIcon from "./vectors/LocationIcon";
import TicketIcon from "./vectors/TicketIcon";
import Chip from "./Chip";
import Button from "./Button";
import { toCurrency } from "@/utils";
import CalendarIcon from "./vectors/CalendarIcon";

interface EventCardProps {
  src: string;
  eventName: string;
  location: string;
  chiptext?: string;
  btntext: string;
  date?: string;
  price: number;
  link: string;
  isFeatured?: boolean;
}

export default function EventCard({
  src,
  eventName,
  location,
  price,
  chiptext,
  btntext,
  date,
  link,
  isFeatured = false,
}: EventCardProps) {
  return (
    <div
      className={`flex flex-col rounded-[10px] bg-white shadow-standard p-3 ${
        isFeatured ? "md:min-w-[524px] min-w-full" : "md:max-w-[250px]"
      } w-full`}
    >
      <Image
        src={src || "/images/cardpreviewimg.png"}
        alt="event-img"
        width={isFeatured ? 492 : 226}
        height={isFeatured ? 188 : 142}
        className={`rounded-md object-cover mb-3 w-full ${
          isFeatured ? "h-[188px]" : "md:h-[142px] h-[188px]"
        }`}
      />
      <div
        className={`flex ${
          isFeatured ? "items-end" : "items-start"
        } justify-between gap-x-1.5 mb-4`}
      >
        <div className="flex flex-col gap-y-2.5">
          <p className="text-xs font-bold text-pry">{eventName || "Event 1"}</p>
          <div className="flex items-center gap-x-[30px]">
            <div className="flex items-center gap-x-2">
              <LocationIcon />{" "}
              <p className="text-xs text-sec">{location || "Lagos"}</p>
            </div>
            {isFeatured && (
              <div className="flex items-center gap-x-2">
                <CalendarIcon />{" "}
                <p className="text-xs text-sec">
                  {date || "8th December, 2021"}
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-x-2">
            <TicketIcon />
            <p className="text-xs text-sec">
              Starting from{" "}
              <span className="text-sm font-semibold text-tertiary">
                {toCurrency(price || 15000)}
              </span>
            </p>
          </div>
        </div>
        {!isFeatured && <Chip text={chiptext || "31 Oct"} />}
        {isFeatured && <Button link={link} text={btntext || "Buy Ticket"} />}
      </div>
      {!isFeatured && <Button link={link} text={btntext || "Buy Ticket"} />}
    </div>
  );
}
