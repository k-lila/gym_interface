const peito: MuscleGroup = {
  name: 'Peito',
  musclegroup: [
    'peitoral maior',
    'peitoral menor',
    'serrátil anterior',
    'subclávio',
    'intercostais'
  ]
}

const ombro: MuscleGroup = {
  name: 'Ombro',
  musclegroup: [
    'deltóide anterior',
    'deltóide lateral',
    'deltóide posterior',
    'supraespinhal'
  ]
}

const costas: MuscleGroup = {
  name: 'Costas',
  musclegroup: ['latíssimo do dorso', 'trapézio', 'romboides', 'infraespinhal']
}

const biceps: MuscleGroup = {
  name: 'Bíceps',
  musclegroup: ['bíceps braquial', 'braquial', 'coracobraquial']
}

const triceps: MuscleGroup = {
  name: 'Tríceps',
  musclegroup: ['tríceps braquial', 'ancônio']
}

const antebraco: MuscleGroup = {
  name: 'Antebraço',
  musclegroup: [
    'flexor radial do carpo',
    'extensor radial do carpo',
    'palmar longo',
    'pronador redondo'
  ]
}

const abdomen: MuscleGroup = {
  name: 'Abdômen',
  musclegroup: [
    'reto abdominal',
    'oblíquo externo',
    'oblíquo interno',
    'transverso abdominal'
  ]
}

const lombar: MuscleGroup = {
  name: 'Lombar',
  musclegroup: [
    'eretor da espinha',
    'quadrado lombar',
    'multífidos',
    'intertransversários'
  ]
}

const gluteos: MuscleGroup = {
  name: 'Glúteos',
  musclegroup: ['glúteo máximo', 'glúteo médio', 'glúteo mínimo']
}

const quadriceps: MuscleGroup = {
  name: 'Quadríceps',
  musclegroup: [
    'reto femoral',
    'vasto lateral',
    'vasto medial',
    'vasto intermédio'
  ]
}

const posteriorCoxa: MuscleGroup = {
  name: 'Posterior da Coxa',
  musclegroup: ['bíceps femoral', 'semimembranoso', 'semitendinoso']
}

const adutores: MuscleGroup = {
  name: 'Adutores',
  musclegroup: [
    'adutor longo',
    'adutor curto',
    'adutor magno',
    'pectíneo',
    'grácil'
  ]
}

const panturrilha: MuscleGroup = {
  name: 'Panturrilha',
  musclegroup: ['gastrocnêmio', 'sóleo', 'tibial posterior']
}

export function getMuscleGroup(musclegroup: string): MuscleGroup {
  switch (musclegroup) {
    case 'peito':
      return peito
    case 'ombro':
      return ombro
    case 'costas':
      return costas
    case 'abdômen':
      return abdomen
    case 'bíceps':
      return biceps
    case 'tríceps':
      return triceps
    case 'antebraço':
      return antebraco
    case 'quadríceps':
      return quadriceps
    case 'posterior da coxa':
      return posteriorCoxa
    case 'panturrilha':
      return panturrilha
    case 'glúteos':
      return gluteos
    case 'adutores':
      return adutores
    case 'lombar':
      return lombar
    default:
      return { name: '', musclegroup: [] }
  }
}
