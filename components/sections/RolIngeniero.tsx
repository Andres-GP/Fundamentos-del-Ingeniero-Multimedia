"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Users,
  Lightbulb,
  Palette,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PROFESSIONAL_ROLES } from "@/constants/content";
import { useAppSelector } from "@/store/hooks";
import { fadeInUp, staggerContainer } from "@/animations/variants";

const roleIcons = [Briefcase, Code, Users, Lightbulb, Palette, BookOpen];

export function RolIngeniero() {
  const reducedMotion = useAppSelector(
    (state) => state.userPreferences.reducedMotion,
  );

  return (
    <section id="rol-ingeniero" className="py-20 md:py-32 bg-muted">
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
              Rol del Ingeniero Multimedia
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed text-pretty">
              Un profesional versatil con competencias para liderar proyectos
              digitales en diversas industrias.
            </p>
          </motion.div>

          {/* Apple-style Image + Detailed Paragraph Layout */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/rol-ingeniero.jpg"
                alt="Equipo de ingenieros multimedia colaborando en proyectos creativos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Detailed Paragraph */}
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground tracking-tight">
                El Puente entre la Creatividad y la Tecnologia
              </h3>
              <p className="text-foreground leading-relaxed text-lg md:text-xl font-light">
                El Ingeniero Multimedia es un profesional integral que combina
                habilidades tecnicas avanzadas con una profunda comprension del
                diseno y la comunicacion visual. Su rol va mas alla de la simple
                creacion de contenido: es el arquitecto de experiencias
                digitales que conectan marcas con audiencias, educan a millones
                de estudiantes y entretienen a usuarios en todo el mundo.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Con conocimientos en programacion, diseno grafico, produccion
                audiovisual, animacion 3D y experiencia de usuario, estos
                profesionales lideran equipos multidisciplinarios, gestionan
                proyectos complejos y toman decisiones estrategicas que impactan
                directamente en el exito de productos digitales. En un mundo
                cada vez mas visual e interactivo, el Ingeniero Multimedia se
                posiciona como un agente de cambio e innovacion.
              </p>
            </div>
          </motion.div>

          {/* Roles Grid - Apple style cards */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {PROFESSIONAL_ROLES.map((role, index) => {
              const IconComponent = roleIcons[index % roleIcons.length];
              return (
                <motion.article
                  key={role.id}
                  initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
