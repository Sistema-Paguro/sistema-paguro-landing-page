import { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            title: "Escríbenos un correo",
            desc: "¿Tienes dudas sobre el programa? Estamos aquí para ayudarte.",
            link: {
                name: "hola@sistemapaguro.com",
                href: "mailto:hola@sistemapaguro.com"
            },
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            title: "Ubicación",
            desc: "Bogotá, Colombia. Operamos 100% remoto para el mundo.",
            link: {
                name: "Ver en Google Maps",
                href: "javascript:void(0)"
            },
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            title: "Llámanos",
            desc: "Lunes a Viernes de 9am a 6pm.",
            link: {
                name: "+57 (300) 123-4567",
                href: "tel:+573001234567"
            },
        },
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

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
        <section className="py-24 bg-[#050510] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-magenta font-semibold tracking-wider uppercase text-sm">
                                Contáctanos
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-3">
                                Hablemos de tu futuro <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-blue">profesional.</span>
                            </h2>
                            <p className="text-gray-400 mt-4 leading-relaxed">
                                Si tienes preguntas sobre el programa o quieres saber si tu perfil encaja con lo que buscan las empresas internacionales, escríbenos.
                            </p>
                        </div>

                        <ul className="space-y-6">
                            {contactMethods.map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-magenta/50 transition-all duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-magenta/10 flex items-center justify-center text-magenta">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-medium">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm mt-1">
                                            {item.desc}
                                        </p>
                                        <a href={item.link.href} className="inline-flex items-center gap-1 text-sm text-magenta hover:text-white transition-colors font-medium mt-2">
                                            {item.link.name}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                        {submitted ? (
                            <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                                <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-gray-400 mb-8 max-w-xs mx-auto">Gracias por contactarnos. Nuestro equipo te responderá lo antes posible.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-6 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="font-medium text-gray-300 text-sm">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            required
                                            className="w-full mt-2 px-4 py-3 text-white bg-white/5 outline-none border border-white/10 focus:border-magenta shadow-sm rounded-xl transition-all placeholder:text-gray-500"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium text-gray-300 text-sm">
                                            Apellido
                                        </label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            required
                                            className="w-full mt-2 px-4 py-3 text-white bg-white/5 outline-none border border-white/10 focus:border-magenta shadow-sm rounded-xl transition-all placeholder:text-gray-500"
                                            placeholder="Tu apellido"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="font-medium text-gray-300 text-sm">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full mt-2 px-4 py-3 text-white bg-white/5 outline-none border border-white/10 focus:border-magenta shadow-sm rounded-xl transition-all placeholder:text-gray-500"
                                        placeholder="tucorreo@ejemplo.com"
                                    />
                                </div>

                                <div>
                                    <label className="font-medium text-gray-300 text-sm">
                                        Teléfono
                                    </label>
                                    <div className="relative mt-2">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-400 text-sm">🇨🇴 +57</span>
                                        </div>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            placeholder="(300) 000-0000"
                                            className="w-full pl-16 pr-4 py-3 text-white bg-white/5 outline-none border border-white/10 focus:border-magenta shadow-sm rounded-xl transition-all placeholder:text-gray-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="font-medium text-gray-300 text-sm">
                                        Mensaje
                                    </label>
                                    <textarea
                                        required
                                        name="mensaje"
                                        className="w-full mt-2 h-36 px-4 py-3 text-white bg-white/5 outline-none border border-white/10 focus:border-magenta shadow-sm rounded-xl resize-none transition-all placeholder:text-gray-500"
                                        placeholder="¿En qué podemos ayudarte?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-magenta to-blue text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(192,28,131,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : 'Enviar Mensaje'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
