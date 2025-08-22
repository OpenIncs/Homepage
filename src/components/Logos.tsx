import Image from "next/image";
import React from "react";

const Logos: React.FC = () => {
  return (
    <section id="logos" className="py-32 px-5 bg-background">
      <p className="text-lg font-medium text-center">
        Experience across <span className="text-secondary">$500B+</span> in assets under management
      </p>

      <div className="mt-8 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-90">
        {/* Carlyle */}
        <Image
          src="/logos/carlyle.png"
          alt="The Carlyle Group"
          width={180}
          height={60}
          className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
        />

        {/* Vista Equity Partners */}
        <Image
          src="/logos/vista.png"
          alt="Vista Equity Partners"
          width={180}
          height={60}
          className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
        />

        {/* Monomoy */}
        <Image
          src="/logos/monomoy.png"
          alt="Monomoy"
          width={180}
          height={60}
          className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
        />

        {/* AEA */}
        <Image
          src="/logos/aea.png"
          alt="AEA"
          width={180}
          height={60}
          className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
        />

        {/* Percheron Capital */}
        <Image
          src="/logos/percheron.png"
          alt="Percheron Capital"
          width={180}
          height={60}
          className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
        />

        {/* Hidden River Capital */}
        <Image
          src="/logos/hidden-river.png"
          alt="Hidden River Capital"
          width={180}
          height={60}
          className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
        />
      </div>
    </section>
  );
};

export default Logos;
