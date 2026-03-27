'use client'

import { motion } from 'framer-motion'
import { FileText, Image as ImageIcon, Music, Video, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { MEDIA_TYPES } from '@/constants/content'
import { useAppSelector } from '@/store/hooks'
import { fadeInUp, staggerContainer } from '@/animations/variants'

const iconComponents = {
  FileText,
  Image: ImageIcon,
  Music,
  Video,
  Sparkles,
}

export function DefinicionMultimedia() {
  const reducedMotion = useAppSelector((state) => state.userPreferences.reducedMotion)

  return (
    <section id="definicion-multimedia" className="py-20 md:py-32 bg-muted">
      <Container>
        <motion.div
          variants={reducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header - Apple style */}
          <motion.div variants={reducedMotion ? undefined : fadeInUp} className="text-center mb-16 md:mb-20">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight text-balance">
              ¿Que es Multimedia?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed text-pretty">
              La integracion de multiples formas de contenido digital trabajando en armonia para crear experiencias interactivas y enriquecedoras.
            </p>
          </motion.div>

          {/* Apple-style Image + Content Layout */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/multimedia-definition.jpg"
                alt="Espacio de trabajo multimedia mostrando diferentes tipos de medios digitales"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed text-lg md:text-xl font-light">
                El termino <span className="font-semibold">multimedia</span> proviene del latin <em>multus</em> (mucho) y <em>medium</em> (medio). 
                Se refiere a la combinacion de diferentes tipos de medios digitales en una sola presentacion, 
                permitiendo la interaccion del usuario para crear experiencias dinamicas y personalizadas.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                En la era digital actual, los sistemas multimedia son fundamentales para la comunicacion efectiva, 
                el entretenimiento interactivo, la educacion a distancia y la publicidad digital. Su capacidad 
                para combinar multiples sentidos crea experiencias mas memorables y significativas.
              </p>
            </div>
          </motion.div>

          {/* Media Types - Apple style grid */}
          <motion.div variants={reducedMotion ? undefined : fadeInUp}>
            <h3 className="font-heading font-semibold text-2xl md:text-3xl text-center mb-12 tracking-tight">
              Los Cinco Tipos de Medios
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {MEDIA_TYPES.map((mediaType, index) => {
                const IconComponent = iconComponents[mediaType.icon as keyof typeof iconComponents]
                return (
                  <motion.div
                    key={mediaType.id}
                    initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
                    whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        {IconComponent && (
                          <IconComponent className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                        )}
                      </div>
                      <h4 className="font-semibold text-foreground text-base md:text-lg mb-2">
                        {mediaType.name}
                      </h4>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden sm:block">
                        {mediaType.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
