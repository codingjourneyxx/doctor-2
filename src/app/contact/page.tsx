"use client";

import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import { ContactSection } from "@/components/marketing/course";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <ContactSection
                    contactInfo={{
                        phone: ["9653641750", "7678030070"],
                        email: "drcosurg@gmail.com",
                        address: "Navi Mumbai, Maharashtra, India",
                    }}
                />
            </main>
            <Footer />
        </>
    );
}
