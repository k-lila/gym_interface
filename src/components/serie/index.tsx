import edit from '../../assets/edit.png'
import check from '../../assets/check_serie.png'
import uncheck from '../../assets/uncheck_serie.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setCheckSerie } from '../../store/reducers/checkedit'

export const Serie = ({ ...props }: SerieProps) => {
  const dispatch = useDispatch()
  const ontraining = useSelector((state: RootReducer) => state.logs.ontraining)
  const seriesLog = useSelector((state: RootReducer) => state.logs.log.series)
  const exerciseLogs = seriesLog?.filter((f) => f.exercise == props.name)
  const exerciseChecks = exerciseLogs ? exerciseLogs.length : 0

  const handleCheck = () => {
    dispatch(setCheckSerie({ name: props.name, num: props.serienum }))
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
        {ontraining && exerciseLogs && exerciseLogs.length >= props.serienum
          ? `${exerciseLogs[props.serienum - 1].repetitions}x`
          : props.exercise.repetitions.length === 1
          ? `${props.exercise.repetitions[0]}x`
          : `${props.exercise.repetitions[0]}-${props.exercise.repetitions[1]}x`}
      </span>
      <span className="col-5 d-flex align-items-center justify-content-center">
        {props.bodyweight
          ? 'próprio peso'
          : props.exercise.weight
          ? ontraining && exerciseLogs && exerciseLogs.length >= props.serienum
            ? `${exerciseLogs[props.serienum - 1].weight}${props.unit}`
            : `${props.exercise.weight}${props.unit}`
          : '-'}
      </span>
      {ontraining ? (
        exerciseChecks == props.serienum - 1 ? (
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalCheck"
            onClick={handleCheck}
            className="btn col-2 edit-btn"
          >
            <img src={uncheck} alt="edit" />
          </button>
        ) : exerciseChecks > props.serienum - 1 ? (
          <button className="btn col-2 edit-btn">
            <img src={check} alt="check" />
          </button>
        ) : (
          <button className="btn col-2 edit-btn opacity-0">
            <img src={uncheck} alt="check" />
          </button>
        )
      ) : (
        <button className="btn col-2 edit-btn">
          <img src={edit} alt="edit" />
        </button>
      )}
    </div>
  )
}
