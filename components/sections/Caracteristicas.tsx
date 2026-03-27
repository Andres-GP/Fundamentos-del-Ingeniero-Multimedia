'use client'

import { motion } from 'framer-motion'
import { MousePointerClick, GitBranch, Eye, Compass } from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { CHARACTERISTICS } from '@/constants/content'
import { useAppSelector } from '@/store/hooks'
import { fadeInUp, staggerContainer } from '@/animations/variants'

const iconComponents = {
  MousePointerClick,
  GitBranch,
  Eye,
  Compass,
}

export function Caracteristicas() {
  const reducedMotion = useAppSelector((state) => state.userPreferences.reducedMotion)

  return (
    <section id="caracteristicas" className="py-20 md:py-32 bg-muted">
      <Container>
        <motion.div
          variants={reducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header - Apple style */}
          <motion.div variants={reducedMotion ? undefined : fadeInUp} className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight text-balance">
              Caracteristicas de los Sistemas Multimedia
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed text-pretty">
              Cuatro caracteristicas fundamentales que definen la naturaleza interactiva y dinamica de los sistemas multimedia.
            </p>
          </motion.div>

          {/* Apple-style Image */}
          <motion.div
            variants={reducedMotion ? undefined : fadeInUp}
            className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-16 md:mb-20"
          >
            <Image
              src="/images/interactive-systems.jpg"
              alt="Persona interactuando con sistema multimedia interactivo"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg md:text-xl font-light max-w-2xl">
                Los sistemas multimedia modernos permiten una interaccion natural e intuitiva, 
                transformando la manera en que consumimos y creamos contenido digital.
              </p>
            </div>
          </motion.div>

          {/* Characteristics Grid - Apple style cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHARACTERISTICS.map((characteristic, index) => {
              const IconComponent = iconComponents[characteristic.icon as keyof typeof iconComponents]
              return (
                <motion.article
                  key={characteristic.id}
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
                      {characteristic.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {characteristic.description}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
