declare type Exercise = {
  name: string
  mainmuscles: Array<string>
  secondarymuscles?: Array<string>
}

declare type ExerciseSerie = {
  repetitions: [number] | [number, number]
  weight?: number
  unit?: string
}

declare type WorkoutExercise = {
  exercise: Exercise
  series: Array<ExerciseSerie>
  grip?: 'supinada' | 'neutra' | 'pronada'
  bodyweight?: boolean
  rest: number
  obs?: string
}

declare type DailyWorkout = {
  name: string
  exercises: Array<WorkoutExercise>
  obs?: string
}

declare type Workout = {
  name: string
  workouts: Array<DailyWorkout>
  obs?: string
}
