import { useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navReveal } from "../../lib/animations";
import { siteConfig } from "../../data/siteConfig";

/**
 * Navbar — Instrument-style minimal navigation.
 * Handles both route links and hash scroll links (e.g. /#projects).
 */
export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    /** Handle clicks on links that might be hash-based (e.g. /#projects) */
    const handleNavClick = useCallback(
        (e: React.MouseEvent, href: string) => {
            // Check if it's a hash link like /#projects
            if (href.includes("#")) {
                e.preventDefault();
                const [path, hash] = href.split("#");
                const targetPath = path || "/";

                if (location.pathname === targetPath) {
                    // Already on the correct page — just scroll
                    const el = document.getElementById(hash);
                    el?.scrollIntoView({ behavior: "smooth" });
                } else {
                    // Navigate to the page first, then scroll after render
                    navigate(targetPath);
                    setTimeout(() => {
                        const el = document.getElementById(hash);
                        el?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                }
                closeMenu();
            }
        },
        [location.pathname, navigate, closeMenu],
    );

    /** Check if a link is a hash link */
    const isHashLink = (href: string) => href.includes("#");

    return (
        <motion.header
            variants={navReveal}
            initial="hidden"
            animate="visible"
            className="fixed top-0 right-0 left-0 z-50"
        >
            <div className="container-wide">
                <nav
                    className="flex items-center justify-between py-5 md:py-6"
                    role="navigation"
                    aria-label="Main navigation"
                >
                    {/* Left: Name © */}
                    <Link
                        to="/"
                        className="text-label text-primary"
                        aria-label={`${siteConfig.name} — Home`}
                    >
                        {siteConfig.name} ©
                    </Link>

                    {/* Right: Desktop Nav Links */}
                    <ul
                        className="hidden items-center gap-8 md:flex"
                        role="list"
                    >
                        {siteConfig.navLinks.map((link) => (
                            <li key={link.href}>
                                {isHashLink(link.href) ? (
                                    <a
                                        href={link.href}
                                        onClick={(e) =>
                                            handleNavClick(e, link.href)
                                        }
                                        className="text-label text-secondary transition-colors duration-300 hover:text-primary cursor-pointer"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="text-label text-secondary transition-colors duration-300 hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
                        aria-label={
                            isMobileMenuOpen ? "Close menu" : "Open menu"
                        }
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="flex w-5 flex-col gap-[5px]">
                            <motion.span
                                className="block h-[1.5px] w-full bg-primary"
                                animate={
                                    isMobileMenuOpen
                                        ? { rotate: 45, y: 6.5 }
                                        : { rotate: 0, y: 0 }
                                }
                                transition={{
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />
                            <motion.span
                                className="block h-[1.5px] w-full bg-primary"
                                animate={
                                    isMobileMenuOpen
                                        ? { opacity: 0 }
                                        : { opacity: 1 }
                                }
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="block h-[1.5px] w-full bg-primary"
                                animate={
                                    isMobileMenuOpen
                                        ? { rotate: -45, y: -6.5 }
                                        : { rotate: 0, y: 0 }
                                }
                                transition={{
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu Panel */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="glass overflow-hidden rounded-[var(--radius-card)] md:hidden"
                        >
                            <ul className="flex flex-col gap-1 p-4" role="list">
                                {siteConfig.navLinks.map((link) => (
                                    <li key={link.href}>
                                        {isHashLink(link.href) ? (
                                            <a
                                                href={link.href}
                                                onClick={(e) =>
                                                    handleNavClick(e, link.href)
                                                }
                                                className="text-label text-secondary block rounded-[var(--radius-button)] px-4 py-3 transition-colors duration-200 hover:bg-surface-container hover:text-primary cursor-pointer"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                onClick={closeMenu}
                                                className="text-label text-secondary block rounded-[var(--radius-button)] px-4 py-3 transition-colors duration-200 hover:bg-surface-container hover:text-primary"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};
