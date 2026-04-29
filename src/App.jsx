import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectNigeriaPage from './pages/ProjectNigeriaPage'
import VolunteerApp from './pages/VolunteerApp'
import TransparencyPage from './pages/TransparencyPage'
import JoinPage from './pages/JoinPage'
import DonatePage from './pages/DonatePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="project-nigeria" element={<ProjectNigeriaPage />} />
          <Route path="volunteer" element={<VolunteerApp />} />
          <Route path="transparency" element={<TransparencyPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="donate" element={<DonatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App