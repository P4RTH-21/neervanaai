"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { BookCallModal } from "@/components/forms/BookCallModal";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-200",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
            : "bg-white border-b border-slate-100 py-4"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-signal shadow-subtle group-hover:bg-slate-800 transition-colors">
                <Cpu className="w-5 h-5 text-signal" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-950">
                  Neervana<span className="text-signal">ai</span>
                </span>
                <span className="text-[11px] tracking-wider uppercase font-bold text-slate-500 -mt-0.5">
                  Enterprise AI Systems
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 text-[15px] font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40",
                      isActive
                        ? "text-slate-950 font-bold bg-slate-100 shadow-subtle"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/70"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3.5">
              <Link
                href="/contact"
                className="text-[15px] font-bold text-slate-700 hover:text-slate-950 px-3 py-2 transition-colors"
              >
                Contact
              </Link>
              <Button
                variant="signal"
                size="md"
                onClick={() => setIsModalOpen(true)}
                className="group font-bold text-[15px] px-5 py-2.5 shadow-signal"
                rightIcon={<ArrowUpRight className="w-4 h-4 btn-hover-arrow" />}
              >
                Start a project
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsModalOpen(true)}
                className="sm:hidden text-xs bg-brand-navy text-white px-3 py-1.5 rounded-lg font-medium"
              >
                Book Call
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2">
            <Container className="py-5 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium",
                      isActive
                        ? "bg-slate-100 text-brand-navy font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <Link
                  href="/contact"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  Contact & RFPs
                </Link>
                <div className="px-4 pt-2">
                  <Button
                    variant="signal"
                    size="md"
                    className="w-full justify-center group"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    rightIcon={<ArrowUpRight className="w-4 h-4 btn-hover-arrow" />}
                  >
                    Start a project
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
