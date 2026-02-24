import { useState } from 'react';
import { ShimmerButton } from './ui/shimmer-button';
import { PhoneInput } from './ui/PhoneInput';
import { useLanguage } from '../context/LanguageContext';

export default function FinalRegistration() {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        // Ensure the PhoneInput value is correctly appended since it uses a hidden input

        try {
            const response = await fetch("https://formspree.io/f/xykddpgo", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                (e.target as HTMLFormElement).reset();
            } else {
                console.error("Formspree submission failed");
                alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Hubo un error de conexión. Por favor intenta de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 bg-black text-white text-center">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
                    {t("registration.title")}
                </h2>

                <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                    {t("registration.subtitle")}
                </p>

                <div className="flex flex-col items-center gap-6 text-left">
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500 mb-4">
                        <span className="flex items-center gap-2"><span className="text-green-500">●</span> {t("registration.badges.b1")}</span>
                        <span className="flex items-center gap-2"><span className="text-green-500">●</span> {t("registration.badges.b2")}</span>
                        <span className="flex items-center gap-2"><span className="text-green-500">●</span> {t("registration.badges.b3")}</span>
                    </div>

                    <div className="w-full max-w-2xl bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm mt-4">
                        {submitted ? (
                            <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                                <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{t("registration.successTitle")}</h3>
                                <p className="text-zinc-400 mb-8 max-w-xs mx-auto">{t("registration.successDesc")}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5 text-left">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="font-medium text-zinc-300 text-sm">
                                            {t("registration.form.firstName")}
                                        </label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            required
                                            className="w-full mt-2 px-4 py-3 text-white bg-white/5 outline-none border border-white/10 focus:border-magenta shadow-sm rounded-xl transition-all placeholder:text-zinc-400"
                                            placeholder={t("registration.form.firstNamePh")}
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium text-zinc-300 text-sm">
                                            {t("registration.form.lastName")}
                                        </label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            required
                                            className="w-full mt-2 px-4 py-3 text-white bg-white/5 outline-none border border-white/10 focus:border-magenta shadow-sm rounded-xl transition-all placeholder:text-zinc-400"
                                            placeholder={t("registration.form.lastNamePh")}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="font-medium text-zinc-300 text-sm">
                                        {t("registration.form.email")}
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full mt-2 px-4 py-3 text-white bg-white/5 outline-none border border-white/10 focus:border-magenta shadow-sm rounded-xl transition-all placeholder:text-zinc-400"
                                        placeholder={t("registration.form.emailPh")}
                                    />
                                </div>

                                <div>
                                    <label className="font-medium text-zinc-300 text-sm mb-2 block">
                                        {t("registration.form.phone")}
                                    </label>
                                    <PhoneInput name="telefono" required />
                                </div>
                                <div className="pt-4 flex justify-center">
                                    <ShimmerButton
                                        type="submit"
                                        className="shadow-2xl w-full"
                                        background="#c01c83"
                                        disabled={isSubmitting}
                                    >
                                        <span className="whitespace-pre-wrap text-center text-base font-bold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                            {isSubmitting ? t("registration.form.submiting") : t("registration.form.submitBtn")}
                                        </span>
                                    </ShimmerButton>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
