import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { getImc } from '../../utils/getimc'

export const HomeInfo = () => {
  const user_info = useSelector((state: RootReducer) => state.userinfo)
  const logs = useSelector((state: RootReducer) => state.logs)

  return (
    <div className="info px-3">
      <div className="row bg-dark d-flex rounded p-1">
        <div className="col-10 p-0 d-flex flex-column justify-content-around">
          <p className="m-1 py-1 px-2 bg-light rounded text-dark">
            <b>nome:</b>
            {` ${user_info.name}`}
          </p>
          <div className="d-flex">
            <p className="w-50 m-1 py-1 px-2 bg-light rounded text-dark">
              <b>idade:</b>
              {` ${user_info.age > 0 ? user_info.age : '-'}`}
            </p>
            <p className="w-50 m-1 py-1 px-2 bg-light rounded text-dark">
              <b>IMC:</b>
              {` ${
                getImc(user_info.bodyweight, user_info.height) == 0
                  ? '-'
                  : getImc(user_info.bodyweight, user_info.height)
              }`}
            </p>
          </div>
        </div>
        <div className="col-2 p-0 m-0 d-flex flex-column justify-content-around">
          <button
            disabled
            data-bs-toggle="modal"
            data-bs-target="#configModal"
            className="btn bg-light btn-outline-primary px-1 py-0 m-1"
          >
            <i className="bi bi-gear-fill"></i>
          </button>
          <button
            data-bs-toggle="modal"
            data-bs-target="#userinfoModal"
            className="btn bg-light btn-outline-primary px-1 py-0 m-1"
          >
            <i className="bi bi-person-fill"></i>
          </button>
        </div>
      </div>
      <div className="row bg-dark rounded d-flex mt-2 p-1">
        <p className="bg-light rounded text-dark m-0 py-1 px-2">
          <b>último treino:</b>
          {` ${
            logs.history
              ? `${logs.history.at(-1)?.workoutname}/${
                  logs.history.at(-1)?.dailyworkout?.name
                }`
              : '-'
          }`}
        </p>
      </div>
    </div>
  )
}
