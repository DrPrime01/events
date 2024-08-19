import Link from "next/link";

export default function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link
      href={link}
      target="_blank"
      className="rounded-md w-fit border border-tertiary py-2 px-3.5 text-tertiary text-xs font-semibold bg-transparent"
    >
      {text}
    </Link>
  );
}
