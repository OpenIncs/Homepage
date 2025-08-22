// src/data/benefits.tsx
import type { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Market mapping",
    description:
      "Label and group by product, buyer, investor type, and capability to see the real structure of a space.",
    imageSrc: "/data-analysis.png",
    bullets: [
      "Readable summaries and category tags",
      "AI similarity to find true lookalikes",
      "Export shortlists for your needs",
    ],
  },
  {
    title: "One platform",
    description:
      "We’ve unified the corp dev and ops tech stack — connecting banks, advisors, capital, and targets in one AI-native platform that can de-risk operations.",
    imageSrc: "/data-extraction.png",
    bullets: [
      "Over 10,000 institutional capital investors",
      "More than 1,000 dealmakers",
      "Roughly half of U.S. businesses covered",
    ],
  },
  {
    title: "Partner discovery",
    description:
      "Find credible suppliers and partners with the capacity, track record, and proximity you need.",
    imageSrc: "/analysis.png",
    bullets: [
      "Filter by capability, region, and headcount",
      "Score and shortlist partners quickly",
      "Fewer dead ends, faster execution",
    ],
  },
];
