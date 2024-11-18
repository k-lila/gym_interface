export const editWorkoutExercise = (
  daily: DailyWorkout,
  editedWorkoutExercise: WorkoutExercise
) => {
  const newExercises = daily.exercises.map((exercise) => {
    return exercise.exercise.name === editedWorkoutExercise.exercise.name
      ? editedWorkoutExercise
      : exercise
  })
  const newDaily: DailyWorkout = {
    exercises: newExercises,
    name: daily.name,
    obs: daily.obs
  }
  return newDaily
}
