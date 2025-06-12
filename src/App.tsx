import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AuthProvider from "./contexts/AuthContext"
import "./App.css"

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* Ajoutez d'autres routes ici */}
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
