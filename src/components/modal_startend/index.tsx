import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import {
  addHistory,
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
  const log = useSelector((state: RootReducer) => state.logs)
  const onTraining = useSelector((state: RootReducer) => state.logs.ontraining)
  let totalSeries = 0
  log.log.dailyworkout?.exercises.map((ex) => {
    totalSeries = totalSeries + ex.series.length
  })
  const handleStart = () => {
    const now = new Date().toUTCString()
    if (daily && workout) {
      dispatch(setSetupLog({ name: workout.name, daily: daily }))
      dispatch(setStart(now))
      // dispatch(toggleRestCounter(true))
    }
  }
  const handleEnd = () => {
    const now = new Date().toUTCString()
    dispatch(setEnd(now))
    // dispatch(toggleRestCounter(false))
  }

  const getTime = () => {
    if (log.log.start) {
      const start = new Date(log.log.start)
      const now = new Date(log.finishtime)
      const diff = now.getTime() - start.getTime()
      const totalSeconds = diff / 1000
      const hours = Math.floor(totalSeconds / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60
      return `${hours > 9 ? '' : '0'}${hours}:${
        minutes > 9 ? '' : '0'
      }${minutes}:${seconds > 9 ? '' : '0'}${seconds}`
    }
  }

  useEffect(() => {
    const end = log.log.end ? true : false
    if (end) {
      dispatch(addHistory(log.log))
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
              <article>
                <p className="d-flex my-2">
                  <b>Séries feitas:&nbsp;</b>
                  {`${log.log.series?.length}/${totalSeries}`}
                </p>
                <p className="d-flex my-2">
                  <b>Tempo aproximado:&nbsp;</b>
                  {getTime()}
                </p>
              </article>
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
                <span>confirmar</span>
                <i className="bi bi-check-lg ms-2"></i>
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-dismiss="modal"
                onClick={handleStart}
              >
                <span>confirmar</span>
                <i className="bi bi-check-lg ms-2"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
