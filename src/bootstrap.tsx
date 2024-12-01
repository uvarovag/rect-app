import ReactDOM from 'react-dom/client'
import StandaloneApp from 'app/StandaloneApp'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(<StandaloneApp />)
