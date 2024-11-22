export const ExerciseInfo = ({ ...props }: ExerciseInfoProps) => {
  return (
    <div className="w-100">
      <article className="container mb-1">
        {props.exercise.obs ? (
          <div className="row my-1">
            <p className="col-5 d-flex m-0 justify-content-end align-items-center">
              <b className="text-end">obs.:</b>
            </p>
            <p className="col-7 d-flex m-0 text-justify">
              {props.exercise.obs}
            </p>
          </div>
        ) : null}
        {props.exercise.grip ? (
          <div className="row my-1">
            <p className="col-5 d-flex m-0 justify-content-end align-items-center">
              <b className="text-end">pegada:</b>
            </p>
            <p className="col-7 d-flex m-0">{props.exercise.grip}</p>
          </div>
        ) : null}
        {props.exercise.rest ? (
          <div className="row my-1">
            <p className="col-5 d-flex m-0 justify-content-end align-items-center">
              <b className="text-end">descanso:</b>
            </p>
            <p className="col-7 d-flex m-0">
              {`${
                Math.floor(props.exercise.rest / 60) > 9
                  ? Math.floor(props.exercise.rest / 60)
                  : `0${Math.floor(props.exercise.rest / 60)}`
              }:${
                Math.floor(props.exercise.rest % 60) > 9
                  ? Math.floor(props.exercise.rest % 60)
                  : `0${Math.floor(props.exercise.rest % 60)}`
              } min`}
            </p>
          </div>
        ) : null}
        <div className="row my-1">
          <p className="col-5 d-flex m-0 justify-content-end align-items-center">
            <b className="text-end">grupos musculares:</b>
          </p>
          <div
            className="col-7 accordion d-flex flex-column justify-content-center"
            id="accordionMuscles"
          >
            {props.exercise.exercise.musclegroup.map((mg, i) => {
              const uniqueId =
                `${mg.name}-${props.exercise.exercise.name}`.replaceAll(' ', '')
              return (
                <div className="accordion-item" key={`${uniqueId}-${i}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed py-1 px-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#panelCollapse-${uniqueId}`}
                      aria-expanded="false"
                      aria-controls={`panelCollapse-${uniqueId}`}
                    >
                      {mg.name}
                    </button>
                  </h2>
                  <div
                    id={`panelCollapse-${uniqueId}`}
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body m-0 p-0">
                      <ul className="m-auto p-1" style={{ listStyle: 'none' }}>
                        {mg.musclegroup.map((_mg, ii) => {
                          return (
                            <li key={ii}>
                              <span
                                style={{ fontSize: '0.9em' }}
                              >{`- ${_mg}`}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </article>
    </div>
  )
}
