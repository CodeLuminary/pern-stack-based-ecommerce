import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
const router = () =>{
    return (
        <Router>
            <Routes>
                <Route index element={<Dashboard />} />
            </Routes>
        </Router>
    )
}
export default router