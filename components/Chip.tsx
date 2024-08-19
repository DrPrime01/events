export default function Chip({ text }: { text: string }) {
  return (
    <div className="relative">
      <span className="block absolute bg-white w-3.5 h-3.5 rounded-full -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2"></span>
      <span className="block absolute bg-white w-3.5 h-3.5 rounded-full -bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></span>
      <div className="rounded-md bg-orange bg-opacity-[8%] py-2 px-2.5">
        <p className="text-orange text-[10px] font-semibold">{text}</p>
      </div>
    </div>
  );
}
