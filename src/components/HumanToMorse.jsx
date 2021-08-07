import React, { useState } from 'react';

const HumanToMorse = ({ addText, morsetohuman }) => {
    console.log(morsetohuman)

    const [texto, setTexto] = useState([])

    const handleChange = (e) => {
        setTexto([e.target.value])
        //addText(texto)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addText(texto)
    }

    const handleClean = (e) => {
        e.preventDefault()
        addText("")
    }

    return (
        <div>
            {
                !morsetohuman ?
                    (<>
                        <h1 style={{ textAlign: "center" }}>Human</h1>
                        <form>
                            <label>Human Text</label>
                            <textarea style={{ fontSize: "25px", resize: "none", height: "200px" }} onChange={handleChange} />
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <button onClick={handleSubmit}>Enviar</button>
                                <button onClick={handleClean}>Limpiar</button>
                            </div>
                        </form></>
                    )
                    :
                    (
                        <>
                            <h1 style={{ textAlign: "center" }}>Morse</h1>
                            <form>
                                <label>Morse Text</label>
                                <textarea style={{ fontSize: "25px", resize: "none", height: "200px" }} onChange={handleChange} />
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <button onClick={handleSubmit}>Enviar</button>
                                    <button onClick={handleClean}>Limpiar</button>
                                </div>

                            </form></>
                    )
            }
        </div>
    )
}

export default HumanToMorse;