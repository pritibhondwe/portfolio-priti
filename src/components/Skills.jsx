import { motion, useMotionValue, useTransform } from "framer-motion";

const skills = [
  { name: "Java", value: 85 },
  { name: "Spring Boot", value: 80 },
  { name: "React", value: 75 },
  { name: "JavaScript", value: 75 },
  { name: "Tailwind CSS", value: 80 },
  { name: "MySQL", value: 70 },
];

const radius = 50;
const circumference = 2 * Math.PI * radius;

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">Skills & Expertise</h2>
          <p className="text-gray-400">
            Interactive 3D skill visualization
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-14 place-items-center">
          {skills.map((skill) => (
            <TiltSkill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}



function TiltSkill({ skill }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const offset =
    circumference - (skill.value / 100) * circumference;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative flex flex-col items-center gap-4"
    >
      {}
      <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition duration-500 bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />

      {}
      <div
        className="relative w-28 h-28"
        style={{ transform: "translateZ(40px)" }}
      >
        <svg
          className="w-full h-full rotate-[-90deg]"
          viewBox="0 0 120 120"
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="rgb(30 41 59)"
            strokeWidth="10"
            fill="none"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
          {skill.value}%
        </div>
      </div>

      <span
        className="text-sm text-gray-300 group-hover:text-white transition"
        style={{ transform: "translateZ(25px)" }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}
