import { motion } from "framer-motion";
import { staggerContainer } from "../../lib/animations";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

/**
 * Project grid — Instrument-style 2-column layout.
 *
 * Design (from instrument.framer.website):
 * - Desktop: 2 columns with generous gap (~20px)
 * - Images are massive, filling the columns
 * - Mobile: 1 column, full width
 * - Staggered scroll-triggered reveal
 */
export const ProjectGrid = () => {
  return (
    <motion.section
      id="projects"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="grid grid-cols-1 gap-5 md:grid-cols-2"
      aria-label="Featured projects"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </motion.section>
  );
};
