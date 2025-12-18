import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-gray-400 overflow-hidden">
      
      {}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        
        {}
        <div className="grid md:grid-cols-3 gap-10 items-center text-center md:text-left">

          {}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Priti Bhondwe
            </h3>
            <p className="text-sm">
              Java Full Stack Developer building scalable and user-centric
              applications.
            </p>
          </div>

          {}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-cyan-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          { }
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/pritibhondwe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg
                bg-slate-900 border border-white/10 hover:text-white
                hover:border-cyan-400 hover:scale-110 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/priti-bhondwe-96015824a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg
                bg-slate-900 border border-white/10 hover:text-white
                hover:border-cyan-400 hover:scale-110 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://twitter.com/YOUR_TWITTER_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg
                bg-slate-900 border border-white/10 hover:text-white
                hover:border-cyan-400 hover:scale-110 transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="mailto:bhondwep88@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg
                bg-slate-900 border border-white/10 hover:text-white
                hover:border-cyan-400 hover:scale-110 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {}
        <div className="my-10 border-t border-white/10" />

        {}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-400 font-medium">Priti Bhondwe</span>
          . Built with{" "}
          <span className="text-white">React</span> &{" "}
          <span className="text-white">Tailwind CSS</span>.
        </div>
      </div>
    </footer>
  );
}
