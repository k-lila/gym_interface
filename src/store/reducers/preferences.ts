import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PreferencesState = {
  defaultworkout: string
}

const initialState: PreferencesState = {
  defaultworkout: 'musculação1'
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setDefaultWorkout: (state, action: PayloadAction<string>) => {
      state.defaultworkout = action.payload
    }
  }
})

export const { setDefaultWorkout } = preferencesSlice.actions
export default preferencesSlice.reducer
