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
}

declare type WorkoutExercise = {
  exercise: Exercise
  serietype: 'normal' | 'custom'
  series: Array<ExerciseSerie>
  rest: number
  unit?: 'kg' | 'seg'
  grip?: 'supinada' | 'neutra' | 'pronada'
  bodyweight?: boolean
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
