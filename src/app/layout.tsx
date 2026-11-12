// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import LenisProvider from "@/components/providers/LenisProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  title: "Ande Caleb — Data-Driven AI Solutions Expert",
  description:
    "AI/ML Engineer · Senior Software Developer · Enterprise Systems Architect. Building intelligent, data-driven systems with LangChain, LangGraph, RAG, and modern web technologies.",
  openGraph: {
    title: "Ande Caleb — Data-Driven AI Solutions Expert",
    description: "AI/ML Engineer · Senior Software Developer · Enterprise Systems Architect",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-[#02030a] text-white antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}