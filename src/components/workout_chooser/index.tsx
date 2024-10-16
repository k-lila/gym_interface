import { WorkoutChooserStyled } from './styles'
import haltere from '../../assets/haltere.png'
import fire from '../../assets/fire.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setDefaultWorkout } from '../../store/reducers/preferences'
import { PieChart } from '../pie_chart'

export const WorkoutChooser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const workouts = useSelector(
    (state: RootReducer) => state.workouts.user_workouts
  )
  const defaultworkout = useSelector(
    (state: RootReducer) => state.preferences.defaultworkout
  )
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDefaultWorkout(event.target.value))
  }
  const handleNavigate = () => {
    navigate(`/workout/${defaultworkout}`)
  }

  const pie_values = [1, 1, 1, 1, 1, 1, 1, 1]

  return (
    <WorkoutChooserStyled>
      <form>
        <label htmlFor="workouts">Treino</label>
        <select
          name="workouts"
          id="workouts"
          value={defaultworkout}
          onChange={handleSelect}
        >
          {workouts.map((w, i) => {
            return (
              <option key={i} value={w.name}>
                {w.name}
              </option>
            )
          })}
        </select>
      </form>
      <PieChart $values={pie_values} />
      <div className="__btn-container">
        <button onClick={handleNavigate}>
          <img src={fire} className="--workout" />
          <img src={haltere} />
        </button>
      </div>
    </WorkoutChooserStyled>
  )
}
