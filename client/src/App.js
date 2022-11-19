import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from '../node_modules/react-router/dist/index';
import { Homepage } from './components/Homepage';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Members } from './components/Members';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="members" element={<Members />} />
    </Routes>
  );
}

export default App;
