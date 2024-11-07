import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import {
  eraser,
  setEnd,
  setSetupLog,
  setStart
} from '../../store/reducers/workoutlog'
import { useEffect } from 'react'

export const ModalWorkout = () => {
  const dispatch = useDispatch()
  const workout = useSelector(
    (state: RootReducer) => state.preferences.defaultworkout
  )
  const daily = useSelector(
    (state: RootReducer) => state.preferences.dailyworkout
  )
  const log = useSelector((state: RootReducer) => state.logs.log)
  const onTraining = useSelector((state: RootReducer) => state.logs.ontraining)
  const handleStart = () => {
    const now = new Date().toUTCString()
    if (daily) {
      dispatch(setSetupLog(daily))
      dispatch(setStart(now))
    }
  }
  const handleEnd = () => {
    const now = new Date().toUTCString()
    dispatch(setEnd(now))
  }

  useEffect(() => {
    const teste = log.end ? true : false
    if (teste) {
      console.log(log)
      dispatch(eraser())
    }
  }, [log, dispatch])

  return (
    <div
      className="modal fade"
      id="confirmModal"
      aria-labelledby="confirmModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="confirmModalLabel">
              {onTraining ? 'finalizar?' : 'iniciar?'}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body mx-3 my-0">
            {onTraining ? (
              <div>asd</div>
            ) : (
              <>
                <div className="row">
                  <p className="col-6 d-flex my-1 justify-content-center">
                    treino
                  </p>
                  <p className="col-6 d-flex my-1 justify-content-center">
                    subdivisão
                  </p>
                </div>
                <div className="row border border-dark rounded">
                  <p className="col-6 d-flex my-auto justify-content-center p-2 border-end border-secondary">
                    {workout?.name}
                  </p>
                  <p className="col-6 d-flex my-auto justify-content-center p-2 border-start border-secondary">
                    {daily?.name}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer">
            {onTraining ? (
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-dismiss="modal"
                onClick={handleEnd}
              >
                Confirma
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-dismiss="modal"
                onClick={handleStart}
              >
                Confirma
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
