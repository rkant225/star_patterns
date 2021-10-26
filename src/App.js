import './App.css';
import RectangularPattern from './Components/RectangularPattern';
import TriangularPattern from './Components/TriangularPattern';
import HollowRectangularPattern from './Components/HollowRectangularPattern';
import HollowTriangularPattern from './Components/HollowTriangularPattern';
import Footer from './Components/Footer';
import PyramidPattern from './Components/PyramidPattern';
import Admin from './Components/Users/Admin';
import Manager from './Components/Users/Manager';
import Adviser from './Components/Users/Adviser';

function App() {
  return (
    <div style={{display : 'flex', flexWrap : 'wrap', justifyContent : 'space-evenly'}}>
      {/* <RectangularPattern/>
      <HollowRectangularPattern/>
      <TriangularPattern/>
      <HollowTriangularPattern/>
      <PyramidPattern/> */}


      <Admin/>
      <Manager/>
      <Adviser/>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
