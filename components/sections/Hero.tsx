"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NAV_ITEMS } from "@/constants/content";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveSection } from "@/store/slices/uiSlice";
import { fadeIn, fadeInUp, staggerContainer } from "@/animations/variants";

export function Hero() {
  const dispatch = useAppDispatch();
  const reducedMotion = useAppSelector(
    (state) => state.userPreferences.reducedMotion,
  );

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      dispatch(setActiveSection(targetId));
    }
  };

  const quickNavItems = NAV_ITEMS.slice(1, 6);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23003366' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Container className="relative z-10 py-20 md:py-0">
        <div className="text-center max-w-5xl mx-auto">
          {/* Eyebrow text - Apple style */}
          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0 }}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base tracking-widest uppercase mb-6"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            Universidad Nacional Abierta y a Distancia
          </motion.p>

          {/* Main Title - Large and bold like Apple */}
          <motion.h1
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 tracking-tight text-balance"
          >
            Fundamentos del
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ingeniero Multimedia
            </span>
          </motion.h1>

          {/* Subtitle - Clean and minimal */}
          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed text-pretty"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Donde la tecnologia, el arte y la ingenieria convergen para crear
            experiencias digitales extraordinarias.
          </motion.p>

          {/* Quick Navigation - Apple style pills */}
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {quickNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="px-5 py-2.5 text-white rounded-full font-medium text-sm backdrop-blur-md transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderWidth: "1px",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleNavClick("#definicion-multimedia")}
            animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="transition-colors flex flex-col items-center gap-2"
            style={{ color: "rgba(255, 255, 255, 0.5)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
            }}
            aria-label="Desplazarse hacia abajo"
          >
            <span className="text-xs uppercase tracking-widest">Explorar</span>
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
