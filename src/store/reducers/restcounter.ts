import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RestCounterState = {
  on: boolean
  show: boolean
  refresh: boolean
  rest: boolean
  resttime: number
  seconds: number
  minutes: number
}

const initialState: RestCounterState = {
  on: false,
  show: true,
  refresh: false,
  rest: false,
  resttime: 0,
  seconds: 0,
  minutes: 0
}

const restCounterSlice = createSlice({
  name: 'rest_counter',
  initialState,
  reducers: {
    toggleRestCounter: (state, action: PayloadAction<boolean>) => {
      state.on = action.payload
      if (!action.payload) {
        state.seconds = 0
        state.minutes = 0
      }
    },
    toggleShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload
    },
    toggleRest: (state, action: PayloadAction<boolean>) => {
      state.rest = action.payload
    },
    setRestTime: (state, action: PayloadAction<number>) => {
      state.resttime = action.payload
    },
    refreshRestCounter: (state, action: PayloadAction<boolean>) => {
      state.refresh = action.payload
    },
    setSeconds: (state, action: PayloadAction<number>) => {
      state.seconds = action.payload
    },
    setMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload
    }
  }
})

export const {
  toggleRestCounter,
  toggleShow,
  toggleRest,
  setRestTime,
  refreshRestCounter,
  setSeconds,
  setMinutes
} = restCounterSlice.actions
export default restCounterSlice.reducer
