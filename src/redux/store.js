import { configureStore } from '@reduxjs/toolkit'
import { musicSlicer } from './feature/musicSlicer'

export const store = configureStore({
  reducer: {
    music : musicSlicer,
  },
})