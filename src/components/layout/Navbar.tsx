import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 max-w-6xl mx-auto">
      <Link href="/" className="font-semibold text-lg tracking-tight">
        Pablo Macia
      </Link>

      <div className="flex gap-6 text-sm text-gray-700">
        <Link href="/" className="hover:text-blue-600">Inicio</Link>
        <Link href="/sobre-mi" className="hover:text-blue-600">Sobre mí</Link>
        <Link href="/contacto" className="hover:text-blue-600">Contacto</Link>
      </div>
    </nav>
  );
}
