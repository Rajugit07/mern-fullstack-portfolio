import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { CaseStudyHero } from "../components/casestudy/CaseStudyHero";
import { CaseStudyMetadata } from "../components/casestudy/CaseStudyMetadata";
import { CaseStudySections } from "../components/casestudy/CaseStudySections";
import { RelatedWork } from "../components/casestudy/RelatedWork";
import { Container } from "../components/ui/Container";
import { getProjectBySlug, getRelatedProjects } from "../data/projects";

/**
 * Case Study Page — Instrument-style pixel-perfect.
 *
 * Sections (top to bottom):
 * 1. Navbar
 * 2. Hero (eyebrow → headline at 25% → full-width image)
 * 3. Metadata (Details label at 25% → table at 50%)
 * 4. Content sections (label at 25% → heading/body at 50% → images)
 * 5. Related work (label at 25% → heading at 50% → 3-col grid)
 * 6. Footer
 */
export const CaseStudyPage = () => {
    const { slug } = useParams<{ slug: string }>();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const project = slug ? getProjectBySlug(slug) : undefined;

    if (!project) {
        return (
            <>
                <Navbar />
                <main className="pt-40 pb-40" id="main-content">
                    <Container>
                        <h1 className="text-headline text-primary">
                            Project not found
                        </h1>
                        <p className="text-body-lg text-secondary mt-4">
                            The project you're looking for doesn't exist.
                        </p>
                        <a
                            href="/"
                            className="text-label text-primary mt-8 inline-block border-b border-primary pb-1 transition-opacity hover:opacity-60"
                        >
                            ← Back to Home
                        </a>
                    </Container>
                </main>
                <Footer />
            </>
        );
    }

    // Coming Soon state
    if (project.comingSoon || !project.caseStudy) {
        return (
            <>
                <Navbar />
                <main
                    className="pt-28 pb-24 md:pt-36 md:pb-32"
                    id="main-content"
                >
                    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                        <p className="text-label text-tertiary mb-6">
                            Case Study
                        </p>
                        <h1 className="text-headline text-primary mb-4">
                            {project.title}
                        </h1>
                        <span className="text-label text-tertiary border border-outline-variant rounded-[var(--radius-nav)] px-6 py-2.5 mb-8">
                            Coming Soon
                        </span>
                        <p className="text-body-lg text-secondary max-w-md mb-10 leading-relaxed">
                            This case study is currently being crafted. Check
                            back soon for the full breakdown.
                        </p>
                        <a
                            href="/"
                            className="text-label text-primary border-b border-primary pb-1 transition-opacity hover:opacity-60"
                        >
                            ← Back to Home
                        </a>
                    </Container>
                </main>
                <Footer />
            </>
        );
    }

    const relatedProjects = getRelatedProjects(
        project.caseStudy.relatedProjectIds
    );

    return (
        <>
            <Navbar />

            <main id="main-content">
                {/* Hero: eyebrow + headline + hero image */}
                <CaseStudyHero
                    title={project.title}
                    category={project.category}
                    caseStudy={project.caseStudy}
                    heroImage={project.image}
                />

                {/* Metadata: Details table */}
                <CaseStudyMetadata caseStudy={project.caseStudy} />

                {/* Content sections: heading + body + images */}
                <CaseStudySections sections={project.caseStudy.sections} />

                {/* Related work: 3-column grid */}
                <RelatedWork projects={relatedProjects} />
            </main>

            <Footer />
        </>
    );
};
