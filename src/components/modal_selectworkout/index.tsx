import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import {
  setDailyWorkout,
  setDefaultWorkout
} from '../../store/reducers/preferences'

export const SelectWorkout = () => {
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
  const handleSelectWorkout = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWorkout = workouts.filter(
      (f) => f.name == event.target.value
    )[0]
    dispatch(setDefaultWorkout(selectedWorkout))
    dispatch(setDailyWorkout(selectedWorkout.workouts[0]))
  }
  const handleSelectDaily = (name: string) => {
    const daily = defaultworkout?.workouts.filter((f) => f.name == name)[0]
    if (daily) {
      dispatch(setDailyWorkout(daily))
    }
  }

  return (
    <div
      className="modal fade"
      id="chooseWorkout"
      aria-labelledby="chooseWorkoutLabel"
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
          <div className="modal-body">
            <form className="d-flex flex-column">
              <label htmlFor="workouts" className="form-label">
                Treino
              </label>
              <select
                name="workouts"
                id="workouts"
                className="form-control"
                value={defaultworkout?.name}
                onChange={handleSelectWorkout}
              >
                <option value="">Selecione</option>
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
              {defaultworkout
                ? defaultworkout.workouts.map((dw, i) => {
                    if (dw.name == dailyworkout?.name) {
                      return (
                        <button
                          onClick={() => handleSelectDaily(dw.name)}
                          className="btn btn-outline-primary mx-2 my-3 active"
                          key={i}
                        >
                          {dw.name}
                        </button>
                      )
                    } else {
                      return (
                        <button
                          onClick={() => handleSelectDaily(dw.name)}
                          className="btn btn-outline-primary mx-2 my-3"
                          key={i}
                        >
                          {dw.name}
                        </button>
                      )
                    }
                  })
                : null}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-dismiss="modal"
              onClick={() => navigate('/workout')}
              disabled={defaultworkout ? false : true}
            >
              <i className="bi bi-check-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
