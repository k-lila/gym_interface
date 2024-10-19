declare type SerieLog = {
  exercise: string
  datetime: string
  repetitions: number
  weight: number
}

declare type WorkoutLog = {
  workout: DailyWorkout | undefined
  start: string | undefined
  end: string | undefined
  series: Array<SerieLog> | undefined
}
