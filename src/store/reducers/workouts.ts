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

    editSerie: (
      state,
      action: PayloadAction<{
        workoutName: string
        dailyName: string
        exerciseName: string
        editedSeries: Array<ExerciseSerie>
      }>
    ) => {
      const workout = state.user_workouts.find(
        (workout) => workout.name === action.payload.workoutName
      )

      if (workout) {
        const daily = workout.workouts.find(
          (daily) => daily.name === action.payload.dailyName
        )

        if (daily) {
          const exercise = daily.exercises.find(
            (ex) => ex.exercise.name === action.payload.exerciseName
          )

          if (exercise) {
            exercise.series = [...action.payload.editedSeries]
          }
        }
      }
    }
  }
})
export const { setWorkouts, editSerie } = workoutsSlice.actions
export default workoutsSlice.reducer
