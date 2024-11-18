import { useSelector } from 'react-redux'
import { Bar } from './styles'
import { RootReducer } from '../../store'

export const ProgressBar = () => {
  const daily = useSelector((state: RootReducer) => state.logs.log.dailyworkout)
  const logs = useSelector((state: RootReducer) => state.logs.log.series)
  let serieNum = 0
  daily?.exercises.map((ex) => {
    serieNum = serieNum + ex.series.length
  })
  const percentage = (100 / serieNum) * (logs ? logs.length : 0)
  return <Bar $num={percentage} />
}
