import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectNigeria from './pages/ProjectNigeria'
import Volunteer from './pages/Volunteer'
import Transparency from './pages/Transparency'
import Join from './pages/Join'
import Donate from './pages/Donate'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="project-nigeria" element={<ProjectNigeria />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="transparency" element={<Transparency />} />
        <Route path="join" element={<Join />} />
        <Route path="donate" element={<Donate />} />
      </Route>
    </Routes>
  )
}