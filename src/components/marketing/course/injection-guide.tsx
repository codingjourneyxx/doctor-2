"use client";

import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { GridCheck } from "@/components/shared-assets/background-patterns/grid-check";
import { Target04, AlertTriangle, InfoCircle, Microscope } from "@untitledui/icons";

const dosingGuide = [
    { area: "Brow Lift", units: "2-4 units" },
    { area: "Forehead", units: "2-6 units (multiple points)" },
    { area: "Frown Lines", units: "4-5 units (multiple points)" },
    { area: "Crow's Feet", units: "3 units (each side)" },
    { area: "Bunny Lines", units: "2 units" },
    { area: "Gummy Smile", units: "2-4 units" },
    { area: "Nose Lift", units: "2 units" },
    { area: "Mouth Corners", units: "2-4 units (each side)" },
    { area: "Chin Dimples", units: "2 units" },
    { area: "Masseter (Jawline)", units: "25-50 units (each side)" },
];

const depthGuide = [
    { area: "Frontalis (Forehead)", angle: "45°", depth: "2-4mm" },
    { area: "Procerus & Corrugators", angle: "90°", depth: "6mm" },
    { area: "Orbicularis Oculi (Eye)", angle: "45°", depth: "2-4mm" },
    { area: "Nasalis (Bunny Nose)", angle: "45°", depth: "4mm" },
    { area: "Nose Tip Lift", angle: "90°", depth: "4-6mm" },
    { area: "Masseter", angle: "90°", depth: "6-8mm" },
    { area: "DAO", angle: "70°", depth: "6mm" },
    { area: "Mentalis (Chin)", angle: "90°", depth: "6-8mm" },
    { area: "Platysma (Neck)", angle: "90°", depth: "6-8mm" },
];

export function InjectionGuide() {
    return (
        <section className="relative overflow-hidden bg-primary">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-gradient-to-bl from-brand-100/40 to-transparent blur-2xl sm:h-[300px] sm:w-[300px] sm:blur-3xl lg:h-[400px] lg:w-[400px]" />
                <div className="absolute -left-10 bottom-0 h-[150px] w-[150px] rounded-full bg-gradient-to-tr from-brand-50/50 to-transparent blur-2xl sm:-left-20 sm:h-[200px] sm:w-[200px] sm:blur-3xl lg:h-[300px] lg:w-[300px]" />
            </div>
            <GridCheck size="sm" className="pointer-events-none absolute inset-0 h-full w-full" />

            <div className="relative mx-auto max-w-7xl border-x border-secondary px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                {/* Header */}
                <div className="mb-8 text-center sm:mb-10 lg:mb-14">
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
                        <Microscope className="size-3.5 text-brand-500 sm:size-4" />
                        <span className="text-xs font-semibold text-brand-700 sm:text-sm">Technical Guide</span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-primary sm:mt-4 sm:text-2xl lg:text-4xl">
                        Injection Techniques &{" "}<span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">Dosing</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-tertiary sm:mt-4 sm:text-sm lg:mt-5 lg:text-lg">Precise anatomical guidance for optimal results</p>
                </div>

                <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
                    {/* Dosing Guide */}
                    <div className="group overflow-hidden rounded-xl border border-secondary bg-primary shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 sm:rounded-2xl">
                        <div className="flex items-center gap-3 border-b border-secondary bg-gradient-to-r from-secondary/50 to-transparent px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-5">
                            <div className="transition-transform duration-300 group-hover:scale-110">
                                <FeaturedIcon icon={Target04} size="sm" color="brand" theme="gradient" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-primary sm:text-base lg:text-lg">Dosing Guide</h3>
                                <p className="text-[10px] text-tertiary sm:text-xs">Units per treatment area</p>
                            </div>
                        </div>
                        <div className="divide-y divide-secondary/80">
                            {dosingGuide.map((item, i) => (
                                <div key={i} className="group/row flex items-center justify-between px-3 py-2.5 transition-colors duration-200 hover:bg-brand-50/30 sm:px-6 sm:py-3.5">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="flex size-5 items-center justify-center rounded bg-secondary text-[10px] font-semibold text-tertiary sm:size-7 sm:rounded-lg sm:text-xs">{String(i + 1).padStart(2, '0')}</div>
                                        <span className="text-xs font-medium text-secondary sm:text-sm">{item.area}</span>
                                    </div>
                                    <div className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">{item.units}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Depth Guide */}
                    <div className="group overflow-hidden rounded-xl border border-secondary bg-primary shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 sm:rounded-2xl">
                        <div className="flex items-center gap-3 border-b border-secondary bg-gradient-to-r from-secondary/50 to-transparent px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-5">
                            <div className="transition-transform duration-300 group-hover:scale-110">
                                <FeaturedIcon icon={InfoCircle} size="sm" color="brand" theme="gradient" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-primary sm:text-base lg:text-lg">Injection Depth Guide</h3>
                                <p className="text-[10px] text-tertiary sm:text-xs">Angle and depth recommendations</p>
                            </div>
                        </div>
                        <div className="divide-y divide-secondary/80">
                            {depthGuide.map((item, i) => (
                                <div key={i} className="group/row flex items-center justify-between gap-2 px-3 py-2.5 transition-colors duration-200 hover:bg-brand-50/30 sm:gap-4 sm:px-6 sm:py-3.5">
                                    <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                                        <div className="flex size-5 shrink-0 items-center justify-center rounded bg-secondary text-[10px] font-semibold text-tertiary sm:size-7 sm:rounded-lg sm:text-xs">{String(i + 1).padStart(2, '0')}</div>
                                        <span className="truncate text-xs font-medium text-secondary sm:text-sm">{item.area}</span>
                                    </div>
                                    <div className="flex shrink-0 gap-1.5 sm:gap-2">
                                        <div className="rounded-full border border-secondary bg-secondary/50 px-2 py-0.5 text-[10px] font-medium text-secondary sm:px-3 sm:py-1.5 sm:text-xs">{item.angle}</div>
                                        <div className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm sm:px-3 sm:py-1.5 sm:text-xs">{item.depth}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Warning */}
                <div className="mt-6 overflow-hidden rounded-xl border border-warning-300 bg-gradient-to-r from-warning-50 via-warning-50/80 to-warning-100/50 sm:mt-8 sm:rounded-2xl lg:mt-10">
                    <div className="flex items-start gap-3 p-4 sm:gap-5 sm:p-6">
                        <div className="shrink-0">
                            <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-warning-100 to-warning-200 sm:size-12 sm:rounded-xl">
                                <AlertTriangle className="size-4 text-warning-600 sm:size-6" />
                            </div>
                        </div>
                        <div className="min-w-0 flex-1">
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-primary sm:text-base">
                                Important Safety Note
                                <div className="size-1.5 animate-pulse rounded-full bg-warning-500 sm:size-2" />
                            </h4>
                            <p className="mt-1.5 text-xs leading-relaxed text-secondary sm:mt-2 sm:text-sm">
                                Every patient is different. Some need more, some need less. Take detailed notes for each treatment to optimize future sessions.{" "}
                                <span className="font-semibold text-warning-700">No-Go Zones must be strictly observed.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InjectionGuide;
