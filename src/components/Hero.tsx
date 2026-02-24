import { ShimmerButton } from './ui/shimmer-button';
import { useLanguage } from '../context/LanguageContext';
import ShiftingCountdown from './ui/countdown-timer';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-16 lg:py-0 overflow-hidden bg-[#050510]">
            {/* Desktop Background Image */}
            <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/images/hero-desktop-bg.jpg.jpeg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
                {/* Gradient to fade from solid dark on the left/bottom to transparent on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-[#050510]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]/50"></div>
            </div>

            {/* Content Side */}
            <div className="relative flex-1 w-full max-w-2xl z-10 space-y-8 lg:pr-12 mt-32 lg:mt-24 flex flex-col items-center text-center lg:items-start lg:text-left">

                {/* Badge removed and moved to App.tsx as a floating element */}
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
                    {t("hero.titleLine1")} <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-blue">{t("hero.titleLine2")}</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-medium">
                    {t("hero.subtitle1")}
                    <span className="block text-gray-400 font-normal mt-2 text-base">
                        {t("hero.subtitle2")}
                    </span>
                </p>

                {/* Bullet Points */}
                <div className="flex w-full justify-center lg:justify-start">
                    <ul className="space-y-2 text-gray-300 text-left">
                        <li className="flex items-start gap-2">
                            <span className="text-magenta mt-1">✓</span> {t("hero.bullet1")}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-magenta mt-1">✓</span> {t("hero.bullet2")}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-magenta mt-1">✓</span> {t("hero.bullet3")}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-magenta mt-1">✓</span> {t("hero.bullet4")}
                        </li>
                    </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <ShimmerButton
                        onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                        className="shadow-2xl"
                        background="#c01c83"
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            {t("hero.cta")}
                        </span>
                    </ShimmerButton>
                </div>

                {/* Live Event Countdown */}
                <div className="w-full pt-8 lg:pt-12">
                    <ShiftingCountdown labels={t("hero.countdown") as any} />
                </div>
            </div>

        </section>
    );
}
