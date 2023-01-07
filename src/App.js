import './App.css';
import Navbar from './Component/Navbar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
function App() {
  const [isToggled,setToggled] = useState(false)
  return (
    <div className="App">
     <div className="menu">
     <MenuOutlinedIcon className='icon' onClick={()=>setToggled(!isToggled)} style={{ fontSize: '30px'} }/>
      {
        isToggled && <Navbar/>
      }
     </div>
    </div>
  );
}

export default App;
