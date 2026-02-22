

import { useLanguage } from '../context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();
    const servicesText = t("services.cards");

    const services = [
        {
            ...servicesText[0],
            iconColor: "bg-magenta-soft",
            textColor: "text-magenta"
        },
        {
            ...servicesText[1],
            iconColor: "bg-blue-soft",
            textColor: "text-blue"
        },
        {
            ...servicesText[2],
            iconColor: "bg-zinc-100",
            textColor: "text-black"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16 max-w-2xl">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                        {t("services.titleLine1")} <br />
                        <span className="text-blue">{t("services.titleLine2")}</span>
                    </h2>
                    <p className="text-xl text-zinc-600">
                        {t("services.desc")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="group p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-2xl hover:border-zinc-300 hover:-translate-y-2 transition-all duration-500">
                            <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${s.iconColor} ${s.textColor} group-hover:scale-110 transition-transform duration-500`}>
                                {/* Simple icon placeholder */}
                                <div className="w-6 h-6 bg-current opacity-80 rounded-sm"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue transition-colors duration-500">
                                {s.title}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed group-hover:text-zinc-900 transition-colors duration-500">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
