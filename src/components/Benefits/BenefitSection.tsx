"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import SectionTitle from "../SectionTitle";
import type { ReactNode } from "react";
import BenefitBullet from "./BenefitBullet";

type SimpleBullet = string;
type ObjectBullet = {
  title: string;
  description?: string;
  icon?: ReactNode;
};
type Bullet = SimpleBullet | ObjectBullet;

interface BenefitProps {
  title: string;
  description: string;
  imageSrc: string;
  bullets: Bullet[];
}

interface Props {
  benefit: BenefitProps;
  imageAtRight?: boolean;
}

const containerVariants: Variants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const childVariants: Variants = {
  offscreen: { opacity: 0, x: -50 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.2, duration: 1 },
  },
};

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M5 12l4 4L19 6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const isObjectBullet = (b: Bullet): b is ObjectBullet =>
  typeof b === "object" && b !== null && "title" in b;

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }) => {
  const { title, description, imageSrc, bullets } = benefit;

  return (
    <section className="benefit-section">
      <motion.div
        className="mb-24 flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:flex-nowrap lg:gap-20"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Text + bullets */}
        <div
          className={clsx("flex w-full max-w-lg flex-wrap items-center", {
            "justify-start": imageAtRight,
            "lg:order-1 justify-end": !imageAtRight,
          })}
        >
          <div className="w-full text-center lg:text-left">
            <motion.div className="flex w-full flex-col" variants={childVariants}>
              <SectionTitle>
                <h3 className="lg:max-w-2xl">{title}</h3>
              </SectionTitle>
              <p className="mt-1.5 mx-auto leading-normal text-foreground-accent lg:ml-0">
                {description}
              </p>
            </motion.div>

            <div className="mx-auto mt-5 w-full lg:ml-0">
              {bullets.some(isObjectBullet) ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {bullets.filter(isObjectBullet).map((b, i) => (
                    <BenefitBullet
                      key={i}
                      title={b.title}
                      description={b.description ?? ""}
                      icon={(b.icon ?? <CheckIcon className="h-5 w-5 shrink-0 text-amber-400" />) as JSX.Element}
                    />
                  ))}
                </div>
              ) : (
                <ul className="mt-2 space-y-3 text-left">
                  {bullets.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-5 w-5 text-amber-400" />
                      <span className="text-sm text-muted-foreground sm:text-base">
                        {String(text)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
          <div
            className={clsx("flex w-fit", {
              "justify-start": imageAtRight,
              "justify-end": !imageAtRight,
            })}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={title || "benefit"}
                width={384}
                height={762}
                quality={100}
                className="lg:ml-0"
              />
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitSection;
