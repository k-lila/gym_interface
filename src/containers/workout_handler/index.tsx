import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootReducer } from '../../store'
import { Exercise } from '../../components/exercise'
import { setDailyWorkout } from '../../store/reducers/preferences'
import {
  eraser,
  setEnd,
  setSetupLog,
  setStart
} from '../../store/reducers/workoutlog'

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

  const onTraining = useSelector((state: RootReducer) => state.logs.ontraining)

  const log = useSelector((state: RootReducer) => state.logs.log)

  const navigate = useNavigate()

  const handleStart = () => {
    const now = new Date().toUTCString()
    dispatch(setSetupLog(daily_active))
    dispatch(setStart(now))
  }
  const handleEnd = () => {
    const now = new Date().toUTCString()
    dispatch(setEnd(now))
    console.log(log)
    dispatch(eraser())
  }

  return (
    <main>
      <header className="bg-dark sticky-top d-flex p-2 justify-content-between">
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
          <div
            style={{ minWidth: 'fit-content' }}
            className="dropdown-menu p-2"
          >
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
                    style={{ width: '3em' }}
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
      <div className="p-2 mb-5">
        {active_workout.workouts
          .filter((w) => w.name === daily_active.name)[0]
          .exercises.map((w, i) => {
            return (
              <Exercise
                key={`${w.exercise.name}${dailyWorkout}`}
                exerciseNum={i}
                workoutExercise={w}
              />
            )
          })}
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="confirmModal"
        aria-labelledby="confirmModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmModalLabel">
                {onTraining ? 'finalizar?' : 'iniciar?'}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* body */}
            <div className="modal-body mx-3 my-0">
              {onTraining ? (
                <div>asd</div>
              ) : (
                <>
                  <div className="row">
                    <p className="col-6 d-flex my-1 justify-content-center">
                      treino
                    </p>
                    <p className="col-6 d-flex my-1 justify-content-center">
                      subdivisão
                    </p>
                  </div>
                  <div className="row border border-dark rounded">
                    <p className="col-6 d-flex my-auto justify-content-center p-2 border-end border-secondary">
                      {active_workout.name}
                    </p>
                    <p className="col-6 d-flex my-auto justify-content-center p-2 border-start border-secondary">
                      {dailyWorkout}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              {onTraining ? (
                <button
                  type="button"
                  className="btn btn-outline-success"
                  data-bs-dismiss="modal"
                  onClick={handleEnd}
                >
                  Confirma
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-success"
                  data-bs-dismiss="modal"
                  onClick={handleStart}
                >
                  Confirma
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark w-100 p-2 d-flex justify-content-center position-fixed bottom-0">
        {onTraining ? (
          <button
            className="btn btn-light"
            data-bs-toggle="modal"
            data-bs-target="#confirmModal"
          >
            Finalizar treino
          </button>
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
    </main>
  )
}
