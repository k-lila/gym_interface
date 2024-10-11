import { useNavigate } from 'react-router-dom'
import { AcessCard } from './styles'

import fire from '../../assets/fire.png'
import haltere from '../../assets/haltere.png'
import add from '../../assets/add.png'

export const Acess_Training = () => {
  const navigate = useNavigate()
  const handleCreate = () => {
    navigate('create_workout')
  }
  const handleWorkout = () => {
    navigate('workout')
  }
  return (
    <AcessCard>
      <div className="__info">
        <article>
          <p>
            <b>nome: </b>fulano
          </p>
          <p>
            <b>data:</b> 10/10/2024
          </p>
        </article>
        <button>perfil</button>
      </div>
      <div className="__btn-container">
        <button onClick={handleCreate}>
          <img src={add} className="--add" />
          <img src={haltere} />
        </button>
        <button onClick={handleWorkout}>
          <img src={fire} className="--workout" />
          <img src={haltere} />
        </button>
      </div>
    </AcessCard>
  )
}
