import { useLocalStorage } from "usehooks-ts";
import NewProject from "./newProject";
import type { Project } from "../../interfaces/project";

export default function ProjectsList() {
  const [projects, setProjects] = useLocalStorage<Project[]>("projects", []);

  const removeProject = (id: string) => {
    const filteredProjects = projects.filter((project) => project.id !== id);
    setProjects(filteredProjects);

    localStorage.removeItem(`code-${id}`);
  };

  return (
    <div>
      <ul className="mb-10">
        {projects.map((project, index) => (
          <li key={project.id} className="text-fg font-bold mb-2 underline">
            <a href={`/editor/${project.id}`}>
              #{index + 1} {project.name}
            </a>
            <button className="ml-2" onClick={() => removeProject(project.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <NewProject />
    </div>
  );
}
