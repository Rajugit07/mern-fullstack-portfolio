import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, imageZoom } from "../../lib/animations";
import type { Project } from "../../types";

interface ProjectCardProps {
    project: Project;
    index: number;
}

/**
 * Project card — Instrument-style large image presentation.
 *
 * - Uses React Router Link for client-side navigation
 * - Massive 4:5 images with labels inside the card
 * - Hover zoom with spring physics
 * - Coming Soon overlay for unreleased projects
 */
export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const cardContent = (
        <motion.div
            className="relative overflow-hidden rounded-[var(--radius-card)] bg-surface-container"
            initial="rest"
            whileHover={project.comingSoon ? undefined : "hover"}
            animate="rest"
        >
            {/* Landscape aspect ratio for project screenshots */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
                <motion.img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className={`absolute inset-0 h-full w-full object-cover object-top ${project.comingSoon ? "opacity-40 grayscale" : ""}`}
                    variants={project.comingSoon ? undefined : imageZoom}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                />
            </div>

            {/* Labels INSIDE the card — top-left overlay */}
            <div className="absolute top-5 left-5 z-10 md:top-7 md:left-7">
                <h3 className="text-title text-primary">{project.title}</h3>
                <p className="text-body-sm text-secondary mt-0.5">
                    {project.category}
                </p>
            </div>

            {/* Coming Soon badge — centered */}
            {project.comingSoon && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <span className="text-label text-tertiary border border-outline-variant rounded-[var(--radius-nav)] px-5 py-2 bg-surface/80 backdrop-blur-sm">
                        Coming Soon
                    </span>
                </div>
            )}
        </motion.div>
    );

    return (
        <motion.article
            variants={fadeInUp}
            className={`group ${project.comingSoon ? "cursor-default" : "cursor-pointer"}`}
            aria-label={`${project.title} — ${project.category}`}
        >
            {project.comingSoon ? (
                <div className="block">{cardContent}</div>
            ) : (
                <Link to={`/work/${project.slug}`} className="block">
                    {cardContent}
                </Link>
            )}
        </motion.article>
    );
};
