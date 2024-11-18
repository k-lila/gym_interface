import { useDispatch, useSelector } from 'react-redux'
import { SelectWorkout } from '../../components/modal_selectworkout'
import { AccessTrainingStyled } from './styles'
import { RootReducer } from '../../store'
import {
  setDailyWorkout,
  setDefaultWorkout
} from '../../store/reducers/preferences'
import { useNavigate } from 'react-router-dom'

export const AccessTraining = () => {
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
    <AccessTrainingStyled>
      <button className="btn-access btn-access--left" disabled>
        <span className="fs-3 border-bottom border-secondary w-75">criar</span>
        <span className="fs-3">editar</span>
      </button>
      {logs.ontraining ? (
        <div className="btn-access btn-access--right">
          <button
            className="fs-2 btn-access--ontraining border-bottom"
            data-bs-toggle="modal"
            data-bs-target="#chooseWorkout"
          >
            escolher
          </button>
          <button
            onClick={toWorkout}
            className="fs-2 btn-access--ontraining border-top"
          >
            treino
          </button>
        </div>
      ) : (
        <button
          className="fs-2 btn-access btn-access--right"
          data-bs-toggle="modal"
          data-bs-target="#chooseWorkout"
        >
          treino
        </button>
      )}
      <SelectWorkout />
    </AccessTrainingStyled>
  )
}
