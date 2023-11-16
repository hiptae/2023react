import { useState } from 'react';
import './App.css';

import ModalView from '../components/ModalView.jsx';
function App() {
  const [num,setNum] =useState(0)
  const [data,setData] = useState([
    "안녕1",
    "안녕2",
    "안녕3"
  ])
  // function handlerTab() {
  //   setNum(1);
  // }

  return (
    <div className="App">
      {/* <Modal/> */}
      {num}

      <div className='tab'>
        <ul>
          <li onClick={()=>{setNum(0)}} className={`${num==0 ? "active" : ""}`}>tab1</li>
          <li onClick={()=>{setNum(1)}} className={`${num==1 ? "active" : ""}`}>tab2</li>
          <li onClick={()=>{setNum(2)}} className={`${num==2 ? "active" : ""}`}>tab3</li>
        </ul>
      </div>
      <div style={{margin: "0 0 10px 0"}}>
        {data[num]}
      </div>
      <hr />

      <ul className='lists'>
      {
        data.map(function(item, i) {
          return(
            <>
            <li onClick={()=>{setNum(i)}}>
              {item}
            </li>
            </>
          )
        })
      }
      </ul>
      <Modal rData={data} rNum ={num}/>
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className='modal'>
        <h3>subject1</h3>
        <p>{props.rData[props.rNum]}</p>
      </div>
    </>
  )
}


export default App;
