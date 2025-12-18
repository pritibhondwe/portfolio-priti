import { useScrollSpy, scrollToSection } from "../hooks/useScrollSpy";

const sections = ["home", "about", "services", "skills", "projects", "contact"];

export default function Navbar() {
  const active = useScrollSpy(sections);

  return (
    <nav className="fixed top-0 w-full h-[70px] z-50 backdrop-blur bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
        <h1 className="font-bold tracking-widest text-cyan-400">
          PRITI'S PORTFOLIO
        </h1>

        <ul className="flex gap-8">
          {sections.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`relative capitalize font-medium transition ${
                  active === id
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {id}
                {active === id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 rounded" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
