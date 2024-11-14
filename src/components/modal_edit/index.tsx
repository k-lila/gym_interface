import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'
import { editSerie } from '../../store/reducers/workouts'

export const ModalEdit = () => {
  const unitWeight = 1
  const dispatch = useDispatch()
  const workout = useSelector(
    (state: RootReducer) => state.preferences.defaultworkout
  )
  const daily = useSelector(
    (state: RootReducer) => state.preferences.dailyworkout
  )
  const onEdit = useSelector((state: RootReducer) => state.checkedit.onchecking)
  const exercise = daily?.exercises.find(
    (f) => f.exercise.name === onEdit?.name
  )
  const [currentWeight, setCurrentWeight] = useState(
    onEdit ? exercise?.series?.[onEdit?.num - 1]?.weight || 0 : 0
  )
  const [minRep, setMinRep] = useState(
    onEdit ? exercise?.series?.[onEdit?.num - 1]?.repetitions[0] || 1 : 1
  )
  const [maxRep, setMaxRep] = useState(
    onEdit
      ? exercise?.series?.[onEdit?.num - 1]?.repetitions.length == 1
        ? exercise?.series?.[onEdit?.num - 1]?.repetitions[0]
        : exercise?.series?.[onEdit?.num - 1]?.repetitions[1] || 1
      : 1
  )

  useEffect(() => {
    setCurrentWeight(
      onEdit ? exercise?.series?.[onEdit?.num - 1]?.weight || 0 : 0
    )
    setMinRep(
      onEdit ? exercise?.series?.[onEdit?.num - 1]?.repetitions[0] || 1 : 1
    )
    setMaxRep(
      onEdit
        ? exercise?.series?.[onEdit?.num - 1]?.repetitions.length == 1
          ? exercise?.series?.[onEdit?.num - 1]?.repetitions[0]
          : exercise?.series?.[onEdit?.num - 1]?.repetitions[1] || 1
        : 1
    )
  }, [exercise, onEdit])

  const handleSave = () => {
    const newSerie: ExerciseSerie = {
      repetitions: minRep == maxRep ? [minRep] : [minRep, maxRep],
      weight: exercise?.bodyweight ? undefined : currentWeight
    }
    if (exercise?.serietype == 'normal') {
      const newSerieArray = Array(4)
        .fill(null)
        .map(() => newSerie)
      if (workout && daily) {
        dispatch(
          editSerie({
            workoutName: workout.name,
            dailyName: daily.name,
            exerciseName: exercise.exercise.name,
            editedSeries: newSerieArray
          })
        )
      }
    } else {
      const newSerieArray = exercise?.series.map((serie, i) => {
        if (onEdit) {
          return i === onEdit?.num - 1 ? newSerie : serie
        }
      })
      console.log(newSerieArray)
    }
  }

  return (
    <div
      className="modal fade"
      id="modalEdit"
      aria-labelledby="modalEditLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalEditLabel">
              {`${
                exercise?.serietype == 'custom'
                  ? `${onEdit?.num}/${exercise.series.length} - `
                  : ''
              }${exercise?.exercise.name}`}
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
                <div>
                  <b>repetições</b>
                </div>
                <label
                  htmlFor="minrepetitions"
                  className="form-label d-flex my-auto"
                >
                  min
                </label>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-outline-primary m-2"
                    onClick={() => setMinRep(Math.max(minRep - 1, 1))}
                  >
                    -
                  </button>
                  <input
                    id="minrepetitions"
                    value={minRep}
                    onChange={(e) => setMinRep(Number(e.target.value))}
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
                    onClick={() => setMinRep(Math.min(minRep + 1, maxRep))}
                  >
                    +
                  </button>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <button
                    type="button"
                    style={{ transform: 'rotate(90deg)' }}
                    className="btn btn-outline-success"
                    onClick={() => setMinRep(maxRep)}
                  >{`<`}</button>
                  <label
                    htmlFor="maxrepetitions"
                    className="form-label d-flex my-auto"
                  >
                    max
                  </label>
                  <button
                    type="button"
                    style={{ transform: 'rotate(90deg)' }}
                    className="btn btn-outline-success"
                    onClick={() => setMaxRep(minRep)}
                  >{`>`}</button>
                </div>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-outline-primary m-2"
                    onClick={() => setMaxRep(Math.max(maxRep - 1, minRep))}
                  >
                    -
                  </button>
                  <input
                    id="maxrepetitions"
                    value={maxRep}
                    onChange={(e) => setMaxRep(Number(e.target.value))}
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
                    onClick={() => setMaxRep(maxRep + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              {exercise?.bodyweight ? null : (
                <div className="d-flex flex-column align-items-center">
                  <label
                    htmlFor="weight"
                    className="form-label d-flex my-auto mt-3"
                  >
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
              onClick={handleSave}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
