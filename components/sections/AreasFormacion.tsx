"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  AppWindow,
  Clapperboard,
  GraduationCap,
  Megaphone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { AREAS_FORMACION } from "@/constants/content";
import { useAppSelector } from "@/store/hooks";
import { fadeInUp, staggerContainer } from "@/animations/variants";

const iconComponents = {
  Gamepad2,
  AppWindow,
  Clapperboard,
  GraduationCap,
  Megaphone,
};

export function AreasFormacion() {
  const reducedMotion = useAppSelector(
    (state) => state.userPreferences.reducedMotion,
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % AREAS_FORMACION.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + AREAS_FORMACION.length) % AREAS_FORMACION.length,
    );
  };

  return (
    <section id="areas-formacion" className="py-20 md:py-32 bg-background">
      <Container>
        <motion.div
          variants={reducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header - Apple style */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight text-balance">
              Areas de Formacion
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed text-pretty">
              Cinco areas principales que abarcan desde el entretenimiento hasta
              la educacion digital.
            </p>
          </motion.div>

          {/* Apple-style Image + Content Layout */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20"
          >
            {/* Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground tracking-tight">
                Versatilidad Profesional
              </h3>
              <p className="text-foreground leading-relaxed text-lg md:text-xl font-light">
                La Ingenieria Multimedia prepara profesionales versatiles
                capaces de desenvolverse en multiples industrias. Desde el
                desarrollo de videojuegos hasta la creacion de contenido
                educativo interactivo, las oportunidades son diversas y en
                constante expansion.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Cada area de formacion combina conocimientos tecnicos con
                creatividad, permitiendo a los egresados liderar proyectos
                innovadores que impactan la vida de millones de usuarios en todo
                el mundo.
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/areas-formacion.jpg"
                alt="Diversas aplicaciones de la ingenieria multimedia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="px-4"
                >
                  {(() => {
                    const area = AREAS_FORMACION[activeIndex];
                    const IconComponent =
                      iconComponents[area.icon as keyof typeof iconComponents];
                    return (
                      <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                            {IconComponent && (
                              <IconComponent className="h-10 w-10 text-primary" />
                            )}
                          </div>
                          <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                            {area.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {area.description}
                          </p>
                          {area.link && (
                            <a
                              href={area.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                            >
                              Explorar
                              <ArrowRight className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Area anterior"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {AREAS_FORMACION.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Ir al area ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Area siguiente"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Desktop Grid - Apple style */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {AREAS_FORMACION.map((area, index) => {
              const IconComponent =
                iconComponents[area.icon as keyof typeof iconComponents];

              return (
                <motion.article
                  key={area.id}
                  initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-primary" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {area.description}
                    </p>

                    {/* Link */}
                    {area.link && (
                      <a
                        href={area.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium group-hover:underline"
                      >
                        Explorar
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
