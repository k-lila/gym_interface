import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { Exercise } from '../../components/exercise'
import { setDailyWorkout } from '../../store/reducers/preferences'
import { ModalWorkout } from '../../components/modal_startend'
import { ModalCheck } from '../../components/modal_check'
import { RestCounter } from '../../components/rest_counter'
import { ProgressBar } from '../../components/progress_bar'
import { setFinish } from '../../store/reducers/workoutlog'

export const WorkoutHandler = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const defaultworkout = useSelector(
    (state: RootReducer) => state.preferences.defaultworkout
  )
  const dailyworkout = useSelector(
    (state: RootReducer) => state.preferences.dailyworkout
  )
  const onTraining = useSelector((state: RootReducer) => state.logs.ontraining)
  const rest_counter_key = useSelector(
    (state: RootReducer) => state.logs.log.series
  )?.length

  const handleFinish = () => {
    const now = new Date().toUTCString()
    dispatch(setFinish(now))
  }

  return (
    <main>
      <header className="sticky-top d-flex p-2 justify-content-between bg-dark">
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
              <p className="dropdown-header text-light">divisão</p>
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
      {onTraining ? <ProgressBar /> : null}
      <div className="p-2 mb-5">
        {dailyworkout?.exercises.map((w, i) => {
          return (
            <Exercise
              key={`${w.exercise.name}${dailyworkout.name}`}
              exerciseNum={i}
              workoutExercise={w}
            />
          )
        })}
      </div>
      <footer
        className={`bg-dark w-100 p-2 d-flex ${
          rest_counter_key
            ? 'justify-content-between'
            : 'justify-content-center'
        } position-fixed bottom-0`}
      >
        {onTraining ? (
          <>
            <button
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#confirmModal"
              onClick={handleFinish}
            >
              Finalizar treino
            </button>
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
    </main>
  )
}
