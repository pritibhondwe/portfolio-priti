import { useScrollReveal } from "../hooks/useScrollReveal";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  useScrollReveal(".section-title", { origin: "top", distance: "40px", delay: 100 });
  useScrollReveal(".contact-left", { origin: "left", distance: "60px", delay: 200 });
  useScrollReveal(".contact-right", { origin: "right", distance: "60px", delay: 300 });

  return (
    <section
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-green-500/20 blur-3xl rounded-full" />
      </div>

      {}
      <div className="relative max-w-6xl mx-auto px-6">
        
        {}
        <div className="section-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Let’s discuss how we can bring your ideas to life.
          </p>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {}
          <div className="contact-left bg-slate-900/70 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Priti"
                  className="w-full p-4 rounded-lg bg-slate-800 border border-white/10
                  focus:border-green-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="bhondwep88@gmail.com"
                  className="w-full p-4 rounded-lg bg-slate-800 border border-white/10
                  focus:border-green-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full p-4 rounded-lg bg-slate-800 border border-white/10
                  focus:border-green-400 outline-none resize-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-lg
                bg-gradient-to-r from-green-500 to-lime-400 text-black font-semibold
                hover:scale-[1.02] transition"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {}
          <div className="contact-right space-y-8">
            
            <div>
              <h3 className="text-2xl font-semibold mb-2">Let’s Connect</h3>
              <p className="text-gray-400">
                I’m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

            {}
            <div className="flex items-center gap-4 bg-slate-900/70 border border-white/10 rounded-xl p-5">
              <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">bhondwep88@gmail.com</p>
              </div>
            </div>

            {}
            <div className="flex items-center gap-4 bg-slate-900/70 border border-white/10 rounded-xl p-5">
              <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Pune, India</p>
              </div>
            </div>

            {}
            <div>
              <p className="text-sm text-gray-400 mb-3">Connect with me</p>

              <div className="flex gap-4">
                
                {}
                <a
                  href="https://github.com/pritibhondwe" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg
                  bg-slate-900 border border-white/10 text-gray-400
                  hover:text-green-400 hover:border-green-400 hover:scale-110
                  transition"
                >
                  <Github size={20} />
                </a>

                {}
                <a
                  href="https://www.linkedin.com/in/priti-bhondwe-96015824a" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg
                  bg-slate-900 border border-white/10 text-gray-400
                  hover:text-green-400 hover:border-green-400 hover:scale-110
                  transition"
                >
                  <Linkedin size={20} />
                </a>

                {/* Twitter (Optional) */}
                <a
                  href="https://twitter.com/YOUR_TWITTER_USERNAME" // CHANGE THIS or remove
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg
                  bg-slate-900 border border-white/10 text-gray-400
                  hover:text-green-400 hover:border-green-400 hover:scale-110
                  transition"
                >
                  <Twitter size={20} />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
