
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </>

  );
}

export default App;
