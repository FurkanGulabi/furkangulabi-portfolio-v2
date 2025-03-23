import ProjectCard from "@/components/ProjectCard";
import Projects from "@/data/projects.json";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations({
    locale: locale,
    namespace: "ProjectsPage",
  });

  return {
    title: t("PageTitle"),
  };
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  setRequestLocale(locale);

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {Projects.map((project) => (
            <ProjectCard
              key={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              image={project.images} // Pass the full images object
              liveUrl={project.liveUrl}
              tags={project.tags}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
