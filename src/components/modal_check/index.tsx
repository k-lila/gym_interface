import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'
import { addSerie } from '../../store/reducers/workoutlog'
import { useParams } from 'react-router-dom'

export const ModalCheck = () => {
  const dispatch = useDispatch()

  const { workoutIndex, dailyIndex } = useParams()
  const user_workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const serieCheck = useSelector(
    (state: RootReducer) => state.checkedit.onchecking
  )
  const exercise = serieCheck
    ? user_workouts[Number(workoutIndex)].workouts[Number(dailyIndex)]
        .exercises[serieCheck?.exerciseIndex]
    : undefined
  const serie =
    serieCheck && exercise ? exercise.series[serieCheck.serieIndex] : undefined

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
      } else {
        setCurrentWeight(0)
      }
    }
  }, [serie])
  const handleConfirm = () => {
    if (exercise?.exercise.name) {
      const serieLog: SerieLog = {
        exercise: exercise?.exercise.name,
        datetime: new Date().toUTCString(),
        repetitions: currentReps,
        weight: currentWeight,
        rest: exercise.rest
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
              {`${serieCheck ? serieCheck.serieIndex + 1 : null} - ${
                exercise?.exercise.name
              }`}
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
              <span>confirmar</span>
              <i className="bi bi-check-lg ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
