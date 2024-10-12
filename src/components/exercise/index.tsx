import { useState } from 'react'
import { ExerciseStyled } from './styles'
import edit from '../../assets/edit.png'
import info from '../../assets/info.png'

export const Exercise = ({ ...props }: ExerciseProps) => {
  const [open, setOpen] = useState(false)
  return (
    <ExerciseStyled>
      <button
        className="btn btn-outline-dark w-100 d-flex justify-content-between align-items-center"
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
        className="collapse container border border-dark rounded pb-1"
        id={`exerciseCollapse${props.exerciseKey}`}
      >
        <div className="row mt-1 border-bottom border-secondary d-flex justify-content-between">
          <div className="col-1" />
          <span className="col-4">rep</span>
          <span className="col-4">carga</span>
          <div className="col-2" style={{ width: '2em' }} />
        </div>
        {/* series */}
        {props.workoutExercise.series.map((serie, i) => {
          return (
            <div
              key={i}
              className="row border-bottom border-secondary d-flex justify-content-between"
            >
              <span className="col-1 d-flex align-items-center border-end">
                {i + 1}
              </span>
              <span className="col-4 d-flex align-items-center">
                {serie.repetitions.length === 1
                  ? `${serie.repetitions[0]} x`
                  : `${serie.repetitions[0]}-${serie.repetitions[1]} x`}
              </span>
              <span className="col-4 d-flex align-items-center">
                {`${serie.weight} ${serie.unit}`}
              </span>
              <button
                onClick={() => alert('aqui')}
                className="btn col-2 edit-btn"
              >
                <img src={edit} alt="edit" />
              </button>
            </div>
          )
        })}
        <div className="d-flex justify-content-between align-items-center pt-1">
          <span>+ serie</span>
          <button
            className="btn-info"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#exerciseCollapse${props.exerciseKey}info`}
            aria-expanded="false"
            aria-controls={`exerciseCollapse${props.exerciseKey}info`}
          >
            <img src={info} alt="info" />
          </button>
        </div>
        <div
          className="collapse container text-justify border-top border-secondary mt-1 pt-1"
          id={`exerciseCollapse${props.exerciseKey}info`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          dicta, quisquam consectetur omnis sint suscipit, nisi veritatis,
          ducimus vel voluptas repellendus reprehenderit quae laudantium
          necessitatibus reiciendis libero? A, eaque dignissimos!
        </div>
      </div>
    </ExerciseStyled>
  )
}
