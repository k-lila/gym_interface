import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/styles'
import { Paths } from './routes'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Paths />
      </BrowserRouter>
    </Provider>
  )
}

export default App
