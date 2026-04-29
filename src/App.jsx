import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { HomePage } from './pages/HomePage';

// Placeholder components for routes yet to be implemented
const PlaceholderPage = ({ title }) => (
  <div style={{ paddingTop: '120px', minHeight: '60vh', padding: '120px 24px 60px', textAlign: 'center' }}>
    <h1 style={{ color: 'var(--color-prussian-blue)' }}>{title}</h1>
    <p style={{ color: 'var(--color-muted-steel)', marginTop: '16px' }}>This module is currently in development for the prototype.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="project-nigeria" element={<PlaceholderPage title="Project Nigeria" />} />
          <Route path="volunteer" element={<PlaceholderPage title="Volunteer App" />} />
          <Route path="command-centre" element={<PlaceholderPage title="Command Centre" />} />
          <Route path="chapter" element={<PlaceholderPage title="Chapters Dashboard" />} />
          <Route path="donate" element={<PlaceholderPage title="Premium Donor Gateway" />} />
          <Route path="join" element={<PlaceholderPage title="Join The Arena" />} />
          <Route path="messaging" element={<PlaceholderPage title="Secure Messaging" />} />
          <Route path="transparency" element={<PlaceholderPage title="Public Transparency Logs" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;