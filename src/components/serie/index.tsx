import check from '../../assets/check_serie.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setCheckEditSerie } from '../../store/reducers/checkedit'

export const Serie = ({ ...props }: SerieProps) => {
  const dispatch = useDispatch()

  const exercises = useSelector(
    (state: RootReducer) => state.preferences.dailyworkout?.exercises
  )
  const ontraining = useSelector((state: RootReducer) => state.logs.ontraining)
  const seriesLog = useSelector((state: RootReducer) => state.logs.log.series)

  const exercise = exercises
    ? exercises.find((f) => f.exercise.name == props.exerciseName)
    : null
  const exerciseLogs = seriesLog?.filter(
    (f) => f.exercise == exercise?.exercise.name
  )
  const exerciseChecks = exerciseLogs ? exerciseLogs.length : 0
  const serie = exercise ? exercise.series[props.serienum - 1] : null

  const reps = ontraining
    ? exerciseChecks > props.serienum - 1 && exerciseLogs
      ? [exerciseLogs[props.serienum - 1].repetitions]
      : serie?.repetitions
    : serie?.repetitions
  const weight = ontraining
    ? exerciseChecks > props.serienum - 1 && exerciseLogs
      ? [exerciseLogs[props.serienum - 1].weight]
      : serie?.weight
    : `${serie && serie.weight ? serie.weight : ''}`

  const handleCheck = () => {
    if (exercise) {
      dispatch(
        setCheckEditSerie({
          name: exercise?.exercise.name,
          num: props.serienum
        })
      )
    }
  }

  return (
    <div
      className={`row border-bottom border-secondary d-flex justify-content-between ${
        exerciseLogs && exerciseLogs.length > props.serienum - 1
          ? 'bg-checked'
          : ''
      }`}
    >
      <span className="col-1 d-flex align-items-center justify-content-center border-end">
        {props.serienum}
      </span>
      <span className="col-4 d-flex align-items-center justify-content-center">
        {reps
          ? reps.length == 1
            ? `${reps[0]}x`
            : `${reps[0]}-${reps[1]}x`
          : null}
      </span>
      <span className="col-5 d-flex align-items-center justify-content-center">
        {exercise && exercise.bodyweight
          ? '-'
          : `${weight ? weight : ''}${
              weight && exercise && exercise.unit ? exercise.unit : '-'
            }`}
      </span>
      {ontraining ? (
        exerciseChecks == props.serienum - 1 ? (
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalCheck"
            onClick={handleCheck}
            className="btn col-1 p-0 edit-btn"
          >
            <i
              style={{ fontSize: '0.85em', color: 'rgba(0, 100, 0)' }}
              className="bi bi-circle"
            ></i>
          </button>
        ) : exerciseChecks > props.serienum - 1 ? (
          <button className="btn col-1 p-0 edit-btn">
            <i
              style={{ fontSize: '0.85em', color: 'rgba(0, 100, 0)' }}
              className="bi bi-check-circle"
            ></i>
          </button>
        ) : (
          <button className="btn col-1 p-0 edit-btn opacity-0">
            <i
              style={{ fontSize: '0.85em', color: 'rgba(0, 100, 0)' }}
              className="bi bi-circle"
            ></i>
          </button>
        )
      ) : (
        <button
          data-bs-toggle="modal"
          data-bs-target="#modalEdit"
          className="btn col-1 p-0"
          onClick={handleCheck}
        >
          <i className="bi bi-pencil"></i>
        </button>
      )}
    </div>
  )
}
