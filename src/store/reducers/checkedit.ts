import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CheckEditState = {
  onchecking?: {
    exerciseIndex: number
    serieIndex: number
  }
}

const initialState: CheckEditState = {
  onchecking: undefined
}

const checkeditSlice = createSlice({
  name: 'checkedit',
  initialState,
  reducers: {
    setCheckEditSerie: (
      state,
      action: PayloadAction<{ exerciseIndex: number; serieIndex: number }>
    ) => {
      state.onchecking = action.payload
    }
  }
})

export const { setCheckEditSerie } = checkeditSlice.actions
export default checkeditSlice.reducer
