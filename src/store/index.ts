import { configureStore } from '@reduxjs/toolkit'
import workoutsReducer from './reducers/workouts'
import preferencesReducer from './reducers/preferences'

const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    preferences: preferencesReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
