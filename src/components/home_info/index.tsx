import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export const HomeInfo = () => {
  const user_info = useSelector((state: RootReducer) => state.userinfo)
  const logs = useSelector((state: RootReducer) => state.logs)

  const imc =
    user_info.bodyweight > 0 && user_info.height > 0
      ? (user_info.bodyweight / (user_info.height / 100) ** 2).toFixed(2)
      : '-'

  return (
    <div className="info">
      <div className="row bg-light d-flex rounded p-1">
        <div className="col-10 p-0 d-flex flex-column justify-content-around">
          <p className="m-1 py-1 px-2 bg-dark rounded text-light">
            <b>nome:</b>
            {` ${user_info.name}`}
          </p>
          <div className="d-flex">
            <p className="w-50 m-1 py-1 px-2 bg-dark rounded text-light">
              <b>idade:</b>
              {` ${user_info.age}`}
            </p>
            <p className="w-50 m-1 py-1 px-2 bg-dark rounded text-light">
              <b>IMC:</b>
              {` ${imc}`}
            </p>
          </div>
        </div>
        <div className="col-2 p-0 m-0 d-flex flex-column justify-content-around">
          <button className="btn btn-primary px-1 py-0 m-1" disabled>
            <i className="bi bi-gear-fill"></i>
          </button>
          <button className="btn btn-primary px-1 py-0 m-1">
            <i className="bi bi-person-fill"></i>
          </button>
        </div>
      </div>
      <div className="row bg-light rounded d-flex mt-2 p-1">
        <p className="bg-dark rounded text-light m-0 py-1 px-2">
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
