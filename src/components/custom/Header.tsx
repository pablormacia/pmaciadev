"use client";

import Link from "next/link";

const Header = () => (
  <header className="w-full max-w-5xl mx-auto py-6 px-4 flex justify-between items-center">
    <Link href="/" className="text-xl font-semibold hover:opacity-80 transition">
      Pablo Macia
    </Link>
    <nav className="space-x-6 text-sm font-medium">
      <Link href="/proyectos" className="hover:text-blue-600 transition-colors">Proyectos</Link>
      <Link href="/servicios" className="hover:text-blue-600 transition-colors">Servicios</Link>
      <Link href="/sobre-mi" className="hover:text-blue-600 transition-colors">Sobre mí</Link>
      <Link href="/contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
    </nav>
  </header>
);

export default Header