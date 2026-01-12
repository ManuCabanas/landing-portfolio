import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/projects/ProjectDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes>
  )
}

export default App
