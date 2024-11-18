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
import { RestCounter } from '../../components/rest_counter'
import { ProgressBar } from '../../components/progress_bar'
import { setFinish } from '../../store/reducers/workoutlog'
import { ModalEdit } from '../../components/modal_edit'

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
  const rest_counter_key = useSelector(
    (state: RootReducer) => state.logs.log.series
  )?.length

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

  const headerBg = onTrainingPage ? 'rgba(70, 70, 85)' : '#212529'
  return (
    <main>
      <header
        style={{ backgroundColor: headerBg, transition: 'all 1s' }}
        className="sticky-top d-flex p-2 justify-content-between"
      >
        <button className="btn btn-light" onClick={() => navigate('/')}>
          voltar
        </button>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-light dropdown-toggle"
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
      </header>
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
      <footer
        style={{ backgroundColor: headerBg, transition: 'all 1s' }}
        className={`w-100 p-2 d-flex ${
          rest_counter_key
            ? 'justify-content-between'
            : 'justify-content-center'
        } position-fixed bottom-0`}
      >
        {logs.ontraining ? (
          <>
            {onTrainingPage ? (
              <button
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#confirmModal"
                onClick={handleFinish}
              >
                finalizar
              </button>
            ) : (
              <button className="btn btn-light" onClick={handleBackTraining}>
                treino
              </button>
            )}
            {rest_counter_key ? <RestCounter key={rest_counter_key} /> : null}
          </>
        ) : (
          <button
            className="btn btn-light"
            data-bs-toggle="modal"
            data-bs-target="#confirmModal"
          >
            Iniciar treino
          </button>
        )}
      </footer>
      {dailyworkout ? <ModalWorkout /> : null}
      <ModalCheck />
      <ModalEdit />
    </main>
  )
}
