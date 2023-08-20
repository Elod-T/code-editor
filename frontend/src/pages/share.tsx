import { useEffect } from "react";
import BaseLayout from "../layouts/baseLayout";
import { useLocalStorage } from "usehooks-ts";
import { Project } from "../interfaces/project";
import { generate } from "random-words";
import { useNavigate } from "react-router-dom";

export default function Share() {
  const [projects, setProjects] = useLocalStorage<Project[]>("projects", []);
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const name = url.searchParams.get("name");
    const htmlCode = url.searchParams.get("htmlCode");
    const cssCode = url.searchParams.get("cssCode");
    const jsCode = url.searchParams.get("jsCode");

    if (!name || !htmlCode || !cssCode || !jsCode) {
      navigate("/", { replace: true });
      return;
    }

    const id = generate({
      exactly: 3,
      formatter(word, index) {
        return index === 0 ? word[0].toUpperCase() + word.slice(1) : word;
      },
      join: "",
    }).toLowerCase();

    const newProject = {
      name,
      id,
    };

    setProjects([...projects, newProject]);

    localStorage.setItem(
      `code-${newProject.id}`,
      JSON.stringify({
        name,
        htmlCode,
        cssCode,
        jsCode,
      })
    );
    navigate(`/editor/${newProject.id}`, { replace: true });
  }, []);
  return <BaseLayout>hello</BaseLayout>;
}
