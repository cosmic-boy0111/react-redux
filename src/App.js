import { Minus, Plus } from 'lucide-react';
import './App.css';

import { useSelector , useDispatch } from 'react-redux';
import { _inc , _dec , _contoledInc, _contoledDec } from './store/reducers/incdec';


const product = ({product}) => {
  
  return <>
    <div style={{
      width : '200px',
      borderRadius:'5px',
      padding : '1rem',
    }} >
      {product.name}
    </div>
  </>

}

function App() {

  const number = useSelector(state => state.number);
  const dispatch = useDispatch();



  return (
    <div className="App">
      <header className="App-header">
        <h1>{number}</h1>
        <div style={{
          width : '200px',
          display : 'flex',
          justifyContent : 'space-between',
          alignItems : 'center'
        }} >
          <div style={{
            border : 'none',
            outline : 'none',
            padding : '0 .5rem',
            borderRadius: '5px',
            backgroundColor:'white',
            color : 'black',
          }} onClick={()=>dispatch(_contoledDec(5))} > <Minus /> </div>
          <div style={{
            border : 'none',
            outline : 'none',
            padding : '0 .5rem',
            borderRadius: '5px',
            backgroundColor:'white',
            color : 'black',
          }} onClick={()=>dispatch(_contoledInc(10))} > <Plus /> </div>
        </div>
        <div>
          <div style={{
            marginBottom : '1rem',
            display : 'flex',
            justifyContent : 'space-between',
          }} >
            <input type="text" style={{
              border : 'none',
              outline : 'none',
              backgroundColor:'white'
            }} />
            <div style={{
              border : 'none',
              outline : 'none',
              padding : '0 .5rem',
              borderRadius: '5px',
              backgroundColor:'white',
              color : 'black',
            }} onClick={()=>dispatch(_contoledInc(10))} > <Plus /> 
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
