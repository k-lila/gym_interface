import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { RootReducer } from '../../store'
import { WorkoutHandlerStyled } from './styles'
import { Exercise } from '../../components/exercise'

export const WorkoutHandler = () => {
  const { id } = useParams()
  const user_workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const active_workout = user_workouts.filter((w) => w.name === id)[0]
  const [dailyWorkout, setDailyWorkout] = useState(active_workout.workouts[0])
  const navigate = useNavigate()
  return (
    <WorkoutHandlerStyled>
      <header className="bg-dark">
        <div className="dropdown" data-bs-theme="dark">
          <button
            type="button"
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            {dailyWorkout.name}
          </button>
          <div className="dropdown-menu p-2">
            <div
              className="btn-group-vertical d-flex flex-column align-items-center"
              role="group"
              aria-label="Vertical button group"
            >
              <p className="dropdown-header text-light">divisão</p>
              {active_workout.workouts.map((w, i) => {
                return (
                  <button
                    key={i}
                    type="button"
                    className="btn btn-light my-2"
                    onClick={() => setDailyWorkout(w)}
                  >
                    {w.name}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <button className="btn btn-light" onClick={() => navigate('/workout')}>
          voltar
        </button>
      </header>
      <div className="p-2">
        {active_workout.workouts
          .filter((w) => w.name === dailyWorkout.name)[0]
          .exercises.map((w, i) => {
            return <Exercise key={i} exerciseKey={i} workoutExercise={w} />
          })}
      </div>
    </WorkoutHandlerStyled>
  )
}
