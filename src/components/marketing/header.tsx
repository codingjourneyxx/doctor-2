"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight, Menu01, X, Phone, Mail01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { Logo } from "./logo";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Course", href: "#course" },
    { label: "Modules", href: "#modules" },
    { label: "Training", href: "#training" },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cx(
                    "sticky top-0 z-50 w-full transition-all duration-300",
                    scrolled ? "shadow-sm" : ""
                )}
            >
                {/* Backdrop */}
                <div
                    className={cx(
                        "absolute inset-0 transition-all duration-300",
                        scrolled
                            ? "bg-primary/95 backdrop-blur-xl"
                            : "bg-primary"
                    )}
                />

                <div className="relative mx-auto max-w-7xl border-secondary border-l border-r px-4 sm:px-6 lg:px-8">
                    <nav className="flex h-12 items-center justify-between lg:h-14">
                        {/* Logo */}
                        <a href="/" aria-label="Home">
                            <Logo className="text-primary" />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-secondary hover:text-primary relative rounded-lg px-4 py-2 text-sm font-medium transition duration-100 ease-linear hover:bg-gray-50"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex lg:items-center lg:gap-3">
                            <a
                                href="tel:9653641750"
                                className="text-secondary hover:text-primary flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition duration-100 ease-linear"
                            >
                                <Phone className="size-4" />
                                <span>Call Now</span>
                            </a>
                            <a
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300"
                            >
                                {/* Glow effect */}
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-600 opacity-40 blur-md transition-all duration-300 group-hover:opacity-60 group-hover:blur-lg" />
                                {/* Border */}
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-white/20 p-[1px]">
                                    <span className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 transition-all duration-300 group-hover:from-purple-500 group-hover:via-brand-400 group-hover:to-purple-400" />
                                </span>
                                {/* Content */}
                                <span className="relative z-10">Enroll Now</span>
                                <svg className="relative z-10 size-4" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M6 18L18 6M18 6H10M18 6V14"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className={cx(
                                "flex size-10 items-center justify-center rounded-xl transition-all duration-200 lg:hidden",
                                mobileMenuOpen
                                    ? "bg-brand-solid text-white"
                                    : "text-secondary hover:bg-gray-100"
                            )}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <div className="relative size-5">
                                <span
                                    className={cx(
                                        "absolute inset-0 flex items-center justify-center transition-all duration-200",
                                        mobileMenuOpen
                                            ? "rotate-0 opacity-100"
                                            : "rotate-90 opacity-0"
                                    )}
                                >
                                    <X className="size-5" />
                                </span>
                                <span
                                    className={cx(
                                        "absolute inset-0 flex items-center justify-center transition-all duration-200",
                                        mobileMenuOpen
                                            ? "-rotate-90 opacity-0"
                                            : "rotate-0 opacity-100"
                                    )}
                                >
                                    <Menu01 className="size-5" />
                                </span>
                            </div>
                        </button>
                    </nav>
                </div>

                {/* Bottom border */}
                <div className="border-secondary absolute bottom-0 left-0 right-0 border-b" />

                {/* Mobile Menu */}
                <div
                    className={cx(
                        "absolute left-0 right-0 top-full overflow-hidden transition-all duration-300 ease-out lg:hidden",
                        mobileMenuOpen
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0"
                    )}
                >
                    <div className="bg-primary border-secondary border-b shadow-lg">
                        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                            <div className="space-y-1">
                                {navItems.map((item, index) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cx(
                                            "text-primary hover:bg-secondary flex items-center rounded-xl px-4 py-3 text-base font-medium transition-all duration-150",
                                            mobileMenuOpen &&
                                                "animate-[slideIn_0.3s_ease-out_forwards]"
                                        )}
                                        style={{
                                            animationDelay: mobileMenuOpen
                                                ? `${index * 50}ms`
                                                : "0ms",
                                            opacity: mobileMenuOpen ? 1 : 0,
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            {/* Mobile Contact Info */}
                            <div className="border-secondary mt-4 border-t pt-4">
                                <div className="mb-4 space-y-2">
                                    <a
                                        href="tel:9653641750"
                                        className="text-secondary hover:text-primary flex items-center gap-2 px-4 py-2 text-sm transition duration-100 ease-linear"
                                    >
                                        <Phone className="size-4" />
                                        <span>+91 9653641750</span>
                                    </a>
                                    <a
                                        href="mailto:drcosurg@gmail.com"
                                        className="text-secondary hover:text-primary flex items-center gap-2 px-4 py-2 text-sm transition duration-100 ease-linear"
                                    >
                                        <Mail01 className="size-4" />
                                        <span>drcosurg@gmail.com</span>
                                    </a>
                                </div>

                                <a
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white transition-all duration-300"
                                >
                                    {/* Glow effect */}
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-600 opacity-40 blur-md" />
                                    {/* Border */}
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-white/20 p-[1px]">
                                        <span className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 transition-all duration-300 group-hover:from-purple-500 group-hover:via-brand-400 group-hover:to-purple-400" />
                                    </span>
                                    {/* Content */}
                                    <span className="relative z-10">Enroll Now</span>
                                    <svg className="relative z-10 size-5" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M6 18L18 6M18 6H10M18 6V14"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
