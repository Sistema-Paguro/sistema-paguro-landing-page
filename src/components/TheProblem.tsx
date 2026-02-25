import { ShimmerButton } from './ui/shimmer-button';
import { useLanguage } from '../context/LanguageContext';

export default function TheProblem() {
    const { t } = useLanguage();
    const problems = t("problem.cards") as { title: string, desc: string }[];

    const problemImages = [
        "/images/problem_0.jpg", // Candidates waiting for interview
        "/images/problem_1.jpg", // Man holding head in frustration at laptop
        "/images/problem_2.jpg", // Piles of desk papers
        "/images/problem_3.png"  // Bored worker watching 4:59 PM digital clock
    ];

    return (
        <section className="py-24 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Text and CTA */}
                    <div className="flex flex-col text-center lg:text-left">
                        <div className="mb-10 lg:mb-12">
                            <h2 className="text-4xl lg:text-5xl lg:leading-tight font-bold text-black mb-6">
                                {t("problem.titleLine1") && (
                                    <>
                                        {t("problem.titleLine1")} <br className="hidden lg:block" />
                                    </>
                                )}
                                <span className="text-magenta">{t("problem.titleLine2")}</span>
                            </h2>
                        </div>
                        <div className="flex justify-center flex-wrap lg:justify-start">
                            <ShimmerButton
                                onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                                className="shadow-lg min-w-48"
                                background="#c01c83"
                            >
                                <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                                    {t("problem.cta")}
                                </span>
                            </ShimmerButton>
                        </div>
                    </div>

                    {/* Right Column: Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                        {problems.map((p, i) => (
                            <div key={i} className="group p-6 sm:p-8 flex flex-col rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">

                                {/* 1:1 Ratio Image Wrapper */}
                                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl bg-zinc-100 flex-shrink-0">
                                    <img
                                        src={problemImages[i]}
                                        alt={p.title}
                                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    {/* Optional subtle overlay for style */}
                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-magenta transition-colors duration-500">
                                    {p.title}
                                </h3>
                                <p className="text-zinc-600 leading-relaxed group-hover:text-zinc-900 transition-colors duration-500">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
