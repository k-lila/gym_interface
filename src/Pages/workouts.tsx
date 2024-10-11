import { WorkoutChooser } from '../components/workout_chooser'

export const Workouts = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <WorkoutChooser />
    </div>
  )
}
