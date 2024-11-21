import {
  agachamento,
  levantamento_terra,
  puxada_alta,
  supino
} from './exercises_exemples'

const daily_A: DailyWorkout = {
  name: 'A',
  obs: 'full-body',
  exercises: [
    {
      exercise: puxada_alta,
      rest: 10,
      serietype: 'normal',
      unit: 'kg',
      series: [
        {
          repetitions: [10, 12],
          weight: 0
        },
        {
          repetitions: [10, 12],
          weight: 0
        },
        {
          repetitions: [10, 12],
          weight: 0
        },
        {
          repetitions: [10, 12],
          weight: 0
        }
      ]
    },
    {
      exercise: supino,
      rest: 60,
      serietype: 'normal',
      unit: 'kg',
      series: [
        {
          repetitions: [8, 10],
          weight: 0
        },
        {
          repetitions: [8, 10],
          weight: 0
        },
        {
          repetitions: [8, 10],
          weight: 0
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
