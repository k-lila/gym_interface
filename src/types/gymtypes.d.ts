declare type MuscleGroup = {
  name: string
  musclegroup: Array<string>
}

declare type Exercise = {
  name: string
  musclegroup: Array<MuscleGroup>
}

declare type ExerciseSerie = {
  repetitions: [number] | [number, number]
  weight?: number
  unit?: string
}

declare type WorkoutExercise = {
  exercise: Exercise
  serietype: 'normal' | 'custom'
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
