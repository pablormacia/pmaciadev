import Image from "next/image";

export default function SobreMiPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-center">Sobre mí</h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-40 md:w-48 aspect-square relative rounded-full overflow-hidden border shadow-md shrink-0">
          <Image
            src="/images/pablo.jpg"
            alt="Pablo Macia"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-gray-700 text-base space-y-4">
          <p>
            Soy Pablo Macia, desarrollador web y mobile con foco en soluciones
            prácticas y escalables para negocios reales. Trabajo principalmente
            con Next.js, Supabase y React Native.
          </p>
          <p>
            Vengo del mundo real: entiendo las necesidades de un técnico que
            quiere organizarse, o de un comercio que quiere vender más. Por eso
            me gusta construir cosas simples que funcionen.
          </p>
          <p>
            Tengo experiencia liderando proyectos propios, gestionando equipos y
            trabajando en distintas etapas del desarrollo, desde la idea hasta
            la puesta en producción.
          </p>
          <p>
            Además, doy clases de programación en colegios y bootcamps,
            compartiendo mi experiencia con quienes están dando sus primeros
            pasos en el desarrollo de software.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/pablomacia/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              LinkedIn →
            </a>
            <a
              href="https://github.com/pablormacia"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHub →
            </a>
            <a
              href="/CV_Pablo_Macia.pdf"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Descargar CV →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
