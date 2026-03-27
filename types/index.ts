export interface Section {
  id: string
  title: string
  shortTitle: string
}

export interface MediaType {
  id: string
  name: string
  description: string
  icon: string
}

export interface Characteristic {
  id: string
  title: string
  description: string
  icon: string
}

export interface AreaFormacion {
  id: string
  title: string
  description: string
  icon: string
  link?: string
}

export interface ProfessionalRole {
  id: string
  title: string
  description: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface UIState {
  activeSection: string
  isMenuOpen: boolean
  theme: 'light' | 'dark'
}

export interface UserPreferencesState {
  reducedMotion: boolean
}
