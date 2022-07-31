
import './App.css';
import { Routes, Route } from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import { About } from './Pages/About';
import { PersonalInfo } from './Components/PersonalInfo';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/PersonalInfo' element={<PersonalInfo/>}/>
          {/* <Home></Home> */}
          {/* <p></p> */}
      </Routes>
    </div>
  );
}

export default App;
