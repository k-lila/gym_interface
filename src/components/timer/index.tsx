import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect } from 'react'
import {
  refreshRestCounter,
  setMinutes,
  setSeconds,
  toggleRest
} from '../../store/reducers/restcounter'

export const Timer = () => {
  const dispatch = useDispatch()
  const restCounter = useSelector((state: RootReducer) => state.restcounter)

  useEffect(() => {
    if (restCounter.refresh) {
      const min = Math.floor(restCounter.resttime / 60)
      const sec = restCounter.resttime % 60
      dispatch(setMinutes(min))
      dispatch(setSeconds(sec))
      dispatch(toggleRest(true))
      dispatch(refreshRestCounter(false))
    }
  }, [dispatch, restCounter])

  useEffect(() => {
    if (restCounter.on) {
      const counter = setInterval(() => {
        if (restCounter.rest) {
          if (restCounter.minutes == 0 && restCounter.seconds == 0) {
            dispatch(toggleRest(false))
            dispatch(setSeconds(restCounter.seconds + 1))
          } else {
            if (restCounter.seconds == 0) {
              dispatch(setMinutes(restCounter.minutes - 1))
              dispatch(setSeconds(59))
            } else {
              dispatch(setSeconds(restCounter.seconds - 1))
            }
          }
        } else {
          dispatch(setSeconds(restCounter.seconds + 1))
          if (restCounter.seconds == 59) {
            dispatch(setMinutes(restCounter.minutes + 1))
            dispatch(setSeconds(0))
          }
        }
      }, 1000)
      return () => clearInterval(counter)
    }
  }, [restCounter, dispatch])

  return null
}
