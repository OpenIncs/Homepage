'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(v => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
      <Container className="!px-0">
        <nav
          className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10"
          aria-label="Main"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Image
              src="/openincs_logo_blue_dot.png"
              alt="OpenIncs"
              width={40}
              height={40}
              priority
              className="rounded-full"
            />
            <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
              {siteDetails.siteName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {menuItems
              .filter((item) => item && typeof item.url === 'string' && item.url.length > 0)
              .map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.url ?? '#'}
                    className="text-foreground hover:text-foreground-accent transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}

            {/* Secondary link */}
            <li>
              <Link href={siteDetails.loginHref ?? '#'} className="text-foreground/70 hover:text-foreground transition-colors">
                Login
              </Link>
            </li>

            {/* Primary CTA */}
            <li>
              <Link
                href={siteDetails.primaryCtaHref ?? '#'}
                className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
              >
                {siteDetails.primaryCtaLabel ?? 'Contact'}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur border-t border-black/5">
          <div className="px-5 py-4 space-y-3">
            {menuItems
              .filter((item) => item && typeof item.url === 'string' && item.url.length > 0)
              .map((item) => (
                <Link
                  key={item.text}
                  href={item.url ?? '#'}
                  className="block text-foreground hover:text-foreground-accent transition-colors py-2"
                  onClick={closeMenu}
                >
                  {item.text}
                </Link>
              ))}

            <Link
              href={siteDetails.loginHref ?? '#'}
              className="block text-center text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              href={siteDetails.primaryCtaHref ?? '#'}
              className="block text-center text-black bg-primary hover:bg-primary-accent px-6 py-3 rounded-full mt-2 transition-colors"
              onClick={closeMenu}
            >
              {siteDetails.primaryCtaLabel ?? 'Contact'}
            </Link>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
