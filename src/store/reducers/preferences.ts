import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PreferencesState = {
  defaultworkout: Workout | undefined
  dailyworkout: DailyWorkout | undefined
}

const initialState: PreferencesState = {
  defaultworkout: undefined,
  dailyworkout: undefined
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setDefaultWorkout: (state, action: PayloadAction<Workout>) => {
      state.defaultworkout = action.payload
    },
    setDailyWorkout: (
      state,
      action: PayloadAction<DailyWorkout | undefined>
    ) => {
      state.dailyworkout = action.payload
    }
  }
})

export const { setDefaultWorkout, setDailyWorkout } = preferencesSlice.actions
export default preferencesSlice.reducer
