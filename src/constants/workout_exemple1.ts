import { getExercise } from './exercises_exemples'

const daily_A: DailyWorkout = {
  name: 'A',
  obs: 'exemplo',
  exercises: [
    {
      exercise: getExercise('agachamento'),
      rest: 60,
      serietype: 'normal',
      unit: 'kg',
      series: [
        { repetitions: [12, 14] },
        { repetitions: [12, 14] },
        { repetitions: [12, 14] },
        { repetitions: [12, 14] }
      ]
    },
    {
      exercise: getExercise('levantamento terra'),
      rest: 120,
      serietype: 'custom',
      unit: 'kg',
      series: [
        { repetitions: [7], weight: 10 },
        { repetitions: [7], weight: 10 },
        { repetitions: [5], weight: 20 },
        { repetitions: [5], weight: 20 },
        { repetitions: [3], weight: 30 }
      ]
    },
    {
      exercise: getExercise('barra fixa'),
      rest: 60,
      serietype: 'normal',
      bodyweight: true,
      grip: 'pronada',
      series: [
        {
          repetitions: [5, 10]
        },
        {
          repetitions: [5, 10]
        },
        {
          repetitions: [5, 10]
        },
        {
          repetitions: [5, 10]
        },
        {
          repetitions: [5, 10]
        }
      ]
    },
    {
      exercise: getExercise('apoio'),
      rest: 60,
      serietype: 'normal',
      unit: 'kg',
      bodyweight: true,
      series: [
        {
          repetitions: [20]
        },
        {
          repetitions: [20]
        },
        {
          repetitions: [20]
        },
        {
          repetitions: [20]
        }
      ]
    }
  ]
}

export const musc: Workout = {
  name: 'exemplo 1',
  obs: 'exemplo',
  workouts: [daily_A]
}
