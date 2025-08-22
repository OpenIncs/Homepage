import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL('https://openincs.com'),
  title: "OpenIncs — Find the right partners, fast",
  description:
    "OpenIncs maps 17M+ companies and uses AI to match you with the highest-fit partners for M&A, sales, and procurement.",
  openGraph: {
    title: "OpenIncs — Find the right partners, fast",
    description:
      "AI + 17M+ company graph to find vendors, customers, and acquisition targets.",
    images: ["/og-image-1200x630.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* pad the top so content isn't hidden behind the fixed header */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
