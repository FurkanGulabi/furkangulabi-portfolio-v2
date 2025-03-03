import ProjectCard from "@/components/ProjectCard";
import Projects from "@/data/projects.json";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

import React, { Suspense } from "react";

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
  // Get the locale using getLocale instead of from params
  const locale = await getLocale();
  setRequestLocale(locale);

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {Projects.map((project) => (
            <Suspense key={project.id}>
              <ProjectCard
                description={project.description}
                githubUrl={project.githubUrl}
                image={project.images}
                key={project.title}
                liveUrl={project.liveUrl}
                tags={project.tags}
                title={project.title}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </main>
  );
}
