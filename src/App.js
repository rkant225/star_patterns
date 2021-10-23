import './App.css';
import RectangularPattern from './Components/RectangularPattern';
import TriangularPattern from './Components/TriangularPattern';
import HollowRectangularPattern from './Components/HollowRectangularPattern';
import HollowTriangularPattern from './Components/HollowTriangularPattern';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{display : 'flex', flexWrap : 'wrap', justifyContent : 'space-evenly'}}>
      <RectangularPattern/>
      <HollowRectangularPattern/>
      <TriangularPattern/>
      <HollowTriangularPattern/>

      <Footer/>
    </div>
  );
}

export default App;
