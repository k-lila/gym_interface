import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/home'
import { Workout } from './Pages/workout'
import { UserInfo } from './Pages/userinfo'
export const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workout" element={<Workout />} />
      <Route path="/userinfo" element={<UserInfo />} />
    </Routes>
  )
}
