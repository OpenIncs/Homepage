// src/data/faq.ts
import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} secure?`,
    answer:
      "Absolutely. We use TLS 1.3 in transit and AES-256 at rest to protect your data, enforce row-level security, and never store your login information. Plus, we are launching YubiKey authentication.",
  },
  {
    question: `Can ${siteDetails.siteName} help with operational risk?`,
    answer:
      "Absolutely! We encourage business owners, portfolio company operators, and fund managers to leverage OpenIncs to diversify revenue and eliminate single-source supplier risk.",
  },
  {
    question: "Does it replace my existing tools?",
    answer: `It can! ${siteDetails.siteName} consolidates sourcing, fundraising, CRM management, sponsor coverage, and procurement.`,
  },
  {
    question: "Where does the data come from?",
    answer:
      "We source and consolidate data from thousands of sources including public web, filings, and models.",
  },
  {
    question: "What if I need help using the app?",
    answer:
      "Our dedicated support team is available 24/7 via phone or email.",
  },
  {
    question: `How much can ${siteDetails.siteName} save us?`,
    answer:
      "Most teams save $200k–$600k per year by replacing 3–5 tools and cutting 10–20+ hours per user each week of manual research. Savings come from license consolidation, reduced list-building/enrichment spend, and fewer CRM add-ons. Estimates vary by team size and stack; we provide a tailored ROI estimate during the pilot.",
  },
];

