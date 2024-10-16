import { PieChartStyled, PieSlice } from './styled'

export const PieChart = ({ ...props }: PieProps) => {
  const soma = props.$values.reduce((a, b) => a + b)
  const proportions = [0]
  let num = 0
  for (let i = 0; i < props.$values.length; i++) {
    num = num + (props.$values[i] * 100) / soma
    if (num > 100) {
      num = 100
    }
    proportions.push(num)
  }
  return (
    <PieChartStyled>
      {props.$values.map((v, i) => {
        return (
          <PieSlice key={i} $start={proportions[i]} $end={proportions[i + 1]} />
        )
      })}
    </PieChartStyled>
  )
}
