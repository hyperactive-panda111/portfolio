import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "./lib/utils";
import localFont from 'next/font/local'; 
import GrainEffect from "@/components/visualEffects/grain-effects";

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"],  variable: '--font-oswald'});
const pixelFont = localFont({
  src: '../public/assets/fonts/pixel-font-7.ttf',
  variable: '--font-pixel',
})
export const metadata: Metadata = {
  title: "YAW MENSAH",
  description: "Yaw Mensah - Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, OswaldFont.variable, pixelFont.variable)}>
        <GrainEffect />
        {children}
      </body>
    </html>
  );
}