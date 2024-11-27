import { getExercise } from './exercises_exemples'

const daily_A: DailyWorkout = {
  name: 'A',
  exercises: [
    {
      exercise: getExercise('puxada alta'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        }
      ],
      grip: 'pronada',
      rest: 60
    },
    {
      exercise: getExercise('hammer'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10, 12]
        },
        {
          repetitions: [10, 12]
        },
        {
          repetitions: [10, 12]
        },
        {
          repetitions: [10, 12]
        }
      ],
      grip: 'supinada',
      rest: 60
    },
    {
      exercise: getExercise('serrote'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        }
      ],
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: getExercise('remada curvada'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'barra olímpica'
    },
    {
      exercise: getExercise('bíceps martelo'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        }
      ],
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: getExercise('rosca alternada'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        }
      ],
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: getExercise('rosca inversa'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10, 12]
        },
        {
          repetitions: [10, 12]
        },
        {
          repetitions: [10, 12]
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'cabo'
    },
    {
      exercise: getExercise('abdominal infra'),
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
      exercise: getExercise('agachamento'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        }
      ],
      rest: 60
    },
    {
      exercise: getExercise('levantamento terra'),
      unit: 'kg',
      serietype: 'custom',
      series: [
        {
          repetitions: [7]
        },
        {
          repetitions: [7]
        },
        {
          repetitions: [7]
        },
        {
          repetitions: [7]
        },
        {
          repetitions: [7]
        }
      ],
      rest: 120,
      obs: 'alta carga'
    },
    {
      exercise: getExercise('elevação pélvica'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10, 12]
        },
        {
          repetitions: [10, 12]
        },
        {
          repetitions: [10, 12]
        },
        {
          repetitions: [10, 12]
        }
      ],
      rest: 60
    },
    {
      exercise: getExercise('cadeira extensora'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        }
      ],
      rest: 60
    },
    {
      exercise: getExercise('cadeira flexora'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        }
      ],
      rest: 60
    },
    {
      exercise: getExercise('cadeira abdutora'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [12]
        },
        {
          repetitions: [12]
        },
        {
          repetitions: [12]
        }
      ],
      grip: 'pronada',
      rest: 60
    },
    {
      exercise: getExercise('hiperextensão lombar'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 12]
        },
        {
          repetitions: [8, 12]
        },
        {
          repetitions: [8, 12]
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
      exercise: getExercise('supino'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: getExercise('supino inclinado'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: getExercise('crucifixo reto'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: getExercise('desenvolvimento'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'haltere'
    },
    {
      exercise: getExercise('tríceps coice'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        }
      ],
      grip: 'pronada',
      rest: 60,
      obs: 'polia'
    },
    {
      exercise: getExercise('crossover polia baixa'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        },
        {
          repetitions: [10]
        }
      ],
      grip: 'supinada',
      rest: 60,
      obs: 'polia baixa'
    },
    {
      exercise: getExercise('elevação lateral'),
      unit: 'kg',
      serietype: 'normal',
      series: [
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        },
        {
          repetitions: [8, 10]
        }
      ],
      grip: 'pronada',
      rest: 60
    },
    {
      exercise: getExercise('barra paralela'),
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

export const musc2: Workout = {
  name: 'exemplo 2',
  obs: 'hipertrofia',
  workouts: [daily_A, daily_B, daily_C]
}
