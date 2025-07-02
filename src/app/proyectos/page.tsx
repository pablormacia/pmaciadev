// app/proyectos/page.tsx
import { ProjectCard, Project } from "@/components/custom/ProjectCard";

const projects: Project[] = [
  {
    title: "Macbory",
    description: "Gestión de órdenes de reparación con formulario público y panel de administración.",
    imageUrl: "/images/macbory.jpg",
    tech: ["Next.js", "Supabase", "Resend", "Tailwind"],
    link: "https://macbory.com.ar",
  },
  {
    title: "Milesi Hogar (en desarrollo)",
    description: "Ecommerce administrable de productos para el hogar, con atención personalizada por WhatsApp.",
    imageUrl: "/images/milesihogar.jpg",
    tech: ["Next.js", "Supabase", "Tailwind"],
    link: "https://milesihogar.vercel.app",
  },
  {
    title: "Mil sillas",
    description: "Página web tipo catálogo para la muestra de silals de fabricación local.",
    imageUrl: "/images/milsillas.jpg",
    tech: ["Next.js", "Json", "Tailwind"],
    link: "https://milsillas.com.ar",
  },
  {
    title: "Dividamos la cuenta",
    description: "App en beta abierta en Play Store para dividir gastos de manera simple.",
    imageUrl: "/images/dividamoslacuenta.jpeg",
    tech: ["React Native", "Expo", "Android"],
    link: "https://play.google.com/store/apps/details?id=com.pablormacia.dividamoslacuenta&pcampaignid=web_share",
  },
];

export default function ProyectosPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
