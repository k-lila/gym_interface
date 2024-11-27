import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserInfoState = {
  name: string
  age: number
  bodyweight: number
  height: number
}

const initialState: UserInfoState = {
  name: '',
  age: 0,
  bodyweight: 0,
  height: 0
}

const userInfoSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setUserAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload
    },
    setUserBodyweight: (state, action: PayloadAction<number>) => {
      state.bodyweight = action.payload
    },
    setUserHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    }
  }
})

export const { setUserAge, setUserBodyweight, setUserHeight, setUserName } =
  userInfoSlice.actions
export default userInfoSlice.reducer
