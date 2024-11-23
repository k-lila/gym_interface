import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import {
  setDailyWorkout,
  setDefaultWorkout
} from '../../store/reducers/preferences'
import { HomeStyled } from './styles'
import { SelectWorkout } from '../../components/modal_selectworkout'
import exercise from '../../assets/exercise.png'

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
    <HomeStyled className="bg-dark">
      <div className="bg-light rounded info">info</div>

      <div className="container">
        <div className="row d-flex">
          <div className="col-6 p-1 d-flex align-items-center justify-content-center">
            <button
              // disabled
              className="btn btn-light btn-home btn-home--disabled"
            >
              <i className="bi bi-person-circle"></i>
              <span>conexões</span>
            </button>
          </div>
          <div className="col-6 p-1 d-flex align-items-center justify-content-center">
            <button
              // disabled
              className="btn btn-light btn-home btn-home--disabled"
            >
              <i className="bi bi-pie-chart-fill"></i>
              <span>gráficos</span>
            </button>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-6 p-1 d-flex align-items-center justify-content-center">
            <button
              // disabled
              className="btn btn-light btn-home btn-home--disabled d-flex flex-column justify-content-center align-items-center"
            >
              <i className="bi bi-tools"></i>
              <span>criar/editar</span>
            </button>
          </div>
          <div className="col-6 p-1 d-flex align-items-center justify-content-center">
            <button
              className="btn btn-primary btn-home d-flex flex-column justify-content-center align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#chooseWorkout"
            >
              <img className="btn-image m-2" src={exercise} alt="haltere" />
              <span>treino</span>
            </button>
          </div>
        </div>
        <div className="row d-flex px-3 my-3">
          <button
            onClick={toWorkout}
            className={`btn ${
              logs.ontraining
                ? 'btn-outline-success bg-light'
                : 'btn-dark text-dark'
            }`}
            disabled={!logs.ontraining}
          >
            <i className="bi bi-fast-forward-fill me-1"></i>
            <span>treino em andamento</span>
          </button>
        </div>
      </div>
      <SelectWorkout />
    </HomeStyled>
  )
}
