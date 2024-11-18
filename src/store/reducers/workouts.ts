import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { musc2 } from '../../constants/workout_exemple2'
import { musc } from '../../constants/workout_exemple1'

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
      state.user_workouts = state.user_workouts.map((userworkout) => {
        if (userworkout.name == action.payload.name) {
          return action.payload
        } else {
          return userworkout
        }
      })
    }
  }
})
export const { setWorkouts, editWorkout } = workoutsSlice.actions
export default workoutsSlice.reducer
