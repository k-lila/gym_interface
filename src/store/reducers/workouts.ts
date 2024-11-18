import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { musc, musc2 } from '../../constants/workout_exemple'

type WorkoutsState = {
  user_workouts: Array<Workout>
}

const initialState: WorkoutsState = {
  user_workouts: [musc, musc2]
}

const workoutsSlice = createSlice({
  name: 'workouts_redux',
  initialState,
  reducers: {
    setWorkouts: (state, action: PayloadAction<WorkoutsState>) => {
      state = action.payload
    },
    editWorkout: (state, action: PayloadAction<Workout>) => {
      state.user_workouts = state.user_workouts.map((uw) => {
        if (uw.name == action.payload.name) {
          return action.payload
        } else {
          return uw
        }
      })
    }
  }
})
export const { setWorkouts, editWorkout } = workoutsSlice.actions
export default workoutsSlice.reducer
