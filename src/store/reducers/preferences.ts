import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PreferencesState = {
  defaultworkout: string
  dailyworkout: string
}

const initialState: PreferencesState = {
  defaultworkout: 'musculação1',
  dailyworkout: 'A'
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setDefaultWorkout: (state, action: PayloadAction<string>) => {
      state.defaultworkout = action.payload
    },
    setDailyWorkout: (state, action: PayloadAction<string>) => {
      state.dailyworkout = action.payload
    }
  }
})

export const { setDefaultWorkout, setDailyWorkout } = preferencesSlice.actions
export default preferencesSlice.reducer
