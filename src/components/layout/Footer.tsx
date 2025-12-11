export default function Footer() {
  return (
    <footer className="border-t mt-20 py-10 text-center text-gray-600">
      <p className="mb-3">Desarrollado por Pablo Macia</p>

      <div className="flex justify-center gap-6 text-sm">
        <a href="https://linkedin.com/in/pablomacia" target="_blank" className="hover:text-blue-600">
          LinkedIn
        </a>
        <a href="https://github.com/pablormacia" target="_blank" className="hover:text-blue-600">
          GitHub
        </a>
        <a href="mailto:pr.macia@gmail.com" className="hover:text-blue-600">
          Contacto
        </a>
      </div>
    </footer>
  );
}
