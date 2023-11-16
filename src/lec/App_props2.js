import { useState } from 'react';
import './App.css';

function App() {
  const [num,setNum] = useState(0)
  const [data,setData] = useState([
    "1Lorem ipsum dolor sit amet.",
    "2Voluptas aut accusantium cupiditate nisi?",
    "3Sed dicta debitis nostrum id?"
  ])
  const [vModal,setVModal] = useState(false)
  
  const openList = (i)=>{
    setNum(i)
    setVModal(true)
  }

  const handleClose = () => {
    setVModal(false)
  }
  
  return (
    <div className='App'>
      {num}
      <ul className='lists'>
        {
          data.map(function(item, i) {
            return(
              <>
                <li onClick={()=>{openList(i)}}>
                  {item}
                </li>   
              </>
              )
          })
        }
      </ul>
      <button onClick={()=>{setVModal(!vModal)}}>보기/안보기</button>
      
      {
        vModal == true ? <Modal rData = {data} rNum = {num} onClose={handleClose}/> : null
      }
      
    </div>
  )
}
// function Modal(props) {
//   return (
//     <div className='modal'>
//       <h3>안녕하세요</h3>
//       <p>{props.rData[props.rNum]}</p>
//       <div className='btnWrap'>
//         <button>닫기</button>
//       </div>
//     </div>
//   )
// }

function Modal({rData, rNum, onClose}) {
  return (
    <div className='modal'>
      <div className="modalBody">
        <h3>안녕하세요</h3>
        <p>{rData[rNum]}</p>
      </div>
      <div className='btnWrap'>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  )
}

export default App;