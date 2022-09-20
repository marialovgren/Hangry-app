import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import SignupPage from './pages/SignupPage'
import TipsPage from './pages/TipsPage'

function App() {
	return (
		<div id="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/tips" element={<TipsPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
