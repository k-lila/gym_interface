import { useDispatch, useSelector } from 'react-redux'
import { WorkoutHandler } from '../containers/workout_handler'
import { RootReducer } from '../store'
import { useParams } from 'react-router-dom'

export const Workout = () => {
  const dispatch = useDispatch()
  const workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )

  return (
    <>
      <WorkoutHandler />
      <footer className="bg-dark w-100 p-2 d-flex justify-content-center position-fixed bottom-0">
        <button className="btn btn-light">Iniciar treino</button>
      </footer>
    </>
  )
}
