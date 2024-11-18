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
    setCheckEditSerie: (
      state,
      action: PayloadAction<{ name: string; num: number }>
    ) => {
      state.onchecking = action.payload
    }
  }
})

export const { setCheckEditSerie } = checkeditSlice.actions
export default checkeditSlice.reducer
