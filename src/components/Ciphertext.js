import React, {useState, useEffect} from 'react'

function Ciphertext(props) {
  const [changedText, setChangedText] = useState('');
  //const [changedText, setChangedText] = useState('');

  useEffect(()=>{
    const encryptText = (plainText, shift) => {
      let cipherArr = []
      let cipherLetter
  
      plainText.split("").map(letter => {
        let code = letter.charCodeAt(letter)
        if(letter === " ") {
          return cipherArr.push(letter)
        }
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65)
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97)
        }
        return cipherArr.push(cipherLetter)
      })
      return cipherArr.join("")
    }

    if(props.plainText.length > 0) {
      console.log(props.plainText, 'shift', props.shift)
      let data= encryptText(props.plainText,parseInt(props.shift));
      setChangedText(data);
      console.log(data, 'cipher')
    }

  }, [ props.plainText]);

  const getCipherText =(e) => {
    console.log(e.target.value,'textArea');
     props.cipherTextData(e.target.value);
    setChangedText(e.target.value)
  }

  return (
    <div className="card w-18 ml-20">
      <h3 className="card-text text-center my-0 py-20">Ciphertext</h3>
      <textarea
        name="ciphertext"
        rows={6}
        cols={30}
        placeholder="Enter Ciphertext"
        className="mx-25 mb-25"
        data-testid="cipher-text"
        value={changedText}
        onChange={(e)=>getCipherText(e)}
      />
    </div>
  )
}

export default Ciphertext
