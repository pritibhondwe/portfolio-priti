import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/15 blur-3xl rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/15 blur-3xl rounded-full"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate Java Full Stack Developer focused on building scalable,
            reliable, and user-centric web applications.
          </p>
        </motion.div>

        {}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-slate-900/70 border border-white/10
          rounded-3xl p-10 backdrop-blur-xl shadow-xl"
        >
          <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed mb-6">
            I’m <span className="text-cyan-400 font-semibold">Priti Bhondwe</span>,
            a <strong>Java Full Stack Developer</strong> with hands-on experience
            in building complete web applications using
            <strong> Spring Boot, REST APIs, MySQL, React, and Tailwind CSS</strong>.
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed mb-6">
            My interest in development grew from curiosity about how systems work
            behind the scenes. This curiosity turned into practical experience
            through real-world projects like booking systems, quiz platforms,
            and portfolio-driven applications.
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
            I believe in writing <strong>clean, maintainable code</strong> and
            following best practices such as modular design, RESTful architecture,
            and performance optimization while continuously learning new tools
            and technologies.
          </motion.p>
        </motion.div>

        {}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Projects Built", value: "5+" },
            { label: "Tech Stack", value: "Full Stack" },
            { label: "Backend Focus", value: "Spring Boot" },
            { label: "Frontend Focus", value: "React" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.05 }}
              className="bg-slate-900/70 border border-white/10 rounded-2xl
              p-6 text-center backdrop-blur-xl"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-24 space-y-8"
        >
          {[
            {
              title: "What I Do",
              text:
                "Design and build RESTful APIs, develop responsive React interfaces, and integrate databases with clean architecture.",
            },
            {
              title: "My Strengths",
              text:
                "Strong fundamentals in OOP, problem-solving mindset, adaptability to new technologies, and teamwork.",
            },
            {
              title: "Career Goal",
              text:
                "To grow as a full-stack engineer by contributing to scalable systems and impactful products.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative pl-8 border-l border-white/10"
            >
              <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-cyan-400" />
              <h4 className="text-xl font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 max-w-3xl">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
