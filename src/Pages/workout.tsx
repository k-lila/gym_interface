import { WorkoutHandler } from '../containers/workout_handler'

export const Workout = () => {
  return (
    <>
      <WorkoutHandler />
      <footer className="bg-dark w-100 p-2 d-flex justify-content-center position-fixed bottom-0">
        <button className="btn btn-light">Iniciar treino</button>
      </footer>
    </>
  )
}
