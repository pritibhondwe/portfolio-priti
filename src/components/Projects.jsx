import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tourist Management System",
    category: "Full Stack",
    image: "/project1.jpg",
    description:
      "Manage tourist packages, bookings, guides, and destinations using a centralized system.",
    problem:
      "Manual tourist management caused inefficiencies and booking errors.",
    solution:
      "Built a role-based full-stack application using REST APIs.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com/yourusername/tourist-management",
    live: "https://tourist-demo.vercel.app",
  },
  {
    id: 2,
    title: "Online Cab Booking System",
    category: "Backend",
    image: "/project2.jpg",
    description:
      "A cab booking platform with ride management and fare calculation.",
    problem:
      "Users needed a reliable system to book and track cab rides.",
    solution:
      "Designed scalable APIs and booking logic using Spring Boot.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/yourusername/cab-booking",
    live: "https://cab-demo.vercel.app",
  },
  {
    id: 3,
    title: "E-Commerce Web Application",
    category: "Frontend",
    image: "/project3.jpg",
    description:
      "Modern e-commerce UI with product browsing and cart features.",
    problem:
      "Small businesses required a responsive online storefront.",
    solution:
      "Built a reusable React UI with clean UX and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Spring Boot"],
    github: "https://github.com/yourusername/ecommerce-app",
    live: "https://ecommerce-demo.vercel.app",
  },
];

const filters = ["All", "Full Stack", "Backend", "Frontend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-6">

        {}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400">
            Full-stack projects with real-world problem solving.
          </p>
        </div>

        {}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border transition ${
                activeFilter === filter
                  ? "bg-cyan-500 text-black border-cyan-400"
                  : "border-white/15 text-gray-300 hover:border-cyan-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        { }
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              whileHover={{ y: -12, rotateX: 6, rotateY: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative bg-slate-900/70 border border-white/10 rounded-2xl overflow-hidden"
            >
              { }
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              { }
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                { }
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-cyan-400 hover:underline"
                  >
                    Live <ExternalLink size={15} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
                  >
                    GitHub <Github size={15} />
                  </a>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="ml-auto text-sm text-purple-400 hover:underline"
                  >
                    Case Study →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      { }
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 max-w-3xl w-full rounded-2xl p-8 relative"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X />
              </button>

              <h3 className="text-2xl font-bold mb-4">
                {activeProject.title}
              </h3>

              <div className="space-y-4 text-gray-400">
                <p><strong className="text-white">Problem:</strong> {activeProject.problem}</p>
                <p><strong className="text-white">Solution:</strong> {activeProject.solution}</p>
                <p><strong className="text-white">Tech Stack:</strong> {activeProject.tech.join(", ")}</p>
              </div>

              <div className="flex gap-6 mt-6">
                <a
                  href={activeProject.live}
                  target="_blank"
                  className="flex items-center gap-2 text-cyan-400"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
                <a
                  href={activeProject.github}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300"
                >
                  GitHub <Github size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
