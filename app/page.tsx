'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { setReducedMotion } from '@/store/slices/userPreferencesSlice'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { DefinicionMultimedia } from '@/components/sections/DefinicionMultimedia'
import { DefinicionIngenieria } from '@/components/sections/DefinicionIngenieria'
import { Caracteristicas } from '@/components/sections/Caracteristicas'
import { AreasFormacion } from '@/components/sections/AreasFormacion'
import { RolIngeniero } from '@/components/sections/RolIngeniero'

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    dispatch(setReducedMotion(mediaQuery.matches))

    const handleChange = (e: MediaQueryListEvent) => {
      dispatch(setReducedMotion(e.matches))
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [dispatch])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <DefinicionMultimedia />
        <DefinicionIngenieria />
        <Caracteristicas />
        <AreasFormacion />
        <RolIngeniero />
      </main>
      <Footer />
    </>
  )
}
