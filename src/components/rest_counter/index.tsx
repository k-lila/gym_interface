import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'

export const RestCounter = () => {
  const [rest, setRest] = useState(true)
  const [show, setShow] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hour, setHour] = useState(0)
  const [secondsRest, setSecondsRest] = useState(0)
  const [minutesRest, setMinutesRest] = useState(0)
  const [keyNum, setKeyNum] = useState(0)

  const logs = useSelector((state: RootReducer) => state.logs)

  const lastSerieRest = logs.log.series
    ? logs.log.series[logs.log.series.length - 1].rest
    : undefined

  useEffect(() => {
    const start = logs.log.start ? new Date(logs.log.start) : undefined
    const lastSerieDate = logs.log.series
      ? new Date(logs.log.series[logs.log.series.length - 1].datetime)
      : undefined
    if (logs.log.series) {
      if (logs.log.series.length != keyNum) {
        setRest(logs.log.series.length == keyNum ? true : false)
        setKeyNum(logs.log.series.length)
      }
    }
    if (logs.ontraining && start) {
      const timer = setInterval(() => {
        const now = new Date()
        const totalSeconds = Math.floor(
          (now.getTime() - start.getTime()) / 1000
        )
        setHour(Math.floor(totalSeconds / (60 * 60)))
        setMinutes(Math.floor(totalSeconds / 60) % 60)
        setSeconds(totalSeconds % 60)
        if (lastSerieDate && lastSerieRest) {
          const lastSerieSeconds = Math.floor(
            (now.getTime() - lastSerieDate.getTime()) / 1000
          )
          const restTime = lastSerieRest - lastSerieSeconds
          if (restTime == 0) {
            setRest(true)
          }
          if (restTime > 0) {
            setMinutesRest(Math.floor(restTime / 60))
            setSecondsRest(Math.floor(restTime % 60))
          } else {
            setMinutesRest(Math.floor((lastSerieSeconds - lastSerieRest) / 60))
            setSecondsRest(Math.floor((lastSerieSeconds - lastSerieRest) % 60))
          }
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [logs, seconds, minutes, hour, lastSerieRest, keyNum])

  return (
    <div
      style={{ width: '4em' }}
      className={`${
        rest ? 'bg-success' : 'bg-danger'
      } d-flex align-items-center justify-content-center rounded px-2`}
      onClick={() => setShow(!show)}
    >
      {show ? (
        <span className="text-light">
          {`${minutesRest > 9 ? '' : '0'}${minutesRest}:${
            secondsRest > 9 ? '' : '0'
          }${secondsRest}`}
        </span>
      ) : (
        <div className="text-light d-flex flex-column align-items-center">
          <i style={{ fontSize: '0.75em' }} className="bi bi-stopwatch"></i>
          <span style={{ fontSize: '0.75em' }}>{`${
            hour > 9 ? '' : '0'
          }${hour}:${minutes > 9 ? '' : '0'}${minutes}:${
            seconds > 9 ? '' : '0'
          }${seconds}`}</span>
        </div>
      )}
    </div>
  )
}
