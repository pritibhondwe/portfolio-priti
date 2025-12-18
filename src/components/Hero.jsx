import { motion, useMotionValue, useTransform } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations/motionVariants";
import { scrollToSection } from "../hooks/useScrollSpy";
import profileImg from "../assets/profile.jpg";
import { useEffect, useState } from "react";


const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const roles = [
  "Java Full Stack Developer",
  "Spring Boot Backend Engineer",
  "React Frontend Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
  const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-[70px] flex items-center overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.width / 2);
        mouseY.set(e.clientY - rect.height / 2);
      }}
    >
      {}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

        {}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {}
          <motion.span
            variants={fadeUp}
            className="inline-block mb-4 px-4 py-1 rounded-full
            border border-cyan-400 text-cyan-400 text-sm"
          >
            🚀 Open to Full-Time Role
          </motion.span>

          {}
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Priti Bhondwe
            </span>
          </motion.h1>

          {}
          <motion.div
            variants={fadeUp}
            className="h-8 overflow-hidden mt-4"
          >
            <motion.p
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl text-cyan-400 font-medium"
            >
              {roles[roleIndex]}
            </motion.p>
          </motion.div>

          {}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-6 max-w-xl"
          >
            I build <strong>production-ready applications</strong> with clean
            architecture, scalable backend APIs, and modern React UIs —
            focused on performance, maintainability, and real-world use cases.
          </motion.p>

          {}
          <motion.div
            variants={fadeUp}
            className="flex gap-3 flex-wrap mt-6"
          >
            {["Spring Boot", "React", "REST APIs", "MySQL", "Git"].map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm rounded-full
                bg-slate-900 border border-white/10 text-gray-300"
              >
                {item}
              </span>
            ))}
          </motion.div>

          { }
          <motion.div variants={fadeUp} className="flex gap-4 mt-10 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-full
              bg-gradient-to-r from-cyan-400 to-purple-500
              font-semibold shadow-lg"
            >
              Let’s Build Something
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20
              hover:border-cyan-400 transition"
            >
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>

        { }
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          style={{ rotateX, rotateY }}
          className="relative flex justify-center"
        >
          { }
          <motion.div
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px]
            rounded-full bg-gradient-to-r from-cyan-400 to-purple-500
            blur-3xl opacity-25"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {}
          <motion.img
            src={profileImg}
            alt="Priti Bhondwe"
            className="relative z-10 w-[280px] md:w-[360px]
            rounded-3xl border border-white/20 shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

      </div>
    </section>
  );
}
