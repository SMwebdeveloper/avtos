import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Chevrolet from './pages/Chevrolet';
import Home from './pages/Home';
import Model from './pages/Model';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chevrolet' element={<Chevrolet/>}/>
          <Route path='/model' element={<Model/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
