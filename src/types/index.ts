export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  eyebrow: string;
  description: string;
  email: string;
  location: string;
  social: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    imagePosition?: string;
    linkedin?: string;
}

export interface VolunteerRole {
  id: string;
  title: string;
  category: string;
  description: string;
  requirements?: string;
}

export interface VolunteerPosting {
  title: string;
  subtitle: string;
  deadline: string;
  summary: string;
  details: string[];
  pdfHref: string;
}

export interface FundraiserInitiative {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  date: string;
  location: string;
  ledBy: string;
  status: string;
  summary: string;
  details: string[];
  image: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  tertiaryCta?: CtaLink;
}

export interface SponsorPackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  whyItMatters?: string;
  cta?: CtaLink;
}

export interface Sponsor {
  name: string;
  /** Path under /public/images/sponsors/ */
  logo: string;
  href?: string;
}

export interface PilotPhase {
  phase: number;
  title: string;
  description: string;
}

export interface FundingLineItem {
  item: string;
  costCad: number;
}

export interface PilotContent {
  title: string;
  school: string;
  location: string;
  region: string;
  intro: string[];
  articleHref?: string;
  problemIntro: string;
  waterTreatmentChallenges: string[];
  sanitationChallenges: string[];
  solutionIntro: string;
  solutionBody: string[];
  fundraisingMethod: string[];
  implementationIntro: string;
  phases: PilotPhase[];
  impact: string[];
  fundingBreakdown: FundingLineItem[];
  summary: string[];
  figures: { id: string; caption: string; image: string }[];
}

export interface ContactInfo {
  heading: string;
  subheading: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  location: string;
  teamEmails: { name: string; role: string; email: string }[];
}
