import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../../context/LanguageContext";
import { ShimmerButton } from "./shimmer-button";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}) => {
    const { language, setLanguage, t } = useLanguage();

    return (
        <div
            className={cn(
                "flex w-fit max-w-[95vw] fixed top-20 md:top-6 inset-x-0 mx-auto border border-white/10 rounded-full bg-black/50 backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 items-center justify-center overflow-x-auto custom-scrollbar no-scrollbar",
                className
            )}
        >
            <div className="flex items-center space-x-4 min-w-max">
                {navItems.map((navItem: any, idx: number) => (
                    <a
                        key={`link=${idx}`}
                        href={navItem.link}
                        onClick={(e) => {
                            e.preventDefault();
                            const targetElement = document.querySelector(navItem.link);
                            if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className={cn(
                            "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 transition-colors cursor-pointer shrink-0"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
                    </a>
                ))}
                <div className="flex bg-white/5 border border-white/10 rounded-full p-1 shrink-0 ml-2">
                    <button
                        onClick={() => setLanguage('ES')}
                        className={cn(
                            "px-3 py-1 text-xs font-bold rounded-full transition-all duration-300",
                            language === 'ES'
                                ? "bg-magenta text-white shadow-[0_0_10px_rgba(192,28,131,0.5)]"
                                : "text-neutral-400 hover:text-white"
                        )}
                    >
                        ES
                    </button>
                    <button
                        onClick={() => setLanguage('EN')}
                        className={cn(
                            "px-3 py-1 text-xs font-bold rounded-full transition-all duration-300",
                            language === 'EN'
                                ? "bg-blue text-white shadow-[0_0_10px_rgba(0,121,211,0.5)]"
                                : "text-neutral-400 hover:text-white"
                        )}
                    >
                        EN
                    </button>
                </div>
                <ShimmerButton
                    onClick={() => {
                        const el = document.getElementById("registration");
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="shadow-lg min-h-8 px-4 py-1.5 shrink-0 ml-2 w-auto"
                    background="#c01c83"
                >
                    <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white">
                        {t("nav.register")}
                    </span>
                </ShimmerButton>
            </div>
        </div>
    );
};
