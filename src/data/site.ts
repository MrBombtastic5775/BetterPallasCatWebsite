export interface NavItem {
  label: string
  href: string
}

import type { ImageMetadata } from 'astro:assets'
import overviewHero from '../assets/images/overview-hero.jpg'
import habitatHero from '../assets/images/habitat-hero.jpg'
import behaviorHero from '../assets/images/behavior-hero.jpg'
import dietHero from '../assets/images/diet-hero.jpg'
import reproHero from '../assets/images/repro-hero.jpg'
import conservationHero from '../assets/images/conservation-hero.jpg'

export interface Topic {
  title: string
  href: string
  blurb: string
  image: ImageMetadata
}

export const topics: { title: string; href: string; blurb: string; image: ImageMetadata }[] = [
  {
    title: "Species Overview",
    href: "/overview/",
    blurb: "Taxonomy, anatomy, and the unmistakable features that make the manul one of the world's most distinctive small cats.",
    image: overviewHero,
  },
  {
    title: "Habitat & Range",
    href: "/habitat/",
    blurb: "The cold steppes, rocky outcrops, and high plateaus of Central Asia where Pallas's cats make their home.",
    image: habitatHero,
  },
  {
    title: "Behavior",
    href: "/behavior/",
    blurb: "Solitary, secretive, and superbly camouflaged — how the manul hunts, hides, and survives.",
    image: behaviorHero,
  },
  {
    title: "Diet & Hunting",
    href: "/diet/",
    blurb: "Pikas, voles, and small birds: the ambush predator's menu and stalking strategy.",
    image: dietHero,
  },
  {
    title: "Reproduction & Lifespan",
    href: "/reproduction/",
    blurb: "A brief breeding season, vulnerable kittens, and the challenges of growing up on the steppe.",
    image: reproHero,
  },
  {
    title: "Conservation",
    href: "/conservation/",
    blurb: "Threats, protections, and the global effort to safeguard a famously hard-to-study cat.",
    image: conservationHero,
  },
]

export const mainNav: NavItem[] = [
  { label: "Overview", href: "/overview/" },
  { label: "Habitat", href: "/habitat/" },
  { label: "Behavior", href: "/behavior/" },
  { label: "Diet", href: "/diet/" },
  { label: "Reproduction", href: "/reproduction/" },
  { label: "Conservation", href: "/conservation/" },
  { label: "Field Guide", href: "/field-guide/" },
  { label: "Gallery", href: "/gallery/" },
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
