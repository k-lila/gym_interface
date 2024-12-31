import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setCheckEditSerie } from '../../store/reducers/checkedit'
import { useParams } from 'react-router-dom'
import { SerieStyled } from './styles'

export const Serie = ({ ...props }: SerieProps) => {
  const dispatch = useDispatch()
  const { workoutIndex, dailyIndex } = useParams()
  const user_workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const ontraining = useSelector((state: RootReducer) => state.logs.ontraining)
  const seriesLog = useSelector((state: RootReducer) => state.logs.log.series)

  const exercise =
    user_workouts[Number(workoutIndex)].workouts[Number(dailyIndex)].exercises[
      props.exerciseNum
    ]

  const exerciseLogs = seriesLog?.filter(
    (f) => f.exercise == exercise?.exercise.name
  )
  const exerciseChecks = exerciseLogs ? exerciseLogs.length : 0
  const serie = exercise ? exercise.series[props.serienum - 1] : null
  const togglebg =
    exerciseLogs && exerciseLogs.length > props.serienum - 1 ? true : false

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
    dispatch(
      setCheckEditSerie({
        exerciseIndex: props.exerciseNum,
        serieIndex: props.serienum - 1
      })
    )
  }

  return (
    <SerieStyled
      $num={(1 / exercise.series.length) * props.serienum}
      $togglebg={togglebg}
      className="row border-bottom border-secondary d-flex justify-content-between"
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
      <span
        className={`col-5 d-flex align-items-center justify-content-center ${
          exercise && exercise.bodyweight ? 'small' : null
        }`}
      >
        {exercise
          ? exercise.bodyweight
            ? 'próprio corpo'
            : `${weight ? weight : ''}${
                weight && exercise && exercise.unit ? exercise.unit : '-'
              }`
          : ''}
      </span>
      {ontraining ? (
        exerciseChecks == props.serienum - 1 ? (
          <button
            style={{ border: 'none' }}
            data-bs-toggle="modal"
            data-bs-target="#modalCheck"
            onClick={handleCheck}
            className="btn col-1 p-0 edit-btn"
          >
            <i
              style={{
                fontSize: '0.85em',
                color: 'rgba(100, 100, 100)'
              }}
              className="bi bi-circle"
            ></i>
          </button>
        ) : exerciseChecks > props.serienum - 1 ? (
          <button style={{ border: 'none' }} className="btn col-1 p-0 edit-btn">
            <i
              style={{ fontSize: '0.85em', color: 'rgba(0, 100, 0)' }}
              className="bi bi-check-circle"
            ></i>
          </button>
        ) : (
          <button
            style={{ border: 'none' }}
            className="btn col-1 p-0 edit-btn opacity-0"
          >
            <i
              style={{ fontSize: '0.85em', color: 'rgba(100, 100, 100)' }}
              className="bi bi-circle"
            ></i>
          </button>
        )
      ) : (
        <button
          style={{ border: 'none' }}
          data-bs-toggle="modal"
          data-bs-target="#modalEdit"
          className="btn col-1 p-0"
          onClick={handleCheck}
        >
          <i className="bi bi-pencil"></i>
        </button>
      )}
    </SerieStyled>
  )
}
