import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/styles'
import { Paths } from './routes'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Timer } from './components/timer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Paths />
      </BrowserRouter>
      <Timer />
    </Provider>
  )
}

export default App
