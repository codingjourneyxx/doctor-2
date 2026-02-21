"use client";

import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import CTA from "@/components/marketing/Coursedirector";
import { DecorativeDivider } from "@/components/marketing/decorative-divider";
import { FeatureCards } from "@/components/marketing/feature-cards";
import { CourseHero, LearningObjectives, InjectionGuide } from "@/components/marketing/course";
import { EligibleProfessionals } from "@/components/marketing/eligible-professionals";
import { CoursePackages, Module1, Module2, Module3, Module4, Module5 } from "@/components/marketing/course-curriculum";
import Testimonials from "@/components/marketing/Testimonials";
import { WhyChooseUs } from "@/components/marketing/why-choose-us";
import { PracticalTraining } from "@/components/marketing/practical-training";
import { StatsSection } from "@/components/marketing/stats-section";

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <div id="course">
                    <CourseHero />
                </div>
                <DecorativeDivider />
                <div id="about">
                    <CTA />
                </div>
                <StatsSection />
                <DecorativeDivider />
                <FeatureCards />
                <DecorativeDivider />
                <LearningObjectives />
                <DecorativeDivider />
                <EligibleProfessionals />
                <DecorativeDivider />
                <div id="modules">
                    <Module1 />
                </div>
                <DecorativeDivider />
                <Module2 />
                <DecorativeDivider />
                <Module3 />
                <DecorativeDivider />
                <Module4 />
                <DecorativeDivider />
                <Module5 />
                <DecorativeDivider />
                <WhyChooseUs />
                <DecorativeDivider />
                <div id="training">
                    <PracticalTraining />
                </div>
                <DecorativeDivider />
                <CoursePackages />
                <DecorativeDivider />
                <InjectionGuide />
                <div className="border-secondary border-t" />
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}
