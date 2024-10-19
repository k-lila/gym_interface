import { configureStore } from '@reduxjs/toolkit'
import workoutsReducer from './reducers/workouts'
import preferencesReducer from './reducers/preferences'
import logReducer from './reducers/workoutlog'

const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    preferences: preferencesReducer,
    logs: logReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
