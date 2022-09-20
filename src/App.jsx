import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import LoginPage from './pages/LoginPage'

function App() {
	return (
		<div id="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
