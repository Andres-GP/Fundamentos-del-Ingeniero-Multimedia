import type { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
}

export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 },
}

export const buttonTap = {
  scale: 0.95,
}

export const cardHover = {
  y: -5,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  transition: { duration: 0.3 },
}

export const iconRotate: Variants = {
  initial: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: { duration: 0.6, ease: 'easeInOut' }
  },
}

export const iconScale: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.2,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  tap: { scale: 0.9 },
}

export const fusionAnimation: Variants = {
  initial: { 
    opacity: 0,
    scale: 0.5,
  },
  animate: (custom: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.5,
      delay: custom * 0.2,
      ease: 'easeOut',
    },
  }),
}

export const pulseAnimation: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const menuSlide: Variants = {
  closed: {
    x: '100%',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  open: {
    x: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

export const menuItemStagger: Variants = {
  closed: { opacity: 0, x: 20 },
  open: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
    },
  }),
}
