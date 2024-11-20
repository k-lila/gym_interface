import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'
import { addSerie } from '../../store/reducers/workoutlog'

export const ModalCheck = () => {
  const dispatch = useDispatch()
  const serieCheck = useSelector(
    (state: RootReducer) => state.checkedit.onchecking
  )
  const exercise = useSelector(
    (state: RootReducer) =>
      state.preferences.dailyworkout?.exercises.filter(
        (f) => f.exercise.name == serieCheck?.name
      )[0]
  )
  const serie = exercise?.series[serieCheck ? serieCheck.num - 1 : 0]
  const [currentReps, setCurrentReps] = useState(
    serie ? serie.repetitions[0] : 0
  )
  const [currentWeight, setCurrentWeight] = useState(
    serie?.weight ? serie.weight : 0
  )
  const unitWeight = 1
  useEffect(() => {
    if (serie) {
      setCurrentReps(serie.repetitions[0])
      if (serie.weight) {
        setCurrentWeight(serie.weight)
      }
    }
  }, [serie])
  const handleConfirm = () => {
    if (exercise?.exercise.name) {
      const serieLog: SerieLog = {
        exercise: exercise?.exercise.name,
        datetime: new Date().toUTCString(),
        repetitions: currentReps,
        weight: currentWeight
      }
      dispatch(addSerie(serieLog))
    }
  }
  return (
    <div
      className="modal fade"
      id={`modalCheck`}
      aria-labelledby="modalCheckLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalCheckLabel">
              {serieCheck?.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* modal body --------------------------------------------------------------------------- */}
          <div className="modal-body mx-3 my-0">
            <form>
              <div className="d-flex flex-column align-items-center">
                <label
                  htmlFor="repetitions"
                  className="form-label d-flex my-auto"
                >
                  <b>repetições</b>
                </label>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-outline-primary m-2"
                    onClick={() =>
                      setCurrentReps(currentReps - 1 <= 1 ? 1 : currentReps - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    id="repetitions"
                    value={currentReps}
                    onChange={(e) => setCurrentReps(Number(e.target.value))}
                    className="p-1 text-center fs-3 border rounded"
                    style={{
                      width: '3em',
                      height: '100%',
                      margin: 'auto'
                    }}
                    type="number"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-primary m-2"
                    onClick={() => setCurrentReps(currentReps + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              {exercise?.bodyweight ? null : (
                <div className="d-flex flex-column align-items-center">
                  <label htmlFor="weight" className="form-label d-flex my-auto">
                    <b>carga</b>
                  </label>
                  <div className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-primary m-2"
                      onClick={() =>
                        setCurrentWeight(
                          Math.max(currentWeight - unitWeight, 0)
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      id="weight"
                      value={currentWeight}
                      onChange={(e) => setCurrentWeight(Number(e.target.value))}
                      className="p-1 text-center fs-3 border rounded"
                      style={{
                        width: '3em',
                        height: '100%',
                        margin: 'auto'
                      }}
                      type="number"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-primary m-2"
                      onClick={() =>
                        setCurrentWeight(currentWeight + unitWeight)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-dismiss="modal"
              onClick={handleConfirm}
            >
              <i className="bi bi-check-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
