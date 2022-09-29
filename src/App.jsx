import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import LoginPage from './pages/LoginPage'
import './assets/scss/App.scss'
import AdminPage from './pages/AdminPage'
import SignupPage from './pages/SignupPage'
import TipsPage from './pages/TipsPage'
import RestaurantPage from './pages/RestaurantPage'
import UpdateProfilePage from './pages/UpdateProfilePage'

function App() {
	return (
		<div id="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/admin-page" element={<AdminPage />} />
				<Route path="/tips" element={<TipsPage />} />
				<Route path="/restaurants" element={<RestaurantPage />} />
				<Route path="*" element={<NotFound />} />

				{/* Protected routes */}
				<Route path="/update-profile" element={
					//<RequireAuth>
						<UpdateProfilePage />
					//</RequireAuth>
				} />
			</Routes>

			<ToastContainer autoClose={3000} />
		</div>
	)
}

export default App
