import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { useState } from 'react'

export const SelectWorkout = () => {
  const navigate = useNavigate()
  const workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const [selectedWorkout, setSelectedWorkout] = useState({
    workoutIndex: 0,
    dailyIndex: 0
  })
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
                value={workouts[selectedWorkout.workoutIndex].name}
                onChange={(e) =>
                  setSelectedWorkout({
                    workoutIndex: e.target.selectedIndex,
                    dailyIndex: selectedWorkout.dailyIndex
                  })
                }
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
            <div className="d-flex overflow-x-auto m-2">
              {workouts[selectedWorkout.workoutIndex].workouts.map((dw, i) => {
                if (i == selectedWorkout.dailyIndex) {
                  return (
                    <button
                      onClick={() =>
                        setSelectedWorkout({
                          workoutIndex: selectedWorkout.workoutIndex,
                          dailyIndex: i
                        })
                      }
                      className="btn btn-outline-primary mx-2 my-3 active"
                      key={i}
                    >
                      {dw.name}
                    </button>
                  )
                } else {
                  return (
                    <button
                      onClick={() =>
                        setSelectedWorkout({
                          workoutIndex: selectedWorkout.workoutIndex,
                          dailyIndex: i
                        })
                      }
                      className="btn btn-outline-primary mx-2 my-3"
                      key={i}
                    >
                      {dw.name}
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
              onClick={() =>
                navigate(
                  `workout/${selectedWorkout.workoutIndex}/${selectedWorkout.dailyIndex}`
                )
              }
            >
              <span>confirmar</span>
              <i className="bi bi-check-lg ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
