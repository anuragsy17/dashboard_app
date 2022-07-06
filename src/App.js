import logo from './logo.svg';
import './Sass/main.css';
import Dashboard from './component/dashboard';
import Header from './component/header';
import Home from './component/home';
import Email from './component/email';
import { Routes, Route } from 'react-router-dom'
import TeamTask from './component/teamTask';

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/task' element={<Dashboard/>}/>
        <Route path='/email' element={<Email/>}/>
      </Routes>
    </>


  );
}

export default App;
