import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { toggleShow } from '../../store/reducers/restcounter'

export const RestCounter = () => {
  const dispatch = useDispatch()
  const restCounter = useSelector((state: RootReducer) => state.restcounter)
  return (
    <div
      style={{ width: '4em' }}
      className={`${
        restCounter.rest ? 'bg-danger' : 'bg-success'
      } d-flex align-items-center justify-content-center rounded px-2`}
      onClick={() => dispatch(toggleShow(!restCounter.show))}
    >
      <span className="text-light">
        {restCounter.show ? (
          `${restCounter.minutes > 9 ? '' : '0'}${restCounter.minutes}:${
            restCounter.seconds > 9 ? '' : '0'
          }${restCounter.seconds}`
        ) : (
          <i className="bi bi-stopwatch"></i>
        )}
      </span>
    </div>
  )
}
