import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";




const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Nabarun Biswas Portfolio 2024",
    default: "Nabarun Biswas Portfolio 2024",
  },
  description:
    "A sleek portfolio crafted by Nabarun, using the magic of Next.js, Tailwind CSS, Three.js, and Framer Motion. Dive into the future of web design. Catch more on Algo Bot's YouTube channel!",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
       {/* Favicon */}
       <link rel="icon" href="/icons8-portfolio-100.png" />
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {/* <CustomParticleCursor /> */}
        <div className="flex-grow">
          {children}
          <FireFliesBackground />
          <Sound />
        </div>
        <p className="opacity-75 text-xs bg-transparent fixed bottom-2 left-2" style={{ color: "#f57c00" }}>
          © 2024 Nabarun Biswas. All rights reserved.
        </p>
        <div id="my-modal" />
      </body>
    </html>
  );
}
