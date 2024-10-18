
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home'
import { SayName } from './Context/DataContext';
import About from './About';




function App() {
  return (
    <div className="App">
      <SayName>
      <Header/>    
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='about' element={<About/>}></Route>


</Routes>
      </SayName>


       
       
       
    </div>
  );
}

export default App;
