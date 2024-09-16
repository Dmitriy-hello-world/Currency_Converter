import CssBaseline from '@mui/material/CssBaseline'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/App.tsx'
import './index.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CssBaseline>
			<App />
		</CssBaseline>
	</StrictMode>
)
