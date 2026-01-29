import type { Metadata } from "next";
import { Exo, Roboto_Mono } from "next/font/google"; // Tech-style fonts
import "./globals.css";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Nexus | Intelligence Unleashed",
  description: "Explore the bleeding edge of Artificial Intelligence models.",
};

import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import WeatherWidget from "@/components/WeatherWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.variable} ${robotoMono.variable} antialiased`}
      >
        <BackgroundEffect />
        <Navbar />
        <WeatherWidget />
        <div className="relative z-10 pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
