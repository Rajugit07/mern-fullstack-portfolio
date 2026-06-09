import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import { Container } from "../ui/Container";

/**
 * Hero section — Instrument-style large serif introduction.
 *
 * - Left-aligned text
 * - Muted gray for body, dark for name (italic)
 * - Tight spacing to project grid below
 */
export const Hero = () => {
    return (
        <section
            className="pt-32 pb-12 md:pt-64 md:pb-8"
            aria-label="Introduction"
        >
            <Container className="md:pl-[22%]">
                <motion.h1
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-headline text-tertiary lg:pl-[22%]"
                >
                    Nice to meet you!
                    <br />I am <em className="text-primary">Raju.</em> A
                    full-stack MERN
                    <br className="hidden md:block" /> developer.
                </motion.h1>
            </Container>
        </section>
    );
};
