import React, {useState} from 'react'
import { Ciphertext, Plaintext, Shift } from './components'
import './App.css'
import 'h8k-components'

const title = "Caesar's Cipher";

function App() {
  const [value, setValue] = useState(0);
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');

  const getShiftKey =(val) => {
    console.log(val);
    setValue(val);
  }

  const getPlainText =(val) => {
    console.log(val, 'value from plaintext');
    setPlainText(val);
  }

  const getCipherText =(val) => {
    console.log(val, 'value from cipherText');
    setCipherText(val);
  }

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <Shift onSelectShift={(text) =>getShiftKey(text)}/>
      <div className="layout-row justify-content-center mt-40">
        <Plaintext shift={value} plainTextData={(text)=>getPlainText(text)} cipherText={cipherText}/>
        <Ciphertext shift={value} plainText={plainText} cipherTextData={(text)=>getCipherText(text)}/> 
      </div> 
    </div>
  )
}

export default App