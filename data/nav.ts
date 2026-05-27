export type NavItem = {
  label: string;
  href: string;
};

export const primaryNavItems: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Service Area", href: "/#areas" },
  { label: "Consultation", href: "/consultation" },
];

export const footerLinks: NavItem[] = [
  { label: "Residential", href: "/residential-lighting" },
  { label: "Outdoor Lighting", href: "/outdoor-lighting" },
  { label: "Hospitality Lighting", href: "/winery-brewery-lighting" },
  { label: "Consultation", href: "/consultation" },
];    