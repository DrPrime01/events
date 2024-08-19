import Image from "next/image";
import DownIcon from "./vectors/DownIcon";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between">
      <p className="text-[28px] font-bold text-pry">Event</p>
      <button className="flex items-center gap-x-4">
        <Image
          src="/images/profile.png"
          width={38}
          height={38}
          className="rounded-xl"
          alt="profile"
        />
        <p className="text-[15px] text-black font-bold">Bernice</p>
        <div className="bg-[#EAEDF7] p-1.5 rounded-lg">
          <DownIcon />
        </div>
      </button>
    </nav>
  );
}
