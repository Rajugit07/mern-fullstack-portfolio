import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/home/Hero";
import { ProjectGrid } from "../components/home/ProjectGrid";
import { Container } from "../components/ui/Container";

/**
 * Home Page — Instrument-style portfolio.
 *
 * Composition:
 * 1. Navbar (minimal: Name © + nav links)
 * 2. Hero (large serif introduction heading)
 * 3. Project grid (massive images, 2-column, labels inside cards)
 * 4. Footer (serif CTA "Get in touch" + email + socials)
 */
export const HomePage = () => {
  return (
    <>
      <Navbar />

      <main id="main-content" className="pt-20 md:pt-24">
        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <Container as="section" className="pb-24 md:pb-32">
          <ProjectGrid />
        </Container>
      </main>

      <Footer />
    </>
  );
};
