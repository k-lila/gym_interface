declare type SerieLog = {
  exercise: string
  datetime: string
  repetitions: number
  weight: number
  rest: number
}

declare type WorkoutLog = {
  workoutname: string | undefined
  dailyworkout: DailyWorkout | undefined
  start: string | undefined
  end: string | undefined
  series: Array<SerieLog> | undefined
}
