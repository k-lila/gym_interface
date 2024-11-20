import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { Exercise } from '../../components/exercise'
import {
  setDailyWorkout,
  setDefaultWorkout
} from '../../store/reducers/preferences'
import { ModalWorkout } from '../../components/modal_startend'
import { ModalCheck } from '../../components/modal_check'
import { ProgressBar } from '../../components/progress_bar'
import { setFinish } from '../../store/reducers/workoutlog'
import { ModalEdit } from '../../components/modal_edit'
import { RestCounter } from '../../components/rest_counter'

export const WorkoutHandler = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userworkouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )

  const defaultworkout = useSelector(
    (state: RootReducer) => state.preferences.defaultworkout
  )
  const dailyworkout = useSelector(
    (state: RootReducer) => state.preferences.dailyworkout
  )
  const logs = useSelector((state: RootReducer) => state.logs)

  const handleFinish = () => {
    const now = new Date().toUTCString()
    dispatch(setFinish(now))
  }

  const handleBackTraining = () => {
    const workout = userworkouts.find((f) => f.name == logs.log.workoutname)
    const daily = workout?.workouts.find(
      (f) => f.name == logs.log.dailyworkout?.name
    )
    if (workout && daily) {
      dispatch(setDefaultWorkout(workout))
      dispatch(setDailyWorkout(daily))
    }
  }

  const onTrainingPage =
    logs.ontraining &&
    dailyworkout?.name == logs.log.dailyworkout?.name &&
    defaultworkout?.name == logs.log.workoutname
      ? true
      : false

  return (
    <main>
      {logs.ontraining ? <ProgressBar /> : null}
      <div className="p-2 mb-5">
        {dailyworkout?.exercises.map((w, i) => {
          return (
            <Exercise
              key={`${w.exercise.name}${dailyworkout.name}`}
              exerciseNum={i}
            />
          )
        })}
      </div>
      <footer className="bg-dark d-flex justify-content-between p-2 position-fixed bottom-0 w-100">
        <button
          className="btn bg-light btn-outline-primary border-2"
          onClick={() => navigate('/')}
        >
          <i className="bi bi-caret-left-fill"></i>
        </button>
        {logs.ontraining ? (
          <>
            {onTrainingPage ? (
              <button
                className="btn bg-light btn-outline-danger"
                data-bs-toggle="modal"
                data-bs-target="#confirmModal"
                onClick={handleFinish}
              >
                <i className="bi bi-stop-fill"></i>
                <span>finalizar</span>
              </button>
            ) : (
              <button
                className="btn bg-light btn-outline-primary"
                onClick={handleBackTraining}
              >
                treino
              </button>
            )}
          </>
        ) : (
          <button
            className="btn bg-light btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#confirmModal"
          >
            <i className="bi bi-play-fill"></i>
            <span>iniciar</span>
          </button>
        )}
        {logs.ontraining ? <RestCounter /> : null}
        <div className="dropup">
          <button
            type="button"
            className="btn bg-light btn-outline-primary border-2 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            {dailyworkout?.name}
          </button>
          <div
            style={{ minWidth: 'fit-content' }}
            className="dropdown-menu p-2 bg-dark"
          >
            <div
              className="btn-group-vertical d-flex flex-column align-items-center"
              role="group"
              aria-label="Vertical button group"
            >
              <p className="dropdown-header text-light">
                <b>divisão</b>
              </p>
              {defaultworkout?.workouts.map((w, i) => {
                const detach =
                  dailyworkout == w
                    ? 'btn-primary'
                    : 'btn-outline-dark bg-light'
                return (
                  <button
                    key={i}
                    type="button"
                    className={`btn ${detach} my-2`}
                    style={{ width: '3em' }}
                    onClick={() => dispatch(setDailyWorkout(w))}
                  >
                    {w.name}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </footer>
      {dailyworkout ? <ModalWorkout /> : null}
      <ModalCheck />
      <ModalEdit />
    </main>
  )
}
