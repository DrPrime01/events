import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Events",
  description: "Search for events closeby",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="md:py-20 md:px-[180px] p-6 bg-bg_color">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
