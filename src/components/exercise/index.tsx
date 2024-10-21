import { ExerciseStyled } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import edit from '../../assets/edit.png'
import info from '../../assets/info.png'
import check from '../../assets/check_serie.png'
import uncheck from '../../assets/uncheck_serie.png'
import { addSerie } from '../../store/reducers/workoutlog'

export const Exercise = ({ ...props }: ExerciseProps) => {
  const ontraining = useSelector((state: RootReducer) => state.logs.ontraining)
  const seriesLog = useSelector((state: RootReducer) => state.logs.log.series)

  const dispatch = useDispatch()

  const exerciseName = props.workoutExercise.exercise.name
  const exerciseChecks = seriesLog
    ? seriesLog.filter((f) => f.exercise == exerciseName).length
    : 0

  const handlecheck = () => {
    const now = new Date().toUTCString()
    const serieCheck: SerieLog = {
      datetime: now,
      exercise: exerciseName,
      repetitions: 10,
      weight: 10
    }
    dispatch(addSerie(serieCheck))
  }
  return (
    <ExerciseStyled>
      <button
        className="btn btn-outline-dark w-100 d-flex justify-content-between align-items-center border-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#exerciseCollapse${props.exerciseNum}`}
        aria-expanded="false"
        aria-controls={`exerciseCollapse${props.exerciseNum}`}
      >
        <div>
          <b>{props.exerciseNum + 1}</b>
          <span className="ms-2">{props.workoutExercise.exercise.name}</span>
        </div>
      </button>
      {/* collapse */}
      <div
        className="collapse container border border-dark border-2 rounded pb-1"
        id={`exerciseCollapse${props.exerciseNum}`}
      >
        <div className="row mt-1 border-bottom border-secondary d-flex justify-content-between">
          <div className="col-1" />
          <div className="col-3 text-center">rep</div>
          <div className="col-5 text-center">carga</div>
          <div className="col-2" style={{ width: '2em' }} />
        </div>
        {/* series -------------------------------------------------------------------------------------------------- */}
        {props.workoutExercise.serietype === 'normal' && !ontraining ? (
          <div className="row border-bottom border-secondary d-flex justify-content-between">
            <span className="col-1 d-flex align-items-center justify-content-center border-end">
              {`${props.workoutExercise.series.length}x`}
            </span>
            <span className="col-3 d-flex align-items-center justify-content-center">
              {props.workoutExercise.series[0].repetitions.length === 1
                ? `${props.workoutExercise.series[0].repetitions[0]} x`
                : `${props.workoutExercise.series[0].repetitions[0]}-${props.workoutExercise.series[0].repetitions[1]}x`}
            </span>
            <span className="col-5 d-flex align-items-center justify-content-center">
              {props.workoutExercise.bodyweight
                ? 'próprio corpo'
                : `${props.workoutExercise.series[0].weight} ${props.workoutExercise.series[0].unit}`}
            </span>
            <button
              data-bs-toggle="modal"
              data-bs-target="#checkeditModal"
              className="btn col-2 edit-btn"
            >
              <img src={edit} alt="edit" />
            </button>
          </div>
        ) : (
          props.workoutExercise.series.map((serie, i) => {
            const checked = exerciseChecks ? exerciseChecks >= i + 1 : false
            return (
              <div
                key={i}
                className="row border-bottom border-secondary d-flex justify-content-between"
              >
                <span className="col-1 d-flex align-items-center justify-content-center border-end">
                  {i + 1}
                </span>
                <span className="col-3 d-flex align-items-center justify-content-center">
                  {serie.repetitions.length === 1
                    ? `${serie.repetitions[0]}x`
                    : `${serie.repetitions[0]}-${serie.repetitions[1]}x`}
                </span>
                <span className="col-5 d-flex align-items-center justify-content-center">
                  {props.workoutExercise.bodyweight
                    ? 'próprio corpo'
                    : `${serie.weight} ${serie.unit}`}
                </span>
                {ontraining ? (
                  // check -----------------------------------------------------------------------------
                  checked ? (
                    <button className="btn col-2 edit-btn">
                      <img src={check} alt="checked" />
                    </button>
                  ) : i == exerciseChecks ? (
                    <button
                      data-bs-toggle="modal"
                      data-bs-target={`#checkeditModal${props.exerciseNum}`}
                      className="btn col-2 edit-btn"
                    >
                      <img src={uncheck} alt="unchecked" />
                    </button>
                  ) : (
                    <button
                      style={{ opacity: 0 }}
                      className="btn col-2 edit-btn"
                    >
                      <img src={uncheck} alt="unchecked" />
                    </button>
                  )
                ) : (
                  <button
                    data-bs-toggle="modal"
                    data-bs-target={`#checkeditModal${props.exerciseNum}`}
                    className="btn col-2 edit-btn"
                  >
                    <img src={edit} alt="edit" />
                  </button>
                )}
              </div>
            )
          })
        )}
        <div className="d-flex justify-content-between align-items-center pt-1">
          <span>+ serie</span>
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
          className="collapse border-top border-secondary mt-1 pt-1"
          id={`exerciseCollapse${props.exerciseNum}info`}
        >
          <div className="d-flex align-items-center justify-content-center flex-column">
            <div>
              <p>
                <b>main: </b>
                {props.workoutExercise.exercise.musclegroup.map((mg, i) => {
                  return <span key={i}>{mg.name}</span>
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* modal -------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id={`checkeditModal${props.exerciseNum}`}
        aria-labelledby="checkeditModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="checkeditModalLabel">
                header
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* body */}
            <div className="modal-body mx-3 my-0">body</div>
            <div className="modal-footer">
              {ontraining ? (
                <button
                  onClick={handlecheck}
                  type="button"
                  className="btn btn-outline-success"
                  data-bs-dismiss="modal"
                >
                  Confirma
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-success"
                  data-bs-dismiss="modal"
                >
                  Salvar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ExerciseStyled>
  )
}
