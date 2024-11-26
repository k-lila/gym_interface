import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserInfoState = {
  name: string
  age: number
  bodyweight: number
  height: number
}

const initialState: UserInfoState = {
  name: 'Krishna',
  age: 35,
  bodyweight: 72.5,
  height: 171
}

const userInfoSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload
    },
    setBodyweight: (state, action: PayloadAction<number>) => {
      state.bodyweight = action.payload
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    }
  }
})

export const { setAge, setBodyweight, setHeight, setName } =
  userInfoSlice.actions
export default userInfoSlice.reducer
