import { Inter } from "next/font/google";
import { Landing } from "@/components/landing";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Landing/>
  );
}
