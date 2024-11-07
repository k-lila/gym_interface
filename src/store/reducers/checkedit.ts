import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CheckEditState = {
  onchecking?: {
    name: string
    num: number
  }
}

const initialState: CheckEditState = {
  onchecking: undefined
}

const checkeditSlice = createSlice({
  name: 'checkedit',
  initialState,
  reducers: {
    setCheckSerie: (
      state,
      action: PayloadAction<{ name: string; num: number }>
    ) => {
      state.onchecking = action.payload
    }
  }
})

export const { setCheckSerie } = checkeditSlice.actions
export default checkeditSlice.reducer
