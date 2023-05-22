
import '../src/css/natour.css';
import LeftSide from './leftSide/LeftSide';
import RightSide from './rightSide/RightSide';

function App() {
  return (
    <div style={{display:"flex",width:"100vw",height:"100vh"}} className="App">
     {/* <LeftSide/> */}
     <RightSide/>
    </div>
  );
}

export default App;
