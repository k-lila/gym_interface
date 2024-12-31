import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootReducer } from '../../store'
import { Exercise } from '../../components/exercise'
import { ModalWorkout } from '../../components/modal_startend'
import { ModalCheck } from '../../components/modal_check'
import { ProgressBar } from '../../components/progress_bar'
import { setFinish } from '../../store/reducers/workoutlog'
import { ModalEdit } from '../../components/modal_edit'
import { RestCounter } from '../../components/rest_counter'

export const WorkoutHandler = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { workoutIndex, dailyIndex } = useParams()
  const userworkouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const logs = useSelector((state: RootReducer) => state.logs)

  const defaultworkout = userworkouts[Number(workoutIndex)]
  const dailyworkout = defaultworkout.workouts[Number(dailyIndex)]

  const handleFinish = () => {
    const now = new Date().toUTCString()
    dispatch(setFinish(now))
  }

  const handleBackTraining = () => {
    const workout = userworkouts.findIndex(
      (f) => f.name == logs.log.workoutname
    )
    const daily = userworkouts[workout].workouts.findIndex(
      (f) => f.name == logs.log.dailyworkout?.name
    )
    navigate(`/workout/${workout}/${daily}`)
  }

  const onTrainingPage =
    logs.ontraining &&
    dailyworkout?.name == logs.log.dailyworkout?.name &&
    defaultworkout?.name == logs.log.workoutname
      ? true
      : false

  return (
    <main style={{ height: '100svh' }} className="d-flex bg-dark">
      <div
        style={{
          width: '100%',
          height: '100svh',
          maxHeight: '1000px',
          maxWidth: '450px'
        }}
        className="d-flex flex-column justify-content-between bg-dark m-auto pt-2 overflow-hidden"
      >
        {logs.ontraining ? <ProgressBar /> : null}
        <div
          style={{
            maxWidth: '500px',
            overflow: 'auto',
            height: '100%'
          }}
          className="p-2 mx-2 mb-2 bg-light rounded"
        >
          {dailyworkout.exercises.map((w, i) => {
            return (
              <Exercise
                key={`${w.exercise.name}${dailyworkout.name}`}
                exerciseNum={i}
              />
            )
          })}
        </div>
        <footer className="bg-dark px-2 pb-2 w-100">
          <div className="bg-light rounded d-flex justify-content-between p-1">
            <button
              className="btn btn-primary border-2"
              onClick={() => navigate('/')}
            >
              <i className="bi bi-caret-left-fill"></i>
            </button>
            {logs.ontraining ? (
              <>
                {onTrainingPage ? (
                  <div className="d-flex bg-light m-0 p-0 rounded">
                    <button
                      className="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#confirmModal"
                      onClick={handleFinish}
                    >
                      <i className="bi bi-stop-fill"></i>
                      <span>finalizar</span>
                    </button>
                  </div>
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
              <div className="d-flex bg-light m-0 p-0 rounded">
                <button
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmModal"
                >
                  <i className="bi bi-play-fill"></i>
                  <span>iniciar</span>
                </button>
              </div>
            )}
            {logs.ontraining ? <RestCounter /> : null}
            <div className="dropup bg-light rounded">
              <button
                type="button"
                className="btn btn-primary border-2 dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                {dailyworkout?.name}
              </button>
              <div
                style={{ minWidth: 'fit-content' }}
                className="dropdown-menu px-2 pt-0 bg-dark"
              >
                <p className="dropdown-header text-light py-1 mt-1">
                  <b>divisão</b>
                </p>
                <div className="bg-light rounded">
                  <div
                    className="btn-group-vertical d-flex flex-column align-items-center py-2"
                    role="group"
                    aria-label="Vertical button group"
                  >
                    {defaultworkout?.workouts.map((w, i) => {
                      const detach =
                        dailyworkout == w
                          ? 'btn-primary'
                          : 'btn-outline-primary'
                      return (
                        <button
                          key={i}
                          type="button"
                          className={`btn ${detach} my-2`}
                          style={{ width: '3em' }}
                          onClick={() =>
                            navigate(`/workout/${workoutIndex}/${i}`)
                          }
                        >
                          {w.name}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {dailyworkout ? <ModalWorkout /> : null}
        <ModalCheck />
        <ModalEdit />
      </div>
    </main>
  )
}
