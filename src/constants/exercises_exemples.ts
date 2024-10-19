import { getMuscleGroup } from './musclegroups'

export const supino: Exercise = {
  name: 'supino',
  musclegroup: [
    getMuscleGroup('peito'),
    getMuscleGroup('ombro'),
    getMuscleGroup('tríceps')
  ]
}

export const supino_inclinado: Exercise = {
  name: 'supino inclinado',
  musclegroup: [
    getMuscleGroup('peito'),
    getMuscleGroup('ombro'),
    getMuscleGroup('tríceps')
  ]
}

export const crucifixo_reto: Exercise = {
  name: 'crucifixo reto',
  musclegroup: [
    getMuscleGroup('peito'),
    getMuscleGroup('ombro'),
    getMuscleGroup('tríceps')
  ]
}

export const desenvolvimento: Exercise = {
  name: 'desenvolvimento',
  musclegroup: [getMuscleGroup('ombro')]
}

export const crossover_baixa: Exercise = {
  name: 'crossover polia baixa',
  musclegroup: [getMuscleGroup('peito')]
}

export const triceps_coice: Exercise = {
  name: 'triceps coice',
  musclegroup: [getMuscleGroup('tríceps')]
}

export const elevacao_lateral: Exercise = {
  name: 'elevação lateral',
  musclegroup: [getMuscleGroup('ombro')]
}

export const barra_paralela: Exercise = {
  name: 'barra paralela',
  musclegroup: [getMuscleGroup('peito'), getMuscleGroup('tríceps')]
}
