"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => (
  <header className="w-full max-w-6xl mx-auto px-4 py-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Logo + Nombre */}
      <Link
        href="/"
        className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="object-contain"
        />
        <span className="text-xl font-semibold text-center">
          Pablo Macia <span className="text-sm text-gray-500">(Dev)</span>
        </span>
      </Link>

      {/* Navegación */}
      <nav className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm font-medium">
        <Link href="/proyectos" className="hover:text-blue-600 transition-colors">Proyectos</Link>
        <Link href="/servicios" className="hover:text-blue-600 transition-colors">Servicios</Link>
        <Link href="/sobre-mi" className="hover:text-blue-600 transition-colors">Sobre mí</Link>
        <Link href="/contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
      </nav>
    </div>
  </header>
);

export default Header;
