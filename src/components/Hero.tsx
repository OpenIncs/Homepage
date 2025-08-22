import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Find the right vendors, customers, and acquisition targets — fast.
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          OpenIncs maps 17M+ companies, 10K+ institutional investors, 1K+ investment bankers and uses AI to surface the highest-fit partners
          for M&A, sales, and procurement — all in one powerful platform.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:Marcin@openincs.com?subject=OpenIncs%20Demo%20/%20Waitlist&body=Name%3A%0ACompany%3A%0ARole%3A%0AWhat%20are%20you%20looking%20to%20find%3F%3A%0A"
            className="px-8 py-3 rounded-full bg-primary text-black hover:bg-primary/80 transition-colors font-medium"
          >
            Get early access
          </Link>
          <Link
            href="#features"
            className="px-8 py-3 rounded-full border border-border text-foreground hover:bg-muted transition-colors font-medium"
          >
            See how it works
          </Link>
        </div>

        {/* Browser-frame Screenshot (Apple/Stripe inspired) */}
        <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">
          {/* Fake browser chrome */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/5">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
            <div className="ml-3 text-xs text-muted-foreground truncate">openincs.com</div>
          </div>

          {/* Screenshot */}
          <Image
            src="/LandingScreenshot.png"
            alt="OpenIncs web app preview"
            width={1600}
            height={1000}
            className="w-full h-auto block"
            priority
          />

          {/* Bottom fade — tuned to blend with the existing shadow */}
          {/* Tip: if your design background isn't near #f5f5f5, swap the color to your exact bg */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgb(245,245,245)]/95 to-transparent" />
        </div>

        {/* Tiles / Feature Highlights */}
        <div
          id="features"
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left"
        >
          <div className="p-6 border rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-semibold">17M+ Companies Mapped</h3>
            <p className="mt-2 text-muted-foreground">
              The most complete private company database, updated in real-time.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-semibold">AI-Powered Discovery</h3>
            <p className="mt-2 text-muted-foreground">
              Instantly surface the best vendors, customers, or M&A targets.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-semibold">One Platform, All Uses</h3>
            <p className="mt-2 text-muted-foreground">
              From sourcing to procurement — all in a single streamlined tool.
            </p>
          </div>
        </div>

        {/* Comments / Testimonials */}
        <div className="mt-16 max-w-4xl mx-auto text-muted-foreground">
          <p>
            “OpenIncs is like having a dedicated research team that never sleeps.
            The accuracy and speed is unmatched.”
          </p>
          <p className="mt-2 font-medium">— Early Beta User</p>
        </div>
      </div>
    </section>
  );
}
