import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import { Container } from "../ui/Container";
import { siteConfig } from "../../data/siteConfig";

/**
 * Footer — Instrument-style with large serif CTA.
 *
 * Design (from instrument.framer.website):
 * - Large serif "Get in touch" heading
 * - Email link prominently displayed
 * - Social links in a clean row
 * - © year at bottom
 * - Generous vertical padding
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-outline-variant pt-20 pb-10 md:pt-32 md:pb-12"
      role="contentinfo"
    >
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-10 md:gap-16"
        >
          {/* Large Serif CTA */}
          <div>
            <h2 className="text-headline text-primary">
              Get in touch
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-headline text-secondary mt-2 block transition-colors duration-300 hover:text-primary"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Bottom row: Socials + Copyright */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* Social Links */}
            <nav aria-label="Social links">
              <ul className="flex flex-wrap items-center gap-6" role="list">
                {siteConfig.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-label text-secondary transition-colors duration-300 hover:text-primary"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Copyright */}
            <p className="text-label text-tertiary">
              © {currentYear}
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};
