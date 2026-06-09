/** Navigation link item */
export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

/** Project card data */
export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    slug: string;
    /** Mark as coming soon — disables link and shows overlay */
    comingSoon?: boolean;
    /** Case study detail fields (optional for listing) */
    caseStudy?: CaseStudy;
}

/** Case study detail content */
export interface CaseStudy {
    headline: string;
    client: string;
    year: string;
    service: string;
    brief: string;
    sections: CaseStudySection[];
    relatedProjectIds: string[];
}

/** A content section within a case study */
export interface CaseStudySection {
    label: string;
    heading?: string;
    body?: string;
    image?: string;
    imageAlt?: string;
    layout?: "full" | "half" | "text-only";
}

/** Social link */
export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

/** Site metadata / personal info */
export interface SiteConfig {
  name: string;
  initials: string;
  title: string;
  email: string;
  socials: SocialLink[];
  navLinks: NavLink[];
}
