import {
  agachamento,
  apoio,
  barra_fixa,
  levantamento_terra
} from './exercises_exemples'

const daily_A: DailyWorkout = {
  name: 'A',
  obs: 'exemplo',
  exercises: [
    {
      exercise: barra_fixa,
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
      exercise: apoio,
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
    },
    {
      exercise: agachamento,
      rest: 60,
      serietype: 'normal',
      unit: 'kg',
      series: [
        { repetitions: [12, 14] },
        { repetitions: [12, 14] },
        { repetitions: [12, 14] }
      ]
    },
    {
      exercise: levantamento_terra,
      rest: 120,
      serietype: 'custom',
      unit: 'kg',
      series: [
        { repetitions: [7], weight: 0 },
        { repetitions: [7], weight: 0 },
        { repetitions: [7], weight: 0 },
        { repetitions: [7], weight: 0 },
        { repetitions: [7], weight: 0 }
      ]
    }
  ]
}

export const musc: Workout = {
  name: 'exemplo 1',
  obs: 'exemplo',
  workouts: [daily_A]
}
