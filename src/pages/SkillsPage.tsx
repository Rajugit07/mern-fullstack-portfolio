import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SkillsInfographic } from "../components/skills/SkillsInfographic";

/**
 * Skills Page — Isometric infographic-style layout.
 *
 * Features:
 * - "How I Build" hero with drop cap + exploded stack diagram
 * - 6 skill category cards with isometric SVG illustrations
 * - Technology lists with brand-colored dots
 * - Apple-inspired color scheme
 */
export const SkillsPage = () => {
    return (
        <>
            <Navbar />

            <main id="main-content" className="pt-20 md:pt-24">
                <SkillsInfographic />
            </main>

            <Footer />
        </>
    );
};
