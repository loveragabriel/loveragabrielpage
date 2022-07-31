
import './App.css';
import { Routes, Route } from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import { About } from './Pages/About';
import { PersonalInfo } from './Pages/PersonalInfo';
import { Formpage } from './Pages/Formpage';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/PersonalInfo' element={<PersonalInfo/>}/>
          <Route path='/Formpage' element={<Formpage/>}/>
          {/* <p></p> */}
      </Routes>
    </div>
  );
}

export default App;
