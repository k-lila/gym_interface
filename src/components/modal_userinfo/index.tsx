import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setUserAge,
  setUserBodyweight,
  setUserHeight,
  setUserName
} from '../../store/reducers/userinfo'

export const UserInfoModal = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [toggleDisable, setToggleDisable] = useState(true)

  useEffect(() => {
    const test1 = name != '' && age != '' && weight != '' && height != ''
    const test2 = Number(age) > 0 && Number(weight) > 0 && Number(height) > 0
    const result = test1 && test2
    setToggleDisable(!result)
  }, [age, height, weight, name])

  const handleSave = () => {
    dispatch(setUserName(name))
    dispatch(setUserAge(Number(age)))
    dispatch(setUserHeight(Number(height)))
    dispatch(setUserBodyweight(Number(weight)))
  }

  return (
    <div
      className="modal fade"
      id="userinfoModal"
      aria-labelledby="userinfoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="userinfoModalLabel">
              Informações pessoais
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row d-flex p-2 m-0 border-bottom">
                <label htmlFor="username" className="form-label w-25 m-auto">
                  Nome
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="username"
                  type="text"
                  className="form-control w-75 text-center border"
                />
              </div>
              <div className="row d-flex p-2 m-auto border-bottom">
                <label
                  htmlFor="userage"
                  className="form-label w-25 my-auto d-flex flex-column"
                >
                  <span className="text-center">idade</span>
                  <span
                    style={{ fontSize: '0.8em' }}
                    className="text-center"
                  >{`(anos)`}</span>
                </label>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  id="userage"
                  type="number"
                  className="form-control w-25 text-center border"
                />
              </div>
              <div className="row d-flex p-2 m-auto border-bottom">
                <label
                  htmlFor="userheight"
                  className="form-label w-25 my-auto d-flex flex-column"
                >
                  <span className="text-center">altura</span>
                  <span
                    style={{ fontSize: '0.8em' }}
                    className="text-center"
                  >{`(cm)`}</span>
                </label>
                <input
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  id="userheight"
                  type="number"
                  className="form-control w-25 text-center border"
                />
              </div>
              <div className="row d-flex p-2 m-auto border-bottom">
                <label
                  htmlFor="userweight"
                  className="form-label w-25 my-auto d-flex flex-column"
                >
                  <span className="text-center">peso</span>
                  <span
                    style={{ fontSize: '0.8em' }}
                    className="text-center"
                  >{`(kg)`}</span>
                </label>
                <input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  id="userweight"
                  type="number"
                  className="form-control w-25 text-center border"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              fechar
            </button>
            <button
              type="submit"
              className="btn btn-outline-success"
              disabled={toggleDisable}
              onClick={handleSave}
              data-bs-dismiss="modal"
            >
              <span>salvar</span>
              <i className="bi bi-check-lg ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
