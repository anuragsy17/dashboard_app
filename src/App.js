import logo from './logo.svg';
import './Sass/main.css';
import Dashboard from './component/dashboard';
import Email from './component/email';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Dashboard />
      <Routes>
        <Route path="/email" element={<Email />} />
      </Routes>
    </>


  );
}

export default App;
