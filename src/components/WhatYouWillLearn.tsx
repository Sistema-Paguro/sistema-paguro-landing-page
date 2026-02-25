import { useLanguage } from "../context/LanguageContext";
import { ShimmerButton } from "./ui/shimmer-button";
import { Target, Zap, Globe, FileCheck } from "lucide-react";

export default function WhatYouWillLearn() {
    const { t } = useLanguage();

    const cards = t("learn.cards") as Array<{ title: string; desc: string }>;
    const cardIcons = [Target, Zap, Globe, FileCheck];

    return (
        <section className="py-24 bg-[#050510] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-magenta/30 to-transparent"></div>
            <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-magenta/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Text and CTA */}
                    <div className="flex flex-col text-center lg:text-left">
                        <div className="mb-10">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                {t("learn.titleLine1")} <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-blue">{t("learn.titleLine2")}</span>
                            </h2>
                            <p className="text-lg lg:text-xl text-gray-400 font-medium max-w-lg mx-auto lg:mx-0">
                                {t("learn.subtitle")}
                            </p>
                        </div>

                        <div className="flex justify-center flex-wrap lg:justify-start">
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

                    {/* Right Column: Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="group relative bg-[#0a0a1a] rounded-3xl p-6 sm:p-8 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-magenta/30 hover:shadow-[0_0_40px_rgba(192,28,131,0.15)]"
                            >
                                {/* Subtle internal gradient glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <div className="text-magenta font-bold text-4xl sm:text-5xl opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                            0{index + 1}
                                        </div>
                                        <div className="text-magenta/50 group-hover:text-magenta transition-colors duration-500">
                                            {(() => {
                                                const Icon = cardIcons[index];
                                                return Icon ? <Icon className="w-8 h-8 sm:w-10 sm:h-10" /> : null;
                                            })()}
                                        </div>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
