import { useLanguage } from "../context/LanguageContext";
import { ShimmerButton } from "./ui/shimmer-button";

export default function WhatYouWillLearn() {
    const { t } = useLanguage();

    const cards = t("learn.cards") as Array<{ title: string; desc: string }>;

    return (
        <section className="py-24 bg-[#050510] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-magenta/30 to-transparent"></div>
            <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-magenta/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

                {/* Header */}
                <div className="mb-16 max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t("learn.titleLine1")} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-blue">{t("learn.titleLine2")}</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-medium">
                        {t("learn.subtitle")}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#0a0a1a] rounded-3xl p-8 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-magenta/30 hover:shadow-[0_0_40px_rgba(192,28,131,0.15)]"
                        >
                            {/* Subtle internal gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="text-magenta font-bold text-5xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                    0{index + 1}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <ShimmerButton
                        onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                        className="shadow-2xl"
                        background="#c01c83"
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            {t("learn.cta")}
                        </span>
                    </ShimmerButton>
                </div>

            </div>
        </section>
    );
}
