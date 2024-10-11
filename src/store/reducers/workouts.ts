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
    }
  }
})

export const { setWorkouts } = workoutsSlice.actions
export default workoutsSlice.reducer
