import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Index from './pages/Index';
import LogIn from './pages/LogIn';
import PilihMakanan from './pages/PilihMakanan';
import SignUp from './pages/SingUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'element={<Index/>} />
        <Route path='/SignUp'element={<SignUp/>} />
        <Route path='/LogIn'element={<LogIn/>} />
        <Route path='/Home'element={<HomePage/>} />
        <Route path='/pilihMakanan'element={<PilihMakanan/>} />
      </Routes>
    </>
  );
}

export default App;
