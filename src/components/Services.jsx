import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";
import {
  Server,
  Monitor,
  Layers,
  ShieldCheck,
  Cloud,
  Rocket,
} from "lucide-react";


const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const services = [
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust and scalable backend systems using Spring Boot, REST APIs, and secure authentication mechanisms.",
    points: [
      "RESTful API design",
      "Spring Boot & Java",
      "JWT-based authentication",
      "Database integration (MySQL)",
    ],
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    desc: "Modern, responsive, and accessible user interfaces using React and Tailwind CSS.",
    points: [
      "React component architecture",
      "Responsive UI design",
      "Tailwind CSS styling",
      "Performance optimization",
    ],
  },
  {
    icon: Layers,
    title: "Full Stack Solutions",
    desc: "End-to-end application development from idea to deployment-ready solutions.",
    points: [
      "Frontend + Backend integration",
      "REST API consumption",
      "Clean project structure",
      "Scalable architecture",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Application Security",
    desc: "Basic security best practices to ensure data protection and safe application usage.",
    points: [
      "Authentication & authorization",
      "Input validation",
      "Secure API access",
      "Error handling",
    ],
  },
  {
    icon: Cloud,
    title: "Deployment & Tools",
    desc: "Hands-on experience with modern tools for development, testing, and deployment.",
    points: [
      "Git & GitHub",
      "Postman API testing",
      "Basic AWS knowledge",
      "Environment configuration",
    ],
  },
  {
    icon: Rocket,
    title: "Project-Based Learning",
    desc: "I build real-world projects focused on problem-solving and practical implementation.",
    points: [
      "Booking systems",
      "Quiz & management apps",
      "Portfolio products",
      "Clean documentation",
    ],
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-32"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services & Expertise
          </h2>
          <p className="text-gray-400">
            I provide end-to-end development services focused on clean code,
            scalability, and real-world problem solving.
          </p>
        </motion.div>

        {}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -14, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative group bg-slate-900/70 border border-white/10 rounded-2xl p-6 overflow-hidden"
              >
                {}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl
                  bg-slate-800 border border-white/10 mb-4 text-cyan-400"
                >
                  <Icon size={22} />
                </motion.div>

                {}
                <h3 className="relative z-10 text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {}
                <p className="relative z-10 text-gray-400 mb-4">
                  {service.desc}
                </p>

                {}
                <ul className="relative z-10 text-sm text-gray-400 space-y-1">
                  {service.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      • {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
