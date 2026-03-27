"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useAppSelector } from "@/store/hooks";
import { fadeInUp, staggerContainer } from "@/animations/variants";

const elements = [
  {
    id: "art",
    label: "Arte",
    color: "#e74c3c",
    position: { x: -140, y: -80 },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
        <circle cx="7.5" cy="10" r="1.5" />
        <circle cx="12" cy="7" r="1.5" />
        <circle cx="16.5" cy="10" r="1.5" />
      </svg>
    ),
  },
  {
    id: "tech",
    label: "Tecnologia",
    color: "#3498db",
    position: { x: 140, y: -80 },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h.01" />
        <path d="M12 8h.01" />
        <path d="M17 8h.01" />
      </svg>
    ),
  },
  {
    id: "eng",
    label: "Ingenieria",
    color: "#f39c12",
    position: { x: 0, y: 100 },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const disciplines = [
  {
    id: "art",
    title: "Arte y Diseno",
    description:
      "Creatividad visual, estetica, narrativa y experiencia del usuario.",
    color: "#e74c3c",
  },
  {
    id: "tech",
    title: "Tecnologia",
    description:
      "Herramientas digitales, software, hardware y plataformas de desarrollo.",
    color: "#3498db",
  },
  {
    id: "eng",
    title: "Ingenieria",
    description:
      "Metodologias, procesos sistematicos, optimizacion y solucion de problemas.",
    color: "#f39c12",
  },
];

export function DefinicionIngenieria() {
  const reducedMotion = useAppSelector(
    (state) => state.userPreferences.reducedMotion,
  );
  const controls = useAnimation();
  const [isFused, setIsFused] = useState(false);

  useEffect(() => {
    const handleInView = async () => {
      if (reducedMotion) {
        setIsFused(true);
        return;
      }

      await controls.start((i) => ({
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          delay: i * 0.3 + 0.5,
          duration: 1,
          ease: "easeOut",
        },
      }));
      setIsFused(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleInView();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("fusion-animation");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [controls, reducedMotion]);

  return (
    <section
      id="definicion-ingenieria"
      className="py-20 md:py-32 bg-background"
    >
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
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight text-balance">
              ¿Que es la Ingenieria Multimedia?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed text-pretty">
              Una disciplina que fusiona arte, tecnologia e ingenieria para
              crear productos y experiencias digitales innovadoras.
            </p>
          </motion.div>

          {/* Apple-style Image + Fusion Animation Layout */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/engineering-fusion.jpg"
                alt="Profesional trabajando en la interseccion del arte, tecnologia e ingenieria"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Fusion Animation */}
            <div
              id="fusion-animation"
              className="relative h-[320px] md:h-[400px] flex items-center justify-center order-1 lg:order-2"
            >
              {/* Background glow */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isFused ? { scale: 1, opacity: 0.5 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#e74c3c]/30 via-[#f39c12]/30 to-[#3498db]/30 blur-3xl"
              />

              {/* Fusion Elements */}
              {elements.map((element, index) => (
                <motion.div
                  key={element.id}
                  custom={index}
                  initial={{
                    x: reducedMotion ? 0 : element.position.x * 1.5,
                    y: reducedMotion ? 0 : element.position.y * 1.5,
                    opacity: reducedMotion ? 1 : 0,
                    scale: reducedMotion ? 1 : 0.5,
                  }}
                  animate={controls}
                  className="flex m-10"
                >
                  <motion.div
                    animate={
                      isFused && !reducedMotion
                        ? {
                            y: [0, -8, 0],
                            transition: {
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.4,
                              ease: "easeInOut",
                            },
                          }
                        : {}
                    }
                    className="flex flex-col items-center"
                  >
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-2xl text-white transition-transform hover:scale-105"
                      style={{ backgroundColor: element.color }}
                    >
                      {element.icon}
                    </div>
                    <span className="mt-3 text-sm md:text-base font-semibold text-foreground">
                      {element.label}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Disciplines Grid - Apple card style */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {disciplines.map((discipline) => (
              <div
                key={discipline.id}
                className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
              >
                <div
                  className="w-3 h-3 rounded-full mb-6"
                  style={{ backgroundColor: discipline.color }}
                />
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {discipline.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {discipline.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Definition Text */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="text-center"
          >
            <p className="text-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
              La <span className="font-semibold">Ingenieria Multimedia</span> es
              una disciplina interdisciplinaria que aplica principios de
              ingenieria al desarrollo de contenido y sistemas multimedia,
              creando experiencias digitales que transforman la manera en que
              interactuamos con la informacion.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
