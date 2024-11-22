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
  musclegroup: [getMuscleGroup('peito'), getMuscleGroup('ombro')]
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

// ========================================================================================== //

export const puxada_alta: Exercise = {
  name: 'puxada alta',
  musclegroup: [getMuscleGroup('costas')]
}

export const hammer: Exercise = {
  name: 'hammer',
  musclegroup: [getMuscleGroup('costas')]
}

export const serrote: Exercise = {
  name: 'serrote',
  musclegroup: [getMuscleGroup('costas')]
}

export const remada_curvada: Exercise = {
  name: 'remada curvada',
  musclegroup: [getMuscleGroup('costas')]
}

export const biceps_martelo: Exercise = {
  name: 'bíceps martelo',
  musclegroup: [getMuscleGroup('bíceps')]
}
export const rosca_alternada: Exercise = {
  name: 'rosca alternada',
  musclegroup: [getMuscleGroup('bíceps')]
}
export const rosca_inversa: Exercise = {
  name: 'rosca inversa',
  musclegroup: [getMuscleGroup('bíceps')]
}
export const abdominal_infra: Exercise = {
  name: 'abdominal infra',
  musclegroup: [getMuscleGroup('abdômen')]
}

// ========================================================================================== //

export const agachamento: Exercise = {
  name: 'agachamento',
  musclegroup: [getMuscleGroup('quadríceps'), getMuscleGroup('glúteos')]
}
export const levantamento_terra: Exercise = {
  name: 'levantamento terra',
  musclegroup: [getMuscleGroup('posterior da coxa'), getMuscleGroup('glúteos')]
}
export const elevacao_pelvica: Exercise = {
  name: 'elevação pélvica',
  musclegroup: [getMuscleGroup('glúteos')]
}
export const extensora: Exercise = {
  name: 'cadeira extensora',
  musclegroup: [getMuscleGroup('quadríceps')]
}
export const flexora: Exercise = {
  name: 'cadeira flexora',
  musclegroup: [getMuscleGroup('posterior da coxa')]
}
export const abdutora: Exercise = {
  name: 'abdutora',
  musclegroup: [getMuscleGroup('abdutores')]
}
export const hiperextensao_lombar: Exercise = {
  name: 'hiperextensão lombar',
  musclegroup: [getMuscleGroup('lombar')]
}

// ========================================================================================== //

export const barra_fixa: Exercise = {
  name: 'barra fixa',
  musclegroup: [getMuscleGroup('costas')]
}

export const apoio: Exercise = {
  name: 'apoio',
  musclegroup: [getMuscleGroup('peito')]
}
