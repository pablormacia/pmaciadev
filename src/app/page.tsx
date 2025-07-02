export default function Home() {
  return (
    <section className="text-center max-w-3xl space-y-6">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight transition-opacity duration-1000 opacity-0 animate-fade-in">
        Hola, soy Pablo Macia.
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        Desarrollador web y mobile. Trabajo con Next.js, Supabase y React Native para crear soluciones modernas, escalables y fáciles de usar.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
        <a href="/servicios" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          ¿Sos un negocio? Mirá lo que puedo hacer
        </a>
        <a href="/sobre-mi" className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
          ¿Sos reclutador? Conoceme
        </a>
      </div>
    </section>
  );
}
