import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Grainulator — Granular Synthesis Workstation for macOS",
  description:
    "A macOS granular/wavetable synthesizer with sequencer, effects, mixer, hardware controller support, and AI conversational control.",
  openGraph: {
    title: "Grainulator",
    description: "Granular synthesis workstation for macOS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg-primary font-sans antialiased">{children}</body>
    </html>
  );
}
