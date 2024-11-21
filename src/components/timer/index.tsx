import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect } from 'react'

// export const Timer = () => {
//   const dispatch = useDispatch()
//   const restCounter = useSelector((state: RootReducer) => state.restcounter)

//   const logs = useSelector((state: RootReducer) => state.logs)
//   const start = logs.log.start ? new Date(logs.log.start) : undefined
//   const lastSerieDate = logs.log.series
//     ? new Date(logs.log.series[logs.log.series.length - 1].datetime)
//     : undefined

//   useEffect(() => {
//     if (start) {
//       const now = new Date()
//       const sec = Math.floor((now.getTime() - start.getTime()) / 1000)
//       const minutes = Math.floor(sec / 60)
//       const seconds = sec % 60
//       // console.log(minutes, seconds)
//       if (lastSerieDate) {
//         const secserie = Math.floor(
//           (now.getTime() - lastSerieDate.getTime()) / 1000
//         )
//         const minutesserie = Math.floor(secserie / 60)
//         const secondsserie = secserie % 60
//       }
//     }
//   }, [start, lastSerieDate])

//   useEffect(() => {
//     if (restCounter.refresh) {
//       const min = Math.floor(restCounter.resttime / 60)
//       const sec = restCounter.resttime % 60
//       dispatch(setMinutes(min))
//       dispatch(setSeconds(sec))
//       dispatch(toggleRest(true))
//       dispatch(refreshRestCounter(false))
//     }
//   }, [dispatch, restCounter])

//   useEffect(() => {
//     if (restCounter.on) {
//       const counter = setInterval(() => {
//         if (restCounter.rest) {
//           if (restCounter.minutes == 0 && restCounter.seconds == 0) {
//             dispatch(toggleRest(false))
//             dispatch(setSeconds(restCounter.seconds + 1))
//           } else {
//             if (restCounter.seconds == 0) {
//               dispatch(setMinutes(restCounter.minutes - 1))
//               dispatch(setSeconds(59))
//             } else {
//               dispatch(setSeconds(restCounter.seconds - 1))
//             }
//           }
//         } else {
//           dispatch(setSeconds(restCounter.seconds + 1))
//           if (restCounter.seconds == 59) {
//             dispatch(setMinutes(restCounter.minutes + 1))
//             dispatch(setSeconds(0))
//           }
//         }
//       }, 1000)
//       return () => clearInterval(counter)
//     }
//   }, [restCounter, dispatch])

//   return null
// }
