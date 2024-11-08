export const ExerciseInfo = ({ ...props }: ExerciseInfoProps) => {
  return (
    <div className="w-100">
      <article>
        {props.exercise.obs ? (
          <p className="d-flex my-auto">
            <b>Obs.:&nbsp;</b>
            {` ${props.exercise.obs}`}
          </p>
        ) : null}
        <p className="d-flex">
          <b>Grupos musculares: </b>
          {props.exercise.exercise.musclegroup.map((mg, i) => {
            return <span key={i}>{mg.name},&nbsp;</span>
          })}
        </p>
      </article>
    </div>
  )
}
