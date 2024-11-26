import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type WorkoutLogState = {
  ontraining: boolean
  finishtime: string
  log: WorkoutLog
  history?: Array<WorkoutLog>
}

const initialState: WorkoutLogState = {
  ontraining: false,
  finishtime: '',
  log: {
    workoutname: undefined,
    dailyworkout: undefined,
    start: undefined,
    end: undefined,
    series: undefined
  }
}

const logSlice = createSlice({
  name: 'log_redux',
  initialState,
  reducers: {
    setSetupLog: (
      state,
      action: PayloadAction<{ name: string; daily: DailyWorkout }>
    ) => {
      state.ontraining = true
      state.log.workoutname = action.payload.name
      state.log.dailyworkout = action.payload.daily
    },
    setStart: (state, action: PayloadAction<string>) => {
      state.log.start = action.payload
    },
    setEnd: (state, action: PayloadAction<string>) => {
      state.log.end = action.payload
      state.ontraining = false
    },
    setFinish: (state, action: PayloadAction<string>) => {
      state.finishtime = action.payload
    },
    addSerie: (state, action: PayloadAction<SerieLog>) => {
      state.log.series = state.log.series
        ? [...state.log.series, action.payload]
        : [action.payload]
    },
    eraser: (state) => {
      state.ontraining = initialState.ontraining
      state.log = initialState.log
    },
    addHistory: (state, action: PayloadAction<WorkoutLog>) => {
      state.history = [...(state.history || []), action.payload]
    }
  }
})

export const {
  setSetupLog,
  setStart,
  setEnd,
  setFinish,
  addSerie,
  eraser,
  addHistory
} = logSlice.actions
export default logSlice.reducer
