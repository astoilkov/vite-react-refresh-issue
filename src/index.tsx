import Index from './App'
import ReactDOM from 'react-dom'

if (import.meta.hot !== undefined) {
  import.meta.hot.accept(async () => {
    const { default: Index } = await import('./App')
    ReactDOM.render(<Index />, document.querySelector('#root'))
  })
}

ReactDOM.render(<Index />, document.querySelector('#root'))
