import { useState } from "react";
import HumanToMorse from "./components/HumanToMorse";
import MorseToHuman from "./components/MorseToHuman";
import datacode from './data.json'

function App() {

  const [valuetext, setValuetext] = useState([])

  const [morsetohuman, setMorseToHuman] = useState(false)

  //Agregar valores al textarea de la derecha
  const addText = (text) => {
    //console.log(text)
    setValuetext(text)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMorseToHuman(!morsetohuman)
  }

  return (
    <div className="container">
      {
        !morsetohuman ?
          (<>
            <h1 style={{ textAlign: "center" }}>Translator <br /> Human to Morse <br /> <button onClick={handleSubmit}>Invertir</button></h1>
            <div className="flex-row">
              <div className="flex-large">
                <HumanToMorse addText={addText} morsetohuman={morsetohuman} />
              </div>
              <div className="flex-large">
                <MorseToHuman valuetext={valuetext} datacode={datacode} morsetohuman={morsetohuman} />
              </div>
            </div></>
          )
          :
          (<>
            <h1 style={{ textAlign: "center" }}>Translator <br /> Morse to Human <br /> <button onClick={handleSubmit}>Invertir</button></h1>

            <div className="flex-row">
              <div className="flex-large">
                <HumanToMorse addText={addText} morsetohuman={morsetohuman} />
              </div>
              <div className="flex-large">
                <MorseToHuman valuetext={valuetext} datacode={datacode} morsetohuman={morsetohuman}/>
              </div>
            </div></>
          )
      }

    </div>
  );
}

export default App;
