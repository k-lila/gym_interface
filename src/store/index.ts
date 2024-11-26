import { configureStore } from '@reduxjs/toolkit'
import workoutsReducer from './reducers/workouts'
import preferencesReducer from './reducers/preferences'
import logReducer from './reducers/workoutlog'
import checkEditReducer from './reducers/checkedit'
import userInfoReducer from './reducers/userinfo'
const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    preferences: preferencesReducer,
    logs: logReducer,
    checkedit: checkEditReducer,
    userinfo: userInfoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
