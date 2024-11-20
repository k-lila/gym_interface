import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import {
  setDailyWorkout,
  setDefaultWorkout
} from '../../store/reducers/preferences'
import { HomeStyled } from './styles'
import { SelectWorkout } from '../../components/modal_selectworkout'

export const HomeHandler = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logs = useSelector((state: RootReducer) => state.logs)
  const userworkouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )

  const toWorkout = () => {
    const workout = userworkouts.find((f) => f.name == logs.log.workoutname)
    const daily = workout?.workouts.find(
      (f) => f.name == logs.log.dailyworkout?.name
    )
    if (workout && daily) {
      dispatch(setDefaultWorkout(workout))
      dispatch(setDailyWorkout(daily))
      navigate('/workout')
    }
  }
  return (
    <HomeStyled className="container bg-dark">
      <div className="row">
        <div className="bg-light rounded info">info</div>
      </div>

      <div className="row d-flex justify-content-evenly">
        <button className="btn btn-primary col-4">A</button>
        <button className="btn btn-primary col-4">B</button>
      </div>

      <div className="row d-flex justify-content-evenly">
        <button className="btn btn-primary col-4">
          <span className="fs-3 border-bottom border-secondary w-75">
            criar
          </span>
          <span className="fs-3">editar</span>
        </button>
        {logs.ontraining ? (
          <div className="col-4">
            <button
              className="fs-2 border-bottom"
              data-bs-toggle="modal"
              data-bs-target="#chooseWorkout"
            >
              escolher
            </button>
            <button onClick={toWorkout} className="fs-2 border-top">
              treino
            </button>
          </div>
        ) : (
          <button
            className="btn btn-primary fs-2 col-4"
            data-bs-toggle="modal"
            data-bs-target="#chooseWorkout"
          >
            treino
          </button>
        )}
      </div>
      <SelectWorkout />
    </HomeStyled>
  )
}
