import { Routes, Route } from 'react-router-dom';
import Header from './Header.tsx';
import Absences from './Absences.tsx';
import Dashboard from './Dashboard.tsx';
import Conges from './Conges.tsx';
import './App.css';

function App() {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-[#f4f7fa]">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/absences" element={<Absences />} />
          <Route path="/conges" element={<Conges />} />
        </Routes>
      </main>

      <footer className="bg-white py-4 border-t border-gray-200 text-center text-[#6a6a6a]">
        © {new Date().getFullYear()} Système de Gestion RH - Confidentialité & Sécurité
      </footer>
    </div>
  );
}

export default App;
