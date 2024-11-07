import { ExerciseStyled } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import info from '../../assets/info.png'
import { Serie } from '../serie'
import { setCheckSerie } from '../../store/reducers/checkedit'

export const Exercise = ({ ...props }: ExerciseProps) => {
  const dispatch = useDispatch()
  const exerciseName = props.workoutExercise.exercise.name
  const ontraining = useSelector((state: RootReducer) => state.logs.ontraining)
  const seriesLog = useSelector(
    (state: RootReducer) => state.logs.log.series
  )?.filter((f) => f.exercise == exerciseName)
  const exerciseChecks = seriesLog ? seriesLog.length : 0
  const extraSeries = seriesLog?.slice(props.workoutExercise.series.length)

  return (
    <ExerciseStyled>
      <button
        className="btn border-dark w-100 d-flex justify-content-start align-items-center border-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#exerciseCollapse${props.exerciseNum}`}
        aria-expanded="false"
        aria-controls={`exerciseCollapse${props.exerciseNum}`}
      >
        <b>{props.exerciseNum + 1}</b>
        <b className="ms-2">{props.workoutExercise.exercise.name}</b>
      </button>
      <div
        className="collapse container border border-dark border-2 rounded"
        id={`exerciseCollapse${props.exerciseNum}`}
      >
        <div className="row mt-1 border-bottom border-dark d-flex justify-content-between">
          <div className="col-1" />
          <div className="col-3 text-center">rep</div>
          <div className="col-5 text-center">carga</div>
          <div className="col-2" style={{ width: '2em' }} />
        </div>
        {props.workoutExercise.serietype == 'normal' && !ontraining ? (
          <Serie
            name={props.workoutExercise.exercise.name}
            serienum={props.workoutExercise.series.length}
            bodyweight={props.workoutExercise.bodyweight ? true : false}
            unit={props.workoutExercise.unit}
            exercise={props.workoutExercise.series[0]}
          />
        ) : (
          props.workoutExercise.series.map((serie, i) => {
            return (
              <Serie
                name={props.workoutExercise.exercise.name}
                serienum={i + 1}
                bodyweight={props.workoutExercise.bodyweight ? true : false}
                unit={props.workoutExercise.unit}
                exercise={serie}
                key={i}
              />
            )
          })
        )}

        {extraSeries
          ? extraSeries.map((extra, i) => {
              return (
                <Serie
                  key={i}
                  name={props.workoutExercise.exercise.name}
                  serienum={props.workoutExercise.series.length + i + 1}
                  bodyweight={props.workoutExercise.bodyweight ? true : false}
                  unit={props.workoutExercise.unit}
                  exercise={{
                    repetitions: [extra.repetitions],
                    weight: extra.weight
                  }}
                />
              )
            })
          : null}

        <div className="d-flex justify-content-between align-items-center p-1">
          {props.workoutExercise.series.length <= exerciseChecks &&
          ontraining ? (
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalCheck"
              onClick={() =>
                dispatch(
                  setCheckSerie({
                    name: props.workoutExercise.exercise.name,
                    num: props.workoutExercise.series.length
                  })
                )
              }
              className="btn btn-outline-danger px-2 py-1"
            >
              + series
            </button>
          ) : (
            <div style={{ opacity: 0 }}>+ series</div>
          )}
          <button
            className="btn-info"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#exerciseCollapse${props.exerciseNum}info`}
            aria-expanded="false"
            aria-controls={`exerciseCollapse${props.exerciseNum}info`}
          >
            <img src={info} alt="info" />
          </button>
        </div>

        <div
          className="collapse border-top border-secondary"
          id={`exerciseCollapse${props.exerciseNum}info`}
        >
          <div className="d-flex align-items-center justify-content-center flex-column mt-1">
            <div>
              <p>
                <b>Grupo principal: </b>
                {props.workoutExercise.exercise.musclegroup.map((mg, i) => {
                  return <span key={i}>{mg.name}</span>
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ExerciseStyled>
  )
}
