declare type ExerciseProps = {
  exerciseNum: number
  workoutExercise: WorkoutExercise
}

declare type SeriesProps = {
  workoutExercise: WorkoutExercise
}

declare type SerieProps = {
  serienum: number
  name: string
  exercise: ExerciseSerie
  bodyweight: boolean
  unit?: string
}

declare type ExerciseInfoProps = {
  exercise: WorkoutExercise
}

declare type ModalWorkoutProps = {
  daily_active: DailyWorkout
  workout_name: string
}
