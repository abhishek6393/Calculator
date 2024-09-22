

import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Input';
import Button from './Button';
import './button.css'
import { useState } from 'react';


function App() {

  let[val,setVal]=useState("");


  return (

 <nav className='outer'>
  <div className='home'>

<Input x={val}></Input>


<Button newval={setVal} data={val}></Button>

</div>
 
 </nav>
    
  )
}

export default App
