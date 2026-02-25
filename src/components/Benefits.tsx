import { ShimmerButton } from './ui/shimmer-button';
import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
    const { t } = useLanguage();
    const benefitsText = t("benefits.cards") as { title: string, desc: string }[];

    const benefits = [
        {
            ...benefitsText[0],
            image: "/images/Beneficio1.webp"
        },
        {
            ...benefitsText[1],
            image: "/images/Beneficio2.webp"
        },
        {
            ...benefitsText[2],
            image: "/images/Beneficio3.webp"
        },
        {
            ...benefitsText[3],
            image: "/images/Beneficio4.webp"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16 max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                        {t("benefits.titleLine1")} <br />
                        <span className="text-blue">{t("benefits.titleLine2")}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((b, i) => (
                        <div key={i} className="group flex flex-col rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-blue/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                            <div className="w-full h-48 sm:h-56 relative overflow-hidden bg-zinc-100">
                                <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                            <div className="p-6 lg:p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue transition-colors duration-500">
                                    {b.title}
                                </h3>
                                <p className="text-zinc-600 leading-relaxed text-sm group-hover:text-zinc-900 transition-colors duration-500">
                                    {b.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 flex justify-center">
                    <ShimmerButton
                        onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                        className="shadow-lg min-w-48"
                        background="#c01c83"
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                            {t("benefits.cta")}
                        </span>
                    </ShimmerButton>
                </div>

            </div>
        </section>
    );
}
