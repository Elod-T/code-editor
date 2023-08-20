import ProjectsList from "../components/projects/projectsList";
import BaseLayout from "../layouts/baseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <main className="w-fit mx-auto mt-20">
        <h1 className="text-5xl text-fg font-bold mb-10">My Projects</h1>

        <ProjectsList />
      </main>
    </BaseLayout>
  );
}
