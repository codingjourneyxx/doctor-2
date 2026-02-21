"use client";

import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Badge } from "@/components/base/badges/badges";
import { Phone01, Mail01, MarkerPin01, ArrowRight, Send01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface ContactInfo {
    phone?: string[];
    email?: string;
    address?: string;
}

interface ContactSectionProps {
    title?: string;
    description?: string;
    contactInfo: ContactInfo;
    showForm?: boolean;
}

export function ContactSection({
    title = "Ready to Get Started?",
    description = "Contact us to learn more about enrollment and upcoming course dates",
    contactInfo,
    showForm = true,
}: ContactSectionProps) {
    return (
        <section className="bg-secondary relative overflow-hidden">
            {/* Background decorations */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-brand-100/40 to-transparent blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-brand-50/50 to-transparent blur-3xl" />
            </div>

            {/* Grid pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative mx-auto max-w-7xl border-x border-secondary px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                    {/* Contact Info */}
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2">
                            <Mail01 className="size-4 text-brand-500" />
                            <span className="text-sm font-semibold text-brand-700">Contact Us</span>
                        </div>
                        <h2 className="text-primary mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            {title.split(" ").slice(0, -1).join(" ")}{" "}
                            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                                {title.split(" ").slice(-1)}
                            </span>
                        </h2>
                        <p className="text-tertiary mt-5 text-lg leading-relaxed">
                            {description}
                        </p>

                        {/* Contact Details with enhanced styling */}
                        <div className="mt-12 space-y-6">
                            {contactInfo.phone && contactInfo.phone.length > 0 && (
                                <div className="group flex items-start gap-5 rounded-2xl border border-secondary bg-primary p-5 transition-all duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5">
                                    <div className="transition-transform duration-300 group-hover:scale-110">
                                        <FeaturedIcon
                                            icon={Phone01}
                                            size="md"
                                            color="brand"
                                            theme="light"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-primary text-sm font-semibold">
                                            Phone
                                        </p>
                                        <div className="mt-2 space-y-1.5">
                                            {contactInfo.phone.map((num, idx) => (
                                                <a
                                                    key={idx}
                                                    href={`tel:${num}`}
                                                    className="group/link flex items-center gap-2 text-base font-medium transition-colors duration-200"
                                                >
                                                    <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent group-hover/link:from-brand-500 group-hover/link:to-brand-400">
                                                        {num}
                                                    </span>
                                                    <ArrowRight className="size-4 text-brand-400 opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {contactInfo.email && (
                                <div className="group flex items-start gap-5 rounded-2xl border border-secondary bg-primary p-5 transition-all duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5">
                                    <div className="transition-transform duration-300 group-hover:scale-110">
                                        <FeaturedIcon
                                            icon={Mail01}
                                            size="md"
                                            color="brand"
                                            theme="light"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-primary text-sm font-semibold">
                                            Email
                                        </p>
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="group/link mt-2 flex items-center gap-2 text-base font-medium transition-colors duration-200"
                                        >
                                            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent group-hover/link:from-brand-500 group-hover/link:to-brand-400">
                                                {contactInfo.email}
                                            </span>
                                            <ArrowRight className="size-4 text-brand-400 opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                        </a>
                                    </div>
                                </div>
                            )}

                            {contactInfo.address && (
                                <div className="group flex items-start gap-5 rounded-2xl border border-secondary bg-primary p-5 transition-all duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5">
                                    <div className="transition-transform duration-300 group-hover:scale-110">
                                        <FeaturedIcon
                                            icon={MarkerPin01}
                                            size="md"
                                            color="brand"
                                            theme="light"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-primary text-sm font-semibold">
                                            Location
                                        </p>
                                        <p className="text-secondary mt-2 text-base leading-relaxed">
                                            {contactInfo.address}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Form with premium styling */}
                    {showForm && (
                        <div className="relative">
                            {/* Decorative background */}
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-100/30 via-brand-50/20 to-transparent blur-2xl" />

                            <div className="relative overflow-hidden rounded-3xl border border-secondary bg-primary p-8 shadow-xl shadow-brand-500/5 sm:p-10">
                                {/* Corner decoration */}
                                <div className="absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br from-brand-100 to-brand-50 opacity-60 blur-2xl" />
                                <div className="absolute -bottom-8 -left-8 size-20 rounded-full bg-gradient-to-tr from-brand-50 to-transparent blur-2xl" />

                                <div className="relative">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600">
                                            <Send01 className="size-5 text-white" />
                                        </div>
                                        <h3 className="text-primary text-xl font-semibold">
                                            Enquire Now
                                        </h3>
                                    </div>
                                    <p className="text-tertiary mt-3 text-sm leading-relaxed">
                                        Fill out the form and we'll get back to you shortly
                                    </p>

                                    <form className="mt-8 space-y-6">
                                        <Input
                                            label="Full Name"
                                            placeholder="Dr. John Doe"
                                            isRequired
                                        />
                                        <Input
                                            label="Email Address"
                                            type="email"
                                            placeholder="john@example.com"
                                            icon={Mail01}
                                            isRequired
                                        />
                                        <Input
                                            label="Phone Number"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            icon={Phone01}
                                            isRequired
                                        />
                                        <Input
                                            label="Specialization"
                                            placeholder="e.g., ENT Surgeon, Dermatologist"
                                        />

                                        <Button
                                            type="submit"
                                            size="lg"
                                            color="primary"
                                            iconTrailing={ArrowRight}
                                            className="w-full !rounded-xl shadow-lg shadow-brand-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
                                        >
                                            Submit Enquiry
                                        </Button>
                                    </form>

                                    <p className="text-quaternary mt-6 text-center text-xs">
                                        By submitting, you agree to our privacy policy and terms of service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
