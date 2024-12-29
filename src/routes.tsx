import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/home'
import { Workout } from './Pages/workout'
export const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workout/:workoutIndex/:dailyIndex" element={<Workout />} />
    </Routes>
  )
}
