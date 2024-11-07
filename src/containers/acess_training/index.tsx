import { SelectWorkout } from '../../components/modal_selectworkout'

export const Acess_Training = () => {
  return (
    <>
      <div className="d-flex flex-column p-3 bg-dark rounded">
        <button
          style={{ height: '33vmin', width: '33vmin' }}
          className="btn btn-outline-primary bg-light m-3 d-flex flex-column align-items-center justify-content-center"
        >
          <span className="fs-3 border-bottom border-primary w-75">criar</span>
          <span className="fs-3">editar</span>
        </button>
        <button
          style={{ height: '33vmin', width: '33vmin' }}
          className="btn btn-outline-primary bg-light m-3 fs-2"
          data-bs-toggle="modal"
          data-bs-target="#chooseWorkout"
        >
          treino
        </button>
      </div>
      <SelectWorkout />
    </>
  )
}
