import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'
import { editWorkoutExercise } from '../../utils/editworkout'
import { editWorkout } from '../../store/reducers/workouts'

import { useParams } from 'react-router-dom'

export const ModalEdit = () => {
  const unitWeight = 1
  const dispatch = useDispatch()
  const { workoutIndex, dailyIndex } = useParams()

  const user_workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const workout = user_workouts[Number(workoutIndex)]
  const daily = workout.workouts[Number(dailyIndex)]
  const onEdit = useSelector((state: RootReducer) => state.checkedit.onchecking)
  const exercise = onEdit ? daily.exercises[onEdit.exerciseIndex] : undefined

  const [currentWeight, setCurrentWeight] = useState(
    onEdit ? exercise?.series?.[onEdit?.serieIndex]?.weight || 0 : 0
  )

  const [minRep, setMinRep] = useState(
    onEdit ? exercise?.series?.[onEdit?.serieIndex]?.repetitions[0] || 1 : 1
  )
  const [maxRep, setMaxRep] = useState(
    onEdit
      ? exercise?.series?.[onEdit?.serieIndex]?.repetitions.length == 1
        ? exercise?.series?.[onEdit?.serieIndex]?.repetitions[0]
        : exercise?.series?.[onEdit?.serieIndex]?.repetitions[1] || 1
      : 1
  )

  useEffect(() => {
    setCurrentWeight(
      onEdit ? exercise?.series?.[onEdit?.serieIndex]?.weight || 0 : 0
    )
    setMinRep(
      onEdit ? exercise?.series?.[onEdit?.serieIndex]?.repetitions[0] || 1 : 1
    )
    setMaxRep(
      onEdit
        ? exercise?.series?.[onEdit?.serieIndex]?.repetitions.length == 1
          ? exercise?.series?.[onEdit?.serieIndex]?.repetitions[0]
          : exercise?.series?.[onEdit?.serieIndex]?.repetitions[1] || 1
        : 1
    )
  }, [exercise, onEdit])

  const handleSave = () => {
    const newSerie: ExerciseSerie = {
      repetitions: minRep == maxRep ? [minRep] : [minRep, maxRep],
      weight: exercise?.bodyweight ? undefined : currentWeight
    }
    let newSerieArray: ExerciseSerie[]
    if (exercise?.serietype == 'normal') {
      newSerieArray = Array(4)
        .fill(null)
        .map(() => newSerie)
    } else {
      newSerieArray = []
      exercise?.series.forEach((serie, i) => {
        if (onEdit && i === onEdit.serieIndex) {
          newSerieArray.push(newSerie)
        } else if (serie) {
          newSerieArray.push(serie)
        }
      })
    }
    if (exercise && daily && workout) {
      const newWorkoutExercise: WorkoutExercise = {
        ...exercise,
        series: newSerieArray
      }
      const newDaily = editWorkoutExercise(daily, newWorkoutExercise)
      const newWorkout: Workout = {
        ...workout,
        workouts: workout.workouts.map((w) => {
          return w.name == newDaily.name ? newDaily : w
        })
      }
      dispatch(editWorkout(newWorkout))
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
                  ? `${onEdit ? onEdit.serieIndex + 1 : '-'}/${
                      exercise.series.length
                    } - `
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
                    onClick={() => {
                      if (minRep == maxRep) {
                        setMinRep(minRep + 1)
                        setMaxRep(maxRep + 1)
                      } else {
                        setMinRep(minRep + 1)
                      }
                    }}
                  >
                    +
                  </button>
                </div>
                <label
                  htmlFor="maxrepetitions"
                  className="form-label d-flex my-auto"
                >
                  max
                </label>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-outline-primary m-2"
                    onClick={() => {
                      if (maxRep == minRep) {
                        setMinRep(Math.max(minRep - 1, 1))
                        setMaxRep(Math.max(maxRep - 1, 1))
                      } else {
                        setMaxRep(maxRep - 1)
                      }
                    }}
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
              <span>confirmar</span>
              <i className="bi bi-check-lg ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
