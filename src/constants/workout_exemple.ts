import {
  barra_paralela,
  crossover_baixa,
  crucifixo_reto,
  desenvolvimento,
  elevacao_lateral,
  supino,
  supino_inclinado,
  triceps_coice
} from './exercises_exemples'

export const daily_A: DailyWorkout = {
  name: 'A',
  exercises: [
    {
      exercise: supino,
      serietype: 'custom',
      series: [
        {
          repetitions: [12],
          weight: 20,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 20,
          unit: 'kg'
        },
        {
          repetitions: [8],
          weight: 20,
          unit: 'kg'
        },
        {
          repetitions: [6],
          weight: 20,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: supino_inclinado,
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 18,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 18,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 18,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 18,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: crucifixo_reto,
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 14,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: desenvolvimento,
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 14,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: triceps_coice,
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 10,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 10,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 10,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'polia'
    },
    {
      exercise: crossover_baixa,
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 15,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 15,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 15,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 15,
          unit: 'kg'
        }
      ],
      grip: 'supinada',
      rest: 60,
      obs: 'polia baixa'
    },
    {
      exercise: elevacao_lateral,
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 8,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 8,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 8,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 8,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60
    },
    {
      exercise: barra_paralela,
      serietype: 'normal',
      series: [
        { repetitions: [7, 14] },
        { repetitions: [7, 14] },
        { repetitions: [7, 14] }
      ],
      rest: 60,
      bodyweight: true,
      obs: 'foco no tríceps'
    }
  ]
}

export const daily_B: DailyWorkout = {
  name: 'B',
  exercises: [
    {
      exercise: supino_inclinado,
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 18,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 18,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 18,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 18,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: crucifixo_reto,
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 14,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: desenvolvimento,
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 14,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 14,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: triceps_coice,
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 10,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 10,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 10,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'polia'
    },
    {
      exercise: crossover_baixa,
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 15,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 15,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 15,
          unit: 'kg'
        },
        {
          repetitions: [10],
          weight: 15,
          unit: 'kg'
        }
      ],
      grip: 'supinada',
      rest: 60,
      obs: 'polia baixa'
    },
    {
      exercise: elevacao_lateral,
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 8,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 8,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 8,
          unit: 'kg'
        },
        {
          repetitions: [8, 10],
          weight: 8,
          unit: 'kg'
        }
      ],
      grip: 'pronada',
      rest: 60
    },
    {
      exercise: barra_paralela,
      serietype: 'normal',
      series: [
        { repetitions: [7, 14] },
        { repetitions: [7, 14] },
        { repetitions: [7, 14] }
      ],
      rest: 60,
      bodyweight: true,
      obs: 'foco no tríceps'
    }
  ]
}

export const musc: Workout = {
  name: 'musculação1',
  workouts: [daily_A]
}

export const musc2: Workout = {
  name: 'musculação2',
  workouts: [daily_A, daily_B]
}
