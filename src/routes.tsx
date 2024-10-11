import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/home'
import { Workouts } from './Pages/workouts'
import { Workout } from './Pages/workout'
export const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workout" element={<Workouts />} />
      <Route path="/workout/:id" element={<Workout />} />
    </Routes>
  )
}
