export interface NavItem {
  label: string
  href: string
}

export const topics: { title: string; href: string; blurb: string; image: string }[] = [
  {
    title: "Species Overview",
    href: "/overview",
    blurb: "Taxonomy, anatomy, and the unmistakable features that make the manul one of the world's most distinctive small cats.",
    image: "/images/overview-hero.jpg",
  },
  {
    title: "Habitat & Range",
    href: "/habitat",
    blurb: "The cold steppes, rocky outcrops, and high plateaus of Central Asia where Pallas's cats make their home.",
    image: "/images/habitat-hero.jpg",
  },
  {
    title: "Behavior",
    href: "/behavior",
    blurb: "Solitary, secretive, and superbly camouflaged — how the manul hunts, hides, and survives.",
    image: "/images/behavior-hero.jpg",
  },
  {
    title: "Diet & Hunting",
    href: "/diet",
    blurb: "Pikas, voles, and small birds: the ambush predator's menu and stalking strategy.",
    image: "/images/diet-hero.jpg",
  },
  {
    title: "Reproduction & Lifespan",
    href: "/reproduction",
    blurb: "A brief breeding season, vulnerable kittens, and the challenges of growing up on the steppe.",
    image: "/images/repro-hero.jpg",
  },
  {
    title: "Conservation",
    href: "/conservation",
    blurb: "Threats, protections, and the global effort to safeguard a famously hard-to-study cat.",
    image: "/images/conservation-hero.jpg",
  },
]

export const mainNav: NavItem[] = [
  { label: "Overview", href: "/overview" },
  { label: "Habitat", href: "/habitat" },
  { label: "Behavior", href: "/behavior" },
  { label: "Diet", href: "/diet" },
  { label: "Reproduction", href: "/reproduction" },
  { label: "Conservation", href: "/conservation" },
  { label: "Field Guide", href: "/field-guide" },
  { label: "Gallery", href: "/gallery" },
]

export const quickFacts = [
  { label: "Scientific name", value: "Otocolobus manul" },
  { label: "Common names", value: "Pallas's cat, manul, steppe cat" },
  { label: "Weight", value: "2.5 – 4.5 kg" },
  { label: "Body length", value: "46 – 65 cm" },
  { label: "Tail length", value: "21 – 31 cm" },
  { label: "Lifespan (wild)", value: "~6 years" },
  { label: "Lifespan (captivity)", value: "up to 12 years" },
  { label: "IUCN status", value: "Least Concern (declining)" },
  { label: "Elevation range", value: "up to 5,000+ m" },
  { label: "Active period", value: "Crepuscular" },
]
