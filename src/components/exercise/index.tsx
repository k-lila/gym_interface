import { ExerciseStyled } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Serie } from '../serie'
import { setCheckEditSerie } from '../../store/reducers/checkedit'
import { ExerciseInfo } from '../exercise_info'
import { useParams } from 'react-router-dom'

export const Exercise = ({ ...props }: ExerciseProps) => {
  const dispatch = useDispatch()
  const { workoutIndex, dailyIndex } = useParams()
  const user_workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const exercise =
    user_workouts[Number(workoutIndex)].workouts[Number(dailyIndex)].exercises[
      props.exerciseNum
    ]

  const ontraining = useSelector((state: RootReducer) => state.logs.ontraining)
  const logs = useSelector((state: RootReducer) => state.logs)
  const seriesLog = logs.log.series
    ? logs.log.series.filter((f) => f.exercise == exercise.exercise.name)
    : null
  const exerciseChecks = seriesLog ? seriesLog.length : 0
  const extraSeries = seriesLog?.slice(exercise?.series.length)
  const opacity = (1 / exercise.series.length) * exerciseChecks
  const handleCheck = () => {
    if (exercise) {
      dispatch(
        setCheckEditSerie({
          exerciseIndex: props.exerciseNum,
          serieIndex: exercise.series.length
        })
      )
    }
  }

  return (
    <ExerciseStyled $num={opacity} className="my-2 mb-3">
      <button
        className={`btn border-dark w-100 d-flex justify-content-start align-items-center border-2 bgcolor`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#exerciseCollapse${props.exerciseNum}`}
        aria-expanded="false"
        aria-controls={`exerciseCollapse${props.exerciseNum}`}
      >
        <b>{props.exerciseNum + 1}</b>
        <b className="ms-2">{exercise?.exercise.name}</b>
      </button>
      <div
        className="collapse container border border-dark border-2 rounded"
        id={`exerciseCollapse${props.exerciseNum}`}
      >
        <div className="row mt-1 border-bottom border-dark d-flex justify-content-between">
          <div className="col-1" />
          <div className="col-4 text-center">rep</div>
          <div className="col-5 text-center">carga</div>
          <div className="col-2" style={{ width: '2em' }} />
        </div>
        {exercise.serietype == 'normal' && !ontraining ? (
          <Serie
            exerciseNum={props.exerciseNum}
            serienum={exercise.series.length}
          />
        ) : (
          exercise.series.map((serie, i) => {
            return (
              <Serie key={i} serienum={i + 1} exerciseNum={props.exerciseNum} />
            )
          })
        )}
        {extraSeries
          ? extraSeries.map((extra, i) => {
              return (
                <Serie
                  key={i}
                  serienum={exercise.series.length + i + 1}
                  exerciseNum={props.exerciseNum}
                />
              )
            })
          : null}
        <div className="d-flex justify-content-between align-items-center p-1">
          {exercise &&
          exercise.series.length <= exerciseChecks &&
          ontraining ? (
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalCheck"
              onClick={handleCheck}
              className="btn btn-outline-danger px-2 py-1"
            >
              + series
            </button>
          ) : (
            <div style={{ opacity: 0 }}>+ series</div>
          )}
          <button
            style={{ border: 'none' }}
            className="btn p-0 m-0 d-flex"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#exerciseCollapse${props.exerciseNum}info`}
            aria-expanded="false"
            aria-controls={`exerciseCollapse${props.exerciseNum}info`}
          >
            <i className="bi bi-info-circle fs-3"></i>
          </button>
        </div>
        <div
          className="collapse border-top border-secondary"
          id={`exerciseCollapse${props.exerciseNum}info`}
        >
          <div className="d-flex align-items-center justify-content-center flex-column mt-1">
            {exercise ? <ExerciseInfo exercise={exercise} /> : null}
          </div>
        </div>
      </div>
    </ExerciseStyled>
  )
}
