// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pablo Macia | Portfolio",
  description: "Desarrollador web y mobile - Next.js, Supabase, React Native",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={cn("min-h-screen bg-white text-gray-900 antialiased", inter.className)}>
        <Navbar />
        <main className="flex flex-col items-center justify-center px-4 py-12 animate-fade-in">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
