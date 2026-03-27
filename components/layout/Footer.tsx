'use client'

import { ArrowUp } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { NAV_ITEMS, EXTERNAL_LINKS } from '@/constants/content'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setActiveSection } from '@/store/slices/uiSlice'

export function Footer() {
  const dispatch = useAppDispatch()
  const reducedMotion = useAppSelector((state) => state.userPreferences.reducedMotion)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
    dispatch(setActiveSection('inicio'))
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
      dispatch(setActiveSection(targetId))
    }
  }

  return (
    <footer id="recursos" className="bg-[#f5f5f7] border-t border-border/50">
      {/* Main Footer Content */}
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-foreground mb-4">Navegacion</h3>
              <ul className="space-y-2.5">
                {NAV_ITEMS.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-foreground mb-4">Secciones</h3>
              <ul className="space-y-2.5">
                {NAV_ITEMS.slice(4).map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* UNAD Resources */}
            <div>
              <h3 className="text-xs font-semibold text-foreground mb-4">Recursos UNAD</h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={EXTERNAL_LINKS.unad}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Portal UNAD
                  </a>
                </li>
                <li>
                  <a
                    href={EXTERNAL_LINKS.programa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Programa Academico
                  </a>
                </li>
                <li>
                  <a
                    href={EXTERNAL_LINKS.recursos}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Biblioteca Virtual
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-xs font-semibold text-foreground mb-4">Acerca de</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Fundamentos del Ingeniero Multimedia - Guia educativa para estudiantes de Ingenieria Multimedia en la UNAD.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar - Apple style */}
      <div className="border-t border-border/50">
        <Container>
          <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              Copyright &copy; {new Date().getFullYear()} UNAD. Todos los derechos reservados.
            </p>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Volver al inicio"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Volver al inicio</span>
            </button>
          </div>
        </Container>
      </div>
    </footer>
  )
}
