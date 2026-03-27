'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setActiveSection, setMenuOpen } from '@/store/slices/uiSlice'
import { NAV_ITEMS } from '@/constants/content'

export function MobileMenu() {
  const dispatch = useAppDispatch()
  const { activeSection, isMenuOpen } = useAppSelector((state) => state.ui)
  const reducedMotion = useAppSelector((state) => state.userPreferences.reducedMotion)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      dispatch(setMenuOpen(false))
      setTimeout(() => {
        element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
        dispatch(setActiveSection(targetId))
      }, 300)
    }
  }

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Full screen overlay - Apple style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 lg:hidden"
            aria-hidden="true"
          />

          {/* Menu Content - Apple style centered */}
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden flex flex-col"
            aria-label="Menu de navegacion movil"
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => dispatch(setMenuOpen(false))}
                className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                aria-label="Cerrar menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation links - centered */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <ul className="flex flex-col items-center gap-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block px-6 py-3 text-2xl font-light transition-colors ${
                        activeSection === item.id
                          ? 'text-primary'
                          : 'text-foreground/70 hover:text-foreground'
                      }`}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="p-6 text-center">
              <p className="text-xs text-muted-foreground">
                UNAD - Ingenieria Multimedia
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
