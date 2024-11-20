import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setShowRest } from '../../store/reducers/preferences'

export const RestCounter = () => {
  const dispatch = useDispatch()
  const logs = useSelector((state: RootReducer) => state.logs.log)
  const daily = useSelector(
    (state: RootReducer) => state.preferences.dailyworkout
  )
  const show = useSelector((state: RootReducer) => state.preferences.restshow)
  const last_exercise =
    logs?.series && logs.series.length > 0
      ? logs.series[logs.series.length - 1].exercise
      : ''
  const rest_time = daily?.exercises?.find(
    (f) => f.exercise.name === last_exercise
  )?.rest
  const min = rest_time ? Math.floor(rest_time / 60) : 0
  const sec = rest_time ? rest_time % 60 : 0
  const [seconds, setSeconds] = useState(sec)
  const [minuts, setMinuts] = useState(min)
  const [rest, setRest] = useState(true)

  useEffect(() => {
    const counter = setInterval(() => {
      if (rest) {
        setSeconds((seconds) => seconds - 1)
      } else {
        setSeconds((seconds) => seconds + 1)
      }
    }, 1000)
    return () => clearInterval(counter)
  }, [rest])

  useEffect(() => {
    if (rest) {
      if (seconds <= -1) {
        setSeconds(59)
        setMinuts((minuts) => minuts - 1)
      }
    } else {
      if (seconds >= 60) {
        setSeconds(0)
        setMinuts((minuts) => minuts + 1)
      }
    }
  }, [seconds, rest])

  useEffect(() => {
    if (seconds == 0 && minuts == 0) {
      setRest(false)
    }
  }, [seconds, minuts])

  return (
    <div
      style={{ width: '4em' }}
      className={`${
        rest ? 'bg-danger' : 'bg-success'
      } d-flex align-items-center justify-content-center rounded px-2`}
      onClick={() => dispatch(setShowRest(!show))}
    >
      <span className="text-light">
        {show ? (
          `${minuts > 9 ? '' : '0'}${minuts}:${
            seconds > 9 ? '' : '0'
          }${seconds}`
        ) : (
          <i className="bi bi-stopwatch"></i>
        )}
      </span>
    </div>
  )
}
