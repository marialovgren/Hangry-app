import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import LoginPage from './pages/LoginPage'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ToastContainer autoClose={3000} />
		</div>
	)
}

export default App
