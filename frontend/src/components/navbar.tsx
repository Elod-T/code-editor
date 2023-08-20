import NewProject from "./projects/newProject";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-screen text-bg-0 shadow-lg z-40">
      <div className="flex items-center justify-between flex-wrap bg-fg p-6">
        <div className="flex items-center flex-shrink-0  mr-6">
          <a href="/" className="font-semibold text-xl tracking-tight">
            CodeWave
          </a>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/docs"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-fg-0 mr-4"
            >
              Docs
            </a>
            <a
              href="/examples"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-fg-0 mr-4"
            >
              Examples
            </a>
          </div>
          <div>
            <NewProject />
          </div>
        </div>
      </div>
    </nav>
  );
}
