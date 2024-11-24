import { getMuscleGroup } from './musclegroups'

const exercises: Exercise[] = [
  {
    name: 'supino',
    musclegroup: [
      getMuscleGroup('peito'),
      getMuscleGroup('ombro'),
      getMuscleGroup('tríceps')
    ]
  },
  {
    name: 'supino inclinado',
    musclegroup: [
      getMuscleGroup('peito'),
      getMuscleGroup('ombro'),
      getMuscleGroup('tríceps')
    ]
  },
  {
    name: 'crucifixo reto',
    musclegroup: [getMuscleGroup('peito'), getMuscleGroup('ombro')]
  },
  {
    name: 'desenvolvimento',
    musclegroup: [getMuscleGroup('ombro'), getMuscleGroup('tríceps')]
  },
  {
    name: 'crossover polia baixa',
    musclegroup: [getMuscleGroup('peito'), getMuscleGroup('ombro')]
  },
  {
    name: 'triceps coice',
    musclegroup: [getMuscleGroup('tríceps'), getMuscleGroup('ombro')]
  },
  {
    name: 'elevação lateral',
    musclegroup: [getMuscleGroup('ombro'), getMuscleGroup('trapézio')]
  },
  {
    name: 'barra paralela',
    musclegroup: [
      getMuscleGroup('peito'),
      getMuscleGroup('tríceps'),
      getMuscleGroup('ombro')
    ]
  },
  {
    name: 'puxada alta',
    musclegroup: [
      getMuscleGroup('costas'),
      getMuscleGroup('bíceps'),
      getMuscleGroup('ombro')
    ]
  },
  {
    name: 'hammer',
    musclegroup: [getMuscleGroup('costas'), getMuscleGroup('bíceps')]
  },
  {
    name: 'serrote',
    musclegroup: [getMuscleGroup('costas'), getMuscleGroup('bíceps')]
  },
  {
    name: 'remada curvada',
    musclegroup: [getMuscleGroup('costas'), getMuscleGroup('bíceps')]
  },
  {
    name: 'bíceps martelo',
    musclegroup: [getMuscleGroup('bíceps'), getMuscleGroup('antebraço')]
  },
  {
    name: 'rosca alternada',
    musclegroup: [getMuscleGroup('bíceps'), getMuscleGroup('antebraço')]
  },
  {
    name: 'rosca inversa',
    musclegroup: [getMuscleGroup('bíceps'), getMuscleGroup('antebraço')]
  },
  {
    name: 'abdominal infra',
    musclegroup: [getMuscleGroup('abdômen'), getMuscleGroup('lombar')]
  },
  {
    name: 'agachamento',
    musclegroup: [
      getMuscleGroup('quadríceps'),
      getMuscleGroup('glúteos'),
      getMuscleGroup('lombar')
    ]
  },
  {
    name: 'levantamento terra',
    musclegroup: [
      getMuscleGroup('posterior da coxa'),
      getMuscleGroup('glúteos'),
      getMuscleGroup('lombar')
    ]
  },
  {
    name: 'elevação pélvica',
    musclegroup: [
      getMuscleGroup('glúteos'),
      getMuscleGroup('posterior da coxa')
    ]
  },
  {
    name: 'cadeira extensora',
    musclegroup: [getMuscleGroup('quadríceps')]
  },
  {
    name: 'cadeira flexora',
    musclegroup: [getMuscleGroup('posterior da coxa')]
  },
  {
    name: 'cadeira abdutora',
    musclegroup: [getMuscleGroup('abdutores'), getMuscleGroup('glúteos')]
  },
  {
    name: 'hiperextensão lombar',
    musclegroup: [getMuscleGroup('lombar'), getMuscleGroup('glúteos')]
  },
  {
    name: 'barra fixa',
    musclegroup: [
      getMuscleGroup('costas'),
      getMuscleGroup('bíceps'),
      getMuscleGroup('ombro')
    ]
  },
  {
    name: 'apoio',
    musclegroup: [
      getMuscleGroup('peito'),
      getMuscleGroup('tríceps'),
      getMuscleGroup('ombro')
    ]
  }
]

export const getExercise = (exercise: string): Exercise => {
  return (
    exercises.find((f) => f.name == exercise) || {
      name: '',
      musclegroup: []
    }
  )
}
