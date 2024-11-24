const musclegroups: MuscleGroup[] = [
  {
    name: 'peito',
    musclegroup: [
      'peitoral maior',
      'peitoral menor',
      'serrátil anterior',
      'subclávio',
      'intercostais'
    ]
  },
  {
    name: 'ombro',
    musclegroup: [
      'deltóide anterior',
      'deltóide lateral',
      'deltóide posterior',
      'supraespinhal'
    ]
  },
  {
    name: 'costas',
    musclegroup: [
      'latíssimo do dorso',
      'trapézio',
      'romboides',
      'infraespinhal'
    ]
  },
  {
    name: 'bíceps',
    musclegroup: ['bíceps braquial', 'braquial', 'coracobraquial']
  },
  {
    name: 'tríceps',
    musclegroup: ['tríceps braquial', 'ancônio']
  },
  {
    name: 'antebraço',
    musclegroup: [
      'flexor radial do carpo',
      'extensor radial do carpo',
      'palmar longo',
      'pronador redondo'
    ]
  },
  {
    name: 'abdômen',
    musclegroup: [
      'reto abdominal',
      'oblíquo externo',
      'oblíquo interno',
      'transverso abdominal'
    ]
  },
  {
    name: 'lombar',
    musclegroup: [
      'eretor da espinha',
      'quadrado lombar',
      'multífidos',
      'intertransversários'
    ]
  },
  {
    name: 'glúteos',
    musclegroup: ['glúteo máximo', 'glúteo médio', 'glúteo mínimo']
  },
  {
    name: 'quadríceps',
    musclegroup: [
      'reto femoral',
      'vasto lateral',
      'vasto medial',
      'vasto intermédio'
    ]
  },
  {
    name: 'posterior da coxa',
    musclegroup: ['bíceps femoral', 'semimembranoso', 'semitendinoso']
  },
  {
    name: 'abdutores',
    musclegroup: [
      'adutor longo',
      'adutor curto',
      'adutor magno',
      'pectíneo',
      'grácil'
    ]
  },
  {
    name: 'panturrilha',
    musclegroup: ['gastrocnêmio', 'sóleo', 'tibial posterior']
  }
]

export function getMuscleGroup(musclegroup: string): MuscleGroup {
  return (
    musclegroups.find((f) => f.name === musclegroup) || {
      name: '',
      musclegroup: []
    }
  )
}
