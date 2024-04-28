import { FluentProvider, webDarkTheme } from '@fluentui/react-components'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <FluentProvider theme={webDarkTheme} id="container">
        <App />
    </FluentProvider>
)
