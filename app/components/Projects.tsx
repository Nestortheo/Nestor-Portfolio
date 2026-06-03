import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24"
    >
      <div className="flex flex-col gap-12 items-center">

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-purple-400">
            My Projects
          </h2>
        </div>

        <ProjectCard
                title="Quartet Website"
                description="
                Elegant concert presentation platform
                with backend event management.
                "
                image="/quartet-hero.png"
                tags={[
                  "React",
                  "Django",
                  "API"
                ]}
                demoLink="https://quartet-frontend.vercel.app/"
                githubLink="https://github.com/Nestortheo/quartet-frontend"
              />
            <ProjectCard 
                title="Psychologist WebSite"
                description="
                  Modern and elegant website for a psychologist practice
                  based in Thessaloniki. Focused on clarity trust and professional
                  presentation
                "
                image="/hero.png"
                tags={[
                  "React",
                  "Django",
                  "Responsive"
                ]}
                demoLink="https://www.dimitrismichoudis.gr/"
                githubLink="https://github.com/Nestortheo/psych-site"
            />

      </div>
    </section>
  );
}