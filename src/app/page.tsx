import { ProjectCard } from "@/components/custom/ProjectCard";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-24">

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight transition-opacity duration-1000 opacity-0 animate-fade-in">
          Hola, soy Pablo Macia.
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          Desarrollador web y mobile. Trabajo con Next.js, Supabase y React Native
          para crear soluciones modernas, escalables y fáciles de usar.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a
            href="#proyectos"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Ver proyectos
          </a>

          <a
            href="/sobre-mi"
            className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Sobre mí
          </a>
        </div>
      </section>

      {/* PLESS – PROYECTO DESTACADO */}
      <section id="proyectos" className="space-y-10">
        <h2 className="text-3xl font-bold text-center">Proyecto destacado</h2>

        <div className="bg-white border rounded-xl shadow-sm p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* TEXTO */}
            <div className="space-y-5">
              <h3 className="text-2xl font-bold">Pless</h3>

              <p className="text-gray-600 leading-relaxed">
                Pless es una solución SaaS creada para pequeños comercios que necesitan
                mostrar un catálogo y recibir pedidos sin fricción.  
                Enfocado en velocidad, simpleza y escalabilidad, Pless permite a restaurantes
                y negocios locales gestionar productos, imágenes, variantes y disponibilidad
                desde un panel moderno, mientras que los clientes realizan pedidos en solo dos pasos.
              </p>

              {/* TECH */}
              <div className="flex gap-2 flex-wrap">
                {["Next.js", "Supabase", "Tailwind", "Resend"].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-md border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BOTONES */}
              <div className="flex gap-3 pt-3">
                <a
                  href="https://pless.com.ar"
                  target="_blank"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Ir a Pless
                </a>

                <a
                  href="https://pless.com.ar/pless-demo"
                  target="_blank"
                  className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Demo cliente
                </a>
              </div>
            </div>

            {/* IMAGEN */}
            <div className="relative">
              <img
                src="/images/pless-cover.png"
                alt="Pless Plataforma"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OTROS PROYECTOS */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Otros proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ProjectCard
            project={{
              title: "Macbory",
              description:
                "Gestión de órdenes de reparación con formulario público y panel de administración.",
              imageUrl: "/images/macbory.jpg",
              tech: ["Next.js", "Supabase", "Resend", "Tailwind"],
              link: "https://macbory.com.ar",
            }}
          />

          <ProjectCard
            project={{
              title: "Mil Sillas",
              description:
                "Catálogo web para mostrar productos de fabricación local, con diseño minimalista.",
              imageUrl: "/images/milsillas.jpg",
              tech: ["Next.js", "Tailwind"],
              link: "https://milsillas.com.ar",
            }}
          />

          <ProjectCard
            project={{
              title: "Dividamos la Cuenta",
              description:
                "App mobile para dividir gastos de manera simple y rápida. Disponible en beta abierta.",
              imageUrl: "/images/dividamoslacuenta.png",
              tech: ["React Native", "Expo", "Android"],
              link: "https://play.google.com/store/apps/details?id=com.pablormacia.dividamoslacuenta",
            }}
          />
        </div>
      </section>

    </main>
  );
}
