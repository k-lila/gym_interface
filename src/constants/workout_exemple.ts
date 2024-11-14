import {
  abdominal_infra,
  abdutora,
  agachamento,
  barra_paralela,
  biceps_martelo,
  crossover_baixa,
  crucifixo_reto,
  desenvolvimento,
  elevacao_lateral,
  elevacao_pelvica,
  extensora,
  flexora,
  hammer,
  hiperextensao_lombar,
  levantamento_terra,
  puxada_alta,
  remada_curvada,
  rosca_alternada,
  rosca_inversa,
  serrote,
  supino,
  supino_inclinado,
  triceps_coice
} from './exercises_exemples'

const daily_A: DailyWorkout = {
  name: 'A',
  exercises: [
    {
      exercise: puxada_alta,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 60
        },
        {
          repetitions: [10],
          weight: 60
        },
        {
          repetitions: [10],
          weight: 60
        },
        {
          repetitions: [10],
          weight: 60
        }
      ],
      grip: 'pronada',
      rest: 60
    },
    {
      exercise: hammer,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10, 12],
          weight: 20
        },
        {
          repetitions: [10, 12],
          weight: 20
        },
        {
          repetitions: [10, 12],
          weight: 20
        },
        {
          repetitions: [10, 12],
          weight: 20
        }
      ],
      grip: 'supinada',
      rest: 60
    },
    {
      exercise: serrote,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 22
        },
        {
          repetitions: [10],
          weight: 22
        },
        {
          repetitions: [10],
          weight: 22
        }
      ],
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: remada_curvada,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 15
        },
        {
          repetitions: [8, 10],
          weight: 15
        },
        {
          repetitions: [8, 10],
          weight: 15
        },
        {
          repetitions: [8, 10],
          weight: 15
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'barra olímpica'
    },
    {
      exercise: biceps_martelo,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 10
        },
        {
          repetitions: [10],
          weight: 10
        },
        {
          repetitions: [10],
          weight: 10
        },
        {
          repetitions: [10],
          weight: 10
        }
      ],
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: rosca_alternada,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 8
        },
        {
          repetitions: [8, 10],
          weight: 8
        },
        {
          repetitions: [8, 10],
          weight: 8
        },
        {
          repetitions: [8, 10],
          weight: 8
        }
      ],
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: rosca_inversa,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10, 12],
          weight: 30
        },
        {
          repetitions: [10, 12],
          weight: 30
        },
        {
          repetitions: [10, 12],
          weight: 30
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'cabo'
    },
    {
      exercise: abdominal_infra,
      serietype: 'normal',
      series: [
        { repetitions: [12] },
        { repetitions: [12] },
        { repetitions: [12] }
      ],
      rest: 60,
      bodyweight: true
    }
  ]
}

const daily_B: DailyWorkout = {
  name: 'B',
  exercises: [
    {
      exercise: agachamento,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 44
        },
        {
          repetitions: [8, 10],
          weight: 44
        },
        {
          repetitions: [8, 10],
          weight: 44
        },
        {
          repetitions: [8, 10],
          weight: 44
        }
      ],
      rest: 60
    },
    {
      exercise: levantamento_terra,
      unit: 'kg',
      serietype: 'custom',
      series: [
        {
          repetitions: [7],
          weight: 70
        },
        {
          repetitions: [7],
          weight: 70
        },
        {
          repetitions: [7],
          weight: 80
        },
        {
          repetitions: [7],
          weight: 80
        },
        {
          repetitions: [7],
          weight: 90
        }
      ],
      rest: 120,
      obs: 'alta carga'
    },
    {
      exercise: elevacao_pelvica,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10, 12],
          weight: 50
        },
        {
          repetitions: [10, 12],
          weight: 50
        },
        {
          repetitions: [10, 12],
          weight: 50
        },
        {
          repetitions: [10, 12],
          weight: 50
        }
      ],
      rest: 60
    },
    {
      exercise: extensora,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 50
        },
        {
          repetitions: [8, 10],
          weight: 50
        },
        {
          repetitions: [8, 10],
          weight: 50
        },
        {
          repetitions: [8, 10],
          weight: 50
        }
      ],
      rest: 60
    },
    {
      exercise: flexora,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 50
        },
        {
          repetitions: [8, 10],
          weight: 50
        },
        {
          repetitions: [8, 10],
          weight: 50
        },
        {
          repetitions: [8, 10],
          weight: 50
        }
      ],
      rest: 60
    },
    {
      exercise: abdutora,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [12],
          weight: 45
        },
        {
          repetitions: [12],
          weight: 45
        },
        {
          repetitions: [12],
          weight: 45
        }
      ],
      grip: 'pronada',
      rest: 60
    },
    {
      exercise: hiperextensao_lombar,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 12],
          weight: 15
        },
        {
          repetitions: [8, 12],
          weight: 15
        },
        {
          repetitions: [8, 12],
          weight: 15
        }
      ],
      rest: 60,
      obs: 'segurando anilha'
    }
  ]
}

const daily_C: DailyWorkout = {
  name: 'C',
  exercises: [
    {
      exercise: supino,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 20
        },
        {
          repetitions: [8, 10],
          weight: 20
        },
        {
          repetitions: [8, 10],
          weight: 20
        },
        {
          repetitions: [8, 10],
          weight: 20
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: supino_inclinado,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 18
        },
        {
          repetitions: [8, 10],
          weight: 18
        },
        {
          repetitions: [8, 10],
          weight: 18
        },
        {
          repetitions: [8, 10],
          weight: 18
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: crucifixo_reto,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 14
        },
        {
          repetitions: [8, 10],
          weight: 14
        },
        {
          repetitions: [8, 10],
          weight: 14
        },
        {
          repetitions: [8, 10],
          weight: 14
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: desenvolvimento,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 14
        },
        {
          repetitions: [10],
          weight: 14
        },
        {
          repetitions: [10],
          weight: 14
        },
        {
          repetitions: [10],
          weight: 14
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: triceps_coice,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 10
        },
        {
          repetitions: [10],
          weight: 10
        },
        {
          repetitions: [10],
          weight: 10
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'polia'
    },
    {
      exercise: crossover_baixa,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10],
          weight: 15
        },
        {
          repetitions: [10],
          weight: 15
        },
        {
          repetitions: [10],
          weight: 15
        },
        {
          repetitions: [10],
          weight: 15
        }
      ],
      grip: 'supinada',
      rest: 60,
      obs: 'polia baixa'
    },
    {
      exercise: elevacao_lateral,
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10],
          weight: 8
        },
        {
          repetitions: [8, 10],
          weight: 8
        },
        {
          repetitions: [8, 10],
          weight: 8
        },
        {
          repetitions: [8, 10],
          weight: 8
        }
      ],
      grip: 'pronada',
      rest: 60
    },
    {
      exercise: barra_paralela,
      unit: 'kg',
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
  name: 'exemplo 1',
  workouts: [daily_A]
}

export const musc2: Workout = {
  name: 'exemplo 2',
  workouts: [daily_A, daily_B, daily_C]
}
