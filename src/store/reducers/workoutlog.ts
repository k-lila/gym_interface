import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type WorkoutLogState = {
  ontraining: boolean
  log: WorkoutLog
}

const initialState: WorkoutLogState = {
  ontraining: false,
  log: {
    workout: undefined,
    start: undefined,
    end: undefined,
    series: undefined
  }
}

const logSlice = createSlice({
  name: 'log_redux',
  initialState,
  reducers: {
    setSetupLog: (state, action: PayloadAction<DailyWorkout>) => {
      state.ontraining = true
      state.log.workout = action.payload
    },
    setStart: (state, action: PayloadAction<string>) => {
      state.log.start = action.payload
    },
    setEnd: (state, action: PayloadAction<string>) => {
      state.log.end = action.payload
      state.ontraining = false
    },
    addSerie: (state, action: PayloadAction<SerieLog>) => {
      state.log.series = state.log.series
        ? [...state.log.series, action.payload]
        : [action.payload]
    },
    eraser: (state) => {
      state.ontraining = initialState.ontraining
      state.log = initialState.log
    }
  }
})

export const { setSetupLog, setStart, setEnd, addSerie, eraser } =
  logSlice.actions
export default logSlice.reducer
