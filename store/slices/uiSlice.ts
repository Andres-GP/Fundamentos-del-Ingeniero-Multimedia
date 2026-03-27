import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { UIState } from '@/types'

const initialState: UIState = {
  activeSection: 'inicio',
  isMenuOpen: false,
  theme: 'light',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  },
})

export const { setActiveSection, setMenuOpen, toggleMenu, setTheme, toggleTheme } = uiSlice.actions
export default uiSlice.reducer
