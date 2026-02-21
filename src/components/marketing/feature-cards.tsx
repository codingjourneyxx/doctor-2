const cards = [
    {
        title: "20+ Years of Excellence",
        description: "Senior ENT Consultant Surgeon, Professor & Facial Plastic Surgeon based in Navi Mumbai with clinical expertise.",
        image: "https://healer.themerex.net/wp-content/uploads/2025/06/custom-img-29-copyright-924x744.jpg",
    },
    {
        title: "Anatomy-Based Approach",
        description: "Grounded in deep anatomical knowledge, surgical precision, and ethical practice for natural outcomes.",
        image: "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Non-Surgical Expertise",
        description: "Integrating botulinum toxin and injectables into comprehensive facial harmony treatment plans.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
];

export function FeatureCards() {
    return (
        <div className="mx-auto max-w-7xl border-x border-secondary">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {cards.map((card, i) => (
                    <section key={i} className={`flex flex-col bg-primary ${i < 2 ? "border-b lg:border-b-0 lg:border-r" : ""} border-secondary`}>
                        <div className="px-4 py-6 sm:px-5 sm:py-8 lg:px-6 lg:py-12">
                            <p className="text-sm leading-relaxed text-secondary sm:text-base">
                                <b className="text-primary">{card.title}</b> {card.description}
                            </p>
                        </div>
                        <div className="mt-auto h-[180px] overflow-hidden sm:h-[220px] lg:h-[300px]">
                            <img alt="" src={card.image} className="h-full w-full object-cover" />
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
