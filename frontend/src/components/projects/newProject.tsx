import { generate } from "random-words";
import { useLocalStorage } from "usehooks-ts";
import type { Project } from "../../interfaces/project";

interface Props {
  className?: string;
}

export default function NewProject({ className }: Props) {
  const [projects, setProjects] = useLocalStorage<Project[]>("projects", []);

  const handleNewProject = () => {
    const name = generate({
      exactly: 3,
      formatter(word, index) {
        return index === 0 ? word[0].toUpperCase() + word.slice(1) : word;
      },
      join: "",
    });
    setProjects([...projects, { name, id: name.toLowerCase() }]);
    localStorage.setItem(
      `code-${name}`,
      `{"name":"${name}","htmlCode":"","cssCode":"","jsCode":""}`
    );

    window.location.href = `/editor/${name.toLowerCase()}`;
  };
  return (
    <button
      className={
        className +
        " inline-block py-2 px-4 text-gray-800 font-medium bg-fg duration-150 hover:bg-fg-2 active:bg-fg-0 rounded-lg shadow-md hover:shadow-none font-retro cursor-pointer"
      }
      onClick={handleNewProject}
    >
      New Project
    </button>
  );
}
