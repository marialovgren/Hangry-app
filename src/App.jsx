import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RequireAuth from './components/RequireAuth'
import './assets/scss/App.scss'

// * Pages * // 
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import LogoutPage from './pages/LogoutPage'
import SignupPage from './pages/SignupPage'
import TipsPage from './pages/TipsPage'
import RestaurantPage from './pages/RestaurantPage'
import UpdateProfilePage from './pages/UpdateProfilePage'


function App() {
	return (
		<div id="App">
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/logout" element={<LogoutPage />} />
				<Route path="/tips" element={<TipsPage />} />
				<Route path="/restaurants" element={<RestaurantPage />} />
				
				{/* Protected routes */}
				<Route path="/update-profile" element={
					//<RequireAuth>
						<UpdateProfilePage />
					//</RequireAuth>
				} />
				<Route path="/admin-page" element={
					<RequireAuth>
						<AdminPage />
					</RequireAuth>
				} />
			</Routes>

			<ToastContainer autoClose={3000} />
		</div>
	)
}

export default App
