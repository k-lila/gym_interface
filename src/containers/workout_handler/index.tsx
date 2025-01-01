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
import { WorkoutHandlerStyled } from './styles'

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
    dailyworkout.name == logs.log.dailyworkout?.name &&
    defaultworkout.name == logs.log.workoutname
      ? true
      : false

  return (
    <WorkoutHandlerStyled className="d-flex bg-dark">
      <div className="d-flex flex-column justify-content-between bg-dark m-auto pt-2 overflow-hidden workoutcontainer">
        <div className="p-2 mx-2 mb-1 bg-light rounded exercises">
          {dailyworkout.exercises.map((w, i) => {
            return (
              <Exercise
                key={`${w.exercise.name}${dailyworkout.name}`}
                exerciseNum={i}
              />
            )
          })}
        </div>
        {logs.ontraining ? <ProgressBar /> : null}
        <footer className="bg-dark px-1 pb-2 mt-1 w-100">
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
                {dailyworkout.name}
              </button>
              <div
                style={{ minWidth: 'max-content' }}
                className="dropdown-menu px-2 bg-dark"
              >
                <div style={{ width: 'fit-content' }}>
                  <label
                    htmlFor="workouts"
                    className="text-light py-1 mt-1 w-100 text-center"
                  >
                    <b>treino</b>
                  </label>
                  <select
                    name="workouts"
                    id="workouts"
                    className="form-control"
                    onChange={(e) => {
                      navigate(`/workout/${e.target.value}/0`)
                    }}
                  >
                    {userworkouts.map((m, i) => {
                      return (
                        <option key={i} value={i}>
                          {m.name}
                        </option>
                      )
                    })}
                  </select>
                  <label
                    htmlFor="divisions"
                    className="text-light py-1 mt-3 w-100 text-center"
                  >
                    <b>divisão</b>
                  </label>
                  <div className="bg-light rounded">
                    <div
                      className="btn-group-vertical d-flex flex-column align-items-center py-2"
                      id="divisions"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      {defaultworkout.workouts.map((w, i) => {
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
          </div>
        </footer>
        <ModalWorkout />
        <ModalCheck />
        <ModalEdit />
      </div>
    </WorkoutHandlerStyled>
  )
}
