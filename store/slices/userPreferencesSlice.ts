import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { UserPreferencesState } from '@/types'

const initialState: UserPreferencesState = {
  reducedMotion: false,
}

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    setReducedMotion: (state, action: PayloadAction<boolean>) => {
      state.reducedMotion = action.payload
    },
  },
})

export const { setReducedMotion } = userPreferencesSlice.actions
export default userPreferencesSlice.reducer
