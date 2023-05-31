import { getDefaultNormalizer } from '@testing-library/react';
import React , {useState} from 'react';
const shiftNum = ['Enter shift amount',1,2,3,4,5,6,7,8,9,10];



function Shift(props) { 
  const [defaultTextValue, setDefaultTextValue ] = useState('Enter shift amount');

  const getData =(e) => {
    props.onSelectShift(e.target.value);
    setDefaultTextValue(e.target.value);
  }

  return (
    <div className="layout-row justify-content-center mt-100">
      <select data-testid="select" onChange={(e) => getData(e)} >
        {shiftNum.map((num)=>{
          return (
            <option key={num} value={num} >{num}</option>
          )
        })}
      </select>

      {/* <select data-testid="select">
        <option value="" disabled>Enter shift amount</option>
      </select> */}
    </div>
  );
}

export default Shift