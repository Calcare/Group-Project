import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Index from './pages/Index';
import LogIn from './pages/LogIn';
import Makanan from './pages/Makanan';
import SignUp from './pages/SingUp';
import TrackCal from './pages/TrackCal';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'element={<Index/>} />
        <Route path='/SignUp'element={<SignUp/>} />
        <Route path='/LogIn'element={<LogIn/>} />
        <Route path='/Home'element={<HomePage/>} />
        <Route path='/TrackCal' element={<TrackCal/>}/>
        <Route path='/Makanan' element={<Makanan/>}/>
      </Routes>
    </>
  );
}

export default App;
