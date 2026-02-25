
import Hero from './components/Hero';
import { FloatingNav } from './components/ui/floating-navbar';
import { Home, Lightbulb, Star, MessageCircle } from "lucide-react";
import TheProblem from './components/TheProblem';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import Benefits from './components/Benefits';
import Testimonials from './components/ui/Testimonials';
import FinalRegistration from './components/FinalRegistration';
import './index.css';

import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), link: "#hero", icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: t("nav.problem"), link: "#problem", icon: <Lightbulb className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: t("nav.benefits"), link: "#benefits", icon: <Star className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: t("nav.testimonials"), link: "#testimonials", icon: <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];
  return (
    <main className="min-h-screen bg-white">
      {/* Floating Event Badge */}
      <div className="fixed top-4 left-6 md:top-6 lg:left-16 z-[6000] pointer-events-none">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#050510]/80 text-magenta-light text-xs md:text-sm font-bold border border-magenta-light/50 shadow-[0_0_15px_rgba(192,28,131,0.3)] backdrop-blur-md pointer-events-auto">
          <span className="flex h-2 w-2 rounded-full bg-magenta mr-2 shadow-[0_0_5px_#c01c83] animate-pulse"></span>
          {t("hero.badge")}
        </div>
      </div>
      <FloatingNav navItems={navItems} />
      <div id="hero">
        <Hero />
      </div>
      <div id="learn">
        <WhatYouWillLearn />
      </div>
      <div id="problem">
        <TheProblem />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="registration">
        <FinalRegistration />
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900 bg-black text-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </footer>
    </main>
  );
}

export default App;
