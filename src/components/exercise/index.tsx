import { useState } from 'react'
import { ExerciseStyled } from './styles'

export const Exercise = ({ ...props }: ExerciseProps) => {
  const [open, setOpen] = useState(false)
  return (
    <ExerciseStyled>
      <button
        className="btn btn-outline-dark w-100 d-flex justify-content-between"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#exerciseCollapse${props.exerciseKey}`}
        aria-expanded="false"
        aria-controls={`exerciseCollapse${props.exerciseKey}`}
        onClick={() => setOpen(!open)}
      >
        <div>
          <b>{props.exerciseKey + 1}</b>
          <span className="ms-2">{props.workoutExercise.exercise.name}</span>
        </div>
        <span>{open ? '-' : '+'}</span>
      </button>
      <div
        className="collapse container py-1"
        id={`exerciseCollapse${props.exerciseKey}`}
      >
        <div className="row">
          <span className="col-5 border-end border-secondary-subtle">
            repetições
          </span>
          <span className="col-5 border-start border-secondary-subtle">
            carga
          </span>
          <div className="col-2" />
        </div>
        {props.workoutExercise.series.map((serie, i) => {
          return (
            <div key={i} className="row">
              <span className="col-5 border border-secondary-subtle d-flex align-items-center">
                {serie.repetitions.length === 1
                  ? serie.repetitions[0]
                  : `${serie.repetitions[0]}-${serie.repetitions[1]}`}
              </span>
              <span className="col-5 border border-secondary-subtle d-flex align-items-center">
                {serie.weight}
                {serie.unit}
              </span>
              <button className="btn col-2 border border-secondary-subtle d-flex align-items-center">
                asd
              </button>
            </div>
          )
        })}
      </div>
    </ExerciseStyled>
  )
}
