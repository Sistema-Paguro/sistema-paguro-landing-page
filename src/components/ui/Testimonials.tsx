import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Testimonials() {
    const { t } = useLanguage();
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#050510] relative overflow-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* Header / Social Proof */}
                <div className="flex flex-col items-center justify-center text-center mb-16 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        {t("testimonials.titleLine1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-blue">{t("testimonials.titleLine2")}</span>
                    </h2>

                    {/* Demo Component Integration */}
                    <div className="flex flex-wrap items-center justify-center sm:divide-x divide-gray-700 bg-white/5 p-4 sm:px-6 rounded-2xl backdrop-blur-sm border border-white/10 gap-4 sm:gap-0">
                        <div className="flex -space-x-3 sm:pr-6 justify-center w-full sm:w-auto">
                            <img src="/testimonials/avatar_1.png" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-[#050510] hover:-translate-y-1 transition z-10 object-cover" />
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop&crop=faces" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-[#050510] hover:-translate-y-1 transition z-20 object-cover filter grayscale" />
                            <img src="/testimonials/avatar_3.png" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-[#050510] hover:-translate-y-1 transition z-30 object-cover" />
                            <img src="/testimonials/avatar_4.png" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-[#050510] hover:-translate-y-1 transition z-40 object-cover" />
                        </div>
                        <div className="sm:pl-6 text-center sm:text-left flex flex-col items-center sm:items-start w-full sm:w-auto">
                            <div className="flex items-center mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                                    </svg>
                                ))}
                                <p className="text-white font-medium ml-2">5.0</p>
                            </div>
                            <p className="text-sm text-gray-400">{t("testimonials.trustedBy")} <span className="font-medium text-white">100,000+</span> {t("testimonials.users")}</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {/* Card 1 - Virtual Executive Assistant (Woman) */}
                    <div
                        onClick={() => handleCardClick(1)}
                        className={`max-w-xs w-full bg-white/5 border text-white rounded-2xl transition-all duration-300 group cursor-pointer ${activeCard === 1 ? 'border-magenta shadow-[0_0_20px_rgba(192,28,131,0.5)]' : 'border-white/10 hover:border-magenta hover:shadow-[0_0_20px_rgba(192,28,131,0.5)]'}`}
                    >
                        <div className="relative -mt-px overflow-hidden rounded-t-2xl">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600" alt="Mariana - VEA" className={`h-[240px] w-full rounded-t-2xl transition-all duration-500 object-cover object-top filter ${activeCard === 1 ? 'scale-105 grayscale-0' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`} />
                            <div className="absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t pointer-events-none from-[#050510] to-transparent"></div>
                        </div>
                        <div className="p-6 pt-2">
                            <p className="font-medium border-b border-gray-700 pb-5 text-gray-300 italic">{t("testimonials.cards.mariana.quote")}</p>
                            <p className="mt-4 font-semibold text-white">{t("testimonials.cards.mariana.name")}</p>
                            <p className="text-sm font-medium bg-gradient-to-r from-magenta to-blue text-transparent bg-clip-text">{t("testimonials.cards.mariana.role")}</p>
                        </div>
                    </div>

                    {/* Card 2 - Customer Service Rep (Woman) */}
                    <div
                        onClick={() => handleCardClick(2)}
                        className={`max-w-xs w-full bg-white/5 border text-white rounded-2xl transition-all duration-300 group cursor-pointer ${activeCard === 2 ? 'border-blue shadow-[0_0_20px_rgba(0,121,211,0.5)]' : 'border-white/10 hover:border-blue hover:shadow-[0_0_20px_rgba(0,121,211,0.5)]'}`}
                    >
                        <div className="relative -mt-px overflow-hidden rounded-t-2xl">
                            <img src="/testimonials/valentina.png" alt="Valentina - CSR" className={`h-[240px] w-full rounded-t-2xl transition-all duration-500 object-cover filter ${activeCard === 2 ? 'scale-105 grayscale-0' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`} />
                            <div className="absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t pointer-events-none from-[#050510] to-transparent"></div>
                        </div>
                        <div className="p-6 pt-2">
                            <p className="font-medium border-b border-gray-700 pb-5 text-gray-300 italic">{t("testimonials.cards.valentina.quote")}</p>
                            <p className="mt-4 font-semibold text-white">{t("testimonials.cards.valentina.name")}</p>
                            <p className="text-sm font-medium bg-gradient-to-r from-magenta to-blue text-transparent bg-clip-text">{t("testimonials.cards.valentina.role")}</p>
                        </div>
                    </div>

                    {/* Card 3 - Data Analyst (Man) */}
                    <div
                        onClick={() => handleCardClick(3)}
                        className={`max-w-xs w-full bg-white/5 border text-white rounded-2xl transition-all duration-300 group cursor-pointer ${activeCard === 3 ? 'border-magenta shadow-[0_0_20px_rgba(192,28,131,0.5)]' : 'border-white/10 hover:border-magenta hover:shadow-[0_0_20px_rgba(192,28,131,0.5)]'}`}
                    >
                        <div className="relative -mt-px overflow-hidden rounded-t-2xl">
                            <img src="/testimonials/juan_david.png" alt="Juan David - Data Analyst" className={`h-[240px] w-full rounded-t-2xl transition-all duration-500 object-cover filter ${activeCard === 3 ? 'scale-105 grayscale-0' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`} />
                            <div className="absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t pointer-events-none from-[#050510] to-transparent"></div>
                        </div>
                        <div className="p-6 pt-2">
                            <p className="font-medium border-b border-gray-700 pb-5 text-gray-300 italic">{t("testimonials.cards.juan.quote")}</p>
                            <p className="mt-4 font-semibold text-white">{t("testimonials.cards.juan.name")}</p>
                            <p className="text-sm font-medium bg-gradient-to-r from-magenta to-blue text-transparent bg-clip-text">{t("testimonials.cards.juan.role")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
