import Intro from './slides/Intro/Intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Style.css'
import MaterialUi from './slides/MaterialUi/MaterialUi';
import AntDesig from './slides/AntDesig/AntDesig';

function App() {
  return (
    <div>
      <Intro />
      <MaterialUi/>
      <AntDesig/>

    </div>
  );
}

export default App;
