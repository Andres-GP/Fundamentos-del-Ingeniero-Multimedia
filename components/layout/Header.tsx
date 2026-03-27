'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setActiveSection, toggleMenu } from '@/store/slices/uiSlice'
import { NAV_ITEMS } from '@/constants/content'
import { Container } from '@/components/ui/container'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const dispatch = useAppDispatch()
  const { activeSection, isMenuOpen } = useAppSelector((state) => state.ui)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          dispatch(setActiveSection(NAV_ITEMS[i].id))
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dispatch])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      dispatch(setActiveSection(targetId))
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-12 md:h-14">
            {/* Logo - Apple style minimal */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className={`font-heading font-semibold text-sm tracking-tight transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
              aria-label="Ir al inicio"
            >
              Ing. Multimedia
            </a>

            {/* Desktop Navigation - Apple style */}
            <ul className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-xs font-normal transition-colors ${
                      isScrolled
                        ? activeSection === item.id
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                        : 'text-white'
                    }`}
                    style={
                      !isScrolled && activeSection !== item.id
                        ? { color: 'rgba(255, 255, 255, 0.7)' }
                        : undefined
                    }
                    onMouseEnter={(e) => {
                      if (!isScrolled && activeSection !== item.id) {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isScrolled && activeSection !== item.id) {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      }
                    }}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => dispatch(toggleMenu())}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-foreground hover:bg-muted'
                  : 'text-white'
              }`}
              aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </nav>
        </Container>
      </motion.header>

      <MobileMenu />
    </>
  )
}
