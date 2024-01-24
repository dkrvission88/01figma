
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Rcreated from './components/Rcreated';
import Blogin from './components/Blogin';


function App() {
  return (
    <>
    <BrowserRouter>
    <Link/>
    <Routes>
       <Route path='/' element={<Blogin/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Rcreated' element={<Rcreated/>}></Route>
      

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
