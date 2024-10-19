import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { RootReducer } from '../../store'
import { WorkoutHandlerStyled } from './styles'
import { Exercise } from '../../components/exercise'
import { setDailyWorkout } from '../../store/reducers/preferences'

export const WorkoutHandler = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user_workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const dailyWorkout = useSelector(
    (state: RootReducer) => state.preferences.dailyworkout
  )
  const active_workout = user_workouts.filter((w) => w.name === id)[0]
  const daily_active = active_workout.workouts.filter(
    (f) => f.name == dailyWorkout
  )[0]

  const navigate = useNavigate()
  let senha
  if (daily_active.name == 'A') {
    senha = 1
  } else {
    senha = 2
  }
  return (
    <WorkoutHandlerStyled key={senha}>
      <header className="bg-dark">
        <div className="dropdown" data-bs-theme="dark">
          <button
            type="button"
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            {daily_active.name}
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
                    onClick={() => dispatch(setDailyWorkout(w.name))}
                  >
                    {w.name}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <button className="btn btn-light" onClick={() => navigate('/')}>
          voltar
        </button>
      </header>
      <div className="p-2">
        {active_workout.workouts
          .filter((w) => w.name === daily_active.name)[0]
          .exercises.map((w, i) => {
            return <Exercise key={i} exerciseKey={i} workoutExercise={w} />
          })}
      </div>
    </WorkoutHandlerStyled>
  )
}
