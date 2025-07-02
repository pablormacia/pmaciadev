// components/ProjectCard.tsx
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  link?: string;
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <h3 className="text-xl font-semibold">{project.title}</h3>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover rounded"
          />
        </div>
        <p className="text-gray-600 text-sm mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
          {project.tech.map((t) => (
            <span key={t} className="bg-gray-100 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </CardContent>
      {project.link && (
        <CardFooter>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Ver proyecto →
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

