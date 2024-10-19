import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import {
  setDailyWorkout,
  setDefaultWorkout
} from '../../store/reducers/preferences'

export const Acess_Training = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const defaultworkout = useSelector(
    (state: RootReducer) => state.preferences.defaultworkout
  )
  const dailyworkout = useSelector(
    (state: RootReducer) => state.preferences.dailyworkout
  )

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDefaultWorkout(event.target.value))
  }
  const handleWorkoutConfirm = () => {
    navigate(`/workout/${defaultworkout}`)
  }

  return (
    <>
      <div className="d-flex flex-column p-3 bg-dark rounded">
        <button
          style={{ height: '33vmin', width: '33vmin' }}
          className="btn btn-outline-primary bg-light m-3 d-flex flex-column align-items-center justify-content-center"
        >
          <span className="fs-3 border-bottom border-primary w-75">criar</span>
          <span className="fs-3">editar</span>
        </button>
        <button
          style={{ height: '33vmin', width: '33vmin' }}
          className="btn btn-outline-primary bg-light m-3 fs-2"
          data-bs-toggle="modal"
          data-bs-target="#chooseWorkout"
        >
          treino
        </button>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="chooseWorkout"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="chooseWorkoutLabel">
                Escolha seu treino
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* body */}
            <div className="modal-body">
              <form className="d-flex flex-column">
                <label htmlFor="workouts" className="form-label">
                  Treino
                </label>
                <select
                  name="workouts"
                  id="workouts"
                  className="form-control"
                  value={defaultworkout}
                  onChange={handleSelect}
                >
                  {workouts.map((w, i) => {
                    return (
                      <option key={i} value={w.name}>
                        {w.name}
                      </option>
                    )
                  })}
                </select>
              </form>
              <div className="d-flex overflow-x-auto m-2 border-bottom border-secondary">
                {workouts
                  .filter((f) => f.name == defaultworkout)[0]
                  .workouts.map((w, i) => {
                    if (w.name == dailyworkout) {
                      return (
                        <button
                          onClick={() => dispatch(setDailyWorkout(w.name))}
                          className="btn btn-outline-primary mx-2 my-3 active"
                          key={i}
                        >
                          {w.name}
                        </button>
                      )
                    } else {
                      return (
                        <button
                          onClick={() => dispatch(setDailyWorkout(w.name))}
                          className="btn btn-outline-primary mx-2 my-3"
                          key={i}
                        >
                          {w.name}
                        </button>
                      )
                    }
                  })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-dismiss="modal"
                onClick={handleWorkoutConfirm}
              >
                Confirma
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
