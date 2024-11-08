import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PreferencesState = {
  defaultworkout: Workout | undefined
  dailyworkout: DailyWorkout | undefined
  restshow: boolean
}

const initialState: PreferencesState = {
  defaultworkout: undefined,
  dailyworkout: undefined,
  restshow: true
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
    },
    setShowRest: (state, action: PayloadAction<boolean>) => {
      state.restshow = action.payload
    }
  }
})

export const { setDefaultWorkout, setDailyWorkout, setShowRest } =
  preferencesSlice.actions
export default preferencesSlice.reducer
