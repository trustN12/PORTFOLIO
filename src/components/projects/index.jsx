"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

// New Disney-like smooth fade-in with a subtle zoom-in effect
const item = {
  hidden: { opacity: 0, y: 50, scale: 1 },  // No scaling animation
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,  // Keeping the scale consistent
    transition: { 
      type: "spring", 
      stiffness: 120, 
      damping: 15,
      duration: 0.6,  // Smooth and quick transition
      ease: "easeOut",  // Smooth ease-out for deceleration
    }
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // Items appear one after another
      delayChildren: 0.3,  // Slight delay for anticipation
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-[90%] sm:w-[80%] xs:w-[70%] md:w-[80%] lg:w-[85%] xl:w-[90%] px-4 mx-auto space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projects.map((project, index) => {
        return (
          <motion.div key={index} variants={item}>
            <ProjectLayout {...project} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ProjectList;
