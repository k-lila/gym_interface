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
import { HomeInfo } from '../../components/home_info'
import { UserInfoModal } from '../../components/modal_userinfo'
import { ConfigModal } from '../../components/modal_config'

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
      <div className="bg-light rounded px-1 py-2 d-block m-auto">
        <div className="container bg-light rounded p-1">
          <div className="row d-flex m-0 my-2 rounded">
            <HomeInfo />
          </div>
          <div className="row d-flex m-auto">
            <div className="col-6 p-0 d-flex align-items-center justify-content-center">
              <button disabled className="btn btn-primary m-2 btn-home">
                <i className="bi bi-person-circle"></i>
                <span>conexões</span>
              </button>
            </div>
            <div className="col-6 p-0 d-flex align-items-center justify-content-center">
              <button disabled className="btn btn-primary m-2 btn-home">
                <i className="bi bi-pie-chart-fill"></i>
                <span>gráficos</span>
              </button>
            </div>
          </div>
          <div className="row d-flex m-auto">
            <div className="col-6 p-0 d-flex align-items-center justify-content-center">
              <button disabled className="btn btn-primary m-2 btn-home">
                <i className="bi bi-tools"></i>
                <span>criar/editar</span>
              </button>
            </div>
            <div className="col-6 p-0 d-flex align-items-center justify-content-center">
              <button
                className="btn btn-primary btn-home"
                data-bs-toggle="modal"
                data-bs-target="#chooseWorkout"
              >
                <img className="btn-image" src={exercise} alt="haltere" />
                <span>treino</span>
              </button>
            </div>
          </div>
          {logs.ontraining ? (
            <div className="row d-flex px-3 my-2">
              <button
                onClick={toWorkout}
                className={`btn ${
                  logs.ontraining ? 'btn-success' : 'btn-dark text-dark'
                }`}
              >
                <i className="bi bi-fast-forward-fill me-1"></i>
                <span>treino em andamento</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <SelectWorkout />
      <UserInfoModal />
      <ConfigModal />
    </HomeStyled>
  )
}
