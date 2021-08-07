import React, { useState } from 'react'

const MorseToHuman = ({ valuetext, datacode, morsetohuman }) => {

    let letras = valuetext.toString().toUpperCase().split('')

    let morse = []
    console.log(valuetext)

    let codigo = valuetext.toString().split(" ")
    console.log(codigo)
    let human = []

    return (
        <div>
            {
                !morsetohuman ?
                    (
                        <>
                            <h1 style={{ textAlign: "center" }}>Morse</h1>
                            <form>
                                <label>Morse Text</label>
                                {
                                    letras.map((dato) => {
                                        switch (dato) {
                                            case ("A"):
                                                morse.push((datacode.find(element => element.character === "A")).code)
                                                //console.log((datacode.find(element => element.character === "A")).code)

                                                break;

                                            case "B":
                                                morse.push((datacode.find(element => element.character === "B")).code)
                                                break;

                                            case "C":
                                                morse.push((datacode.find(element => element.character === "C")).code)
                                                break;

                                            case "D":
                                                morse.push((datacode.find(element => element.character === "D")).code)
                                                break;

                                            case "E":
                                                morse.push((datacode.find(element => element.character === "E")).code)
                                                break;

                                            case "F":
                                                morse.push((datacode.find(element => element.character === "F")).code)
                                                break;

                                            case "G":
                                                morse.push((datacode.find(element => element.character === "G")).code)
                                                break;

                                            case "H":
                                                morse.push((datacode.find(element => element.character === "H")).code)
                                                break;

                                            case "I":
                                                morse.push((datacode.find(element => element.character === "I")).code)
                                                break;

                                            case "J":
                                                morse.push((datacode.find(element => element.character === "J")).code)
                                                break;

                                            case "K":
                                                morse.push((datacode.find(element => element.character === "K")).code)
                                                break;

                                            case "L":
                                                morse.push((datacode.find(element => element.character === "L")).code)
                                                break;

                                            case "M":
                                                morse.push((datacode.find(element => element.character === "M")).code)
                                                break;

                                            case "N":
                                                morse.push((datacode.find(element => element.character === "N")).code)
                                                break;

                                            case "O":
                                                morse.push((datacode.find(element => element.character === "O")).code)
                                                break;

                                            case "P":
                                                morse.push((datacode.find(element => element.character === "P")).code)
                                                break;

                                            case "Q":
                                                morse.push((datacode.find(element => element.character === "Q")).code)
                                                break;

                                            case "R":
                                                morse.push((datacode.find(element => element.character === "R")).code)
                                                break;

                                            case "S":
                                                morse.push((datacode.find(element => element.character === "S")).code)
                                                break;

                                            case "T":
                                                morse.push((datacode.find(element => element.character === "T")).code)
                                                break;

                                            case "U":
                                                morse.push((datacode.find(element => element.character === "U")).code)
                                                break;

                                            case "V":
                                                morse.push((datacode.find(element => element.character === "V")).code)
                                                break;

                                            case "W":
                                                morse.push((datacode.find(element => element.character === "W")).code)
                                                break;

                                            case "X":
                                                morse.push((datacode.find(element => element.character === "X")).code)
                                                break;

                                            case "Y":
                                                morse.push((datacode.find(element => element.character === "Y")).code)
                                                break;

                                            case "Z":
                                                morse.push((datacode.find(element => element.character === "Z")).code)
                                                break;

                                            case "1":
                                                morse.push((datacode.find(element => element.character === "1")).code)
                                                break;

                                            case "2":
                                                morse.push((datacode.find(element => element.character === "2")).code)
                                                break;

                                            case "3":
                                                morse.push((datacode.find(element => element.character === "3")).code)
                                                break;

                                            case "4":
                                                morse.push((datacode.find(element => element.character === "4")).code)
                                                break;

                                            case "5":
                                                morse.push((datacode.find(element => element.character === "5")).code)
                                                break;

                                            case "6":
                                                morse.push((datacode.find(element => element.character === "6")).code)
                                                break;

                                            case "7":
                                                morse.push((datacode.find(element => element.character === "7")).code)
                                                break;

                                            case "8":
                                                morse.push((datacode.find(element => element.character === "8")).code)
                                                break;

                                            case "9":
                                                morse.push((datacode.find(element => element.character === "9")).code)
                                                break;

                                            case "0":
                                                morse.push((datacode.find(element => element.character === "0")).code)
                                                break;

                                            case ".":
                                                morse.push((datacode.find(element => element.character === ".")).code)
                                                break;

                                            case ",":
                                                morse.push((datacode.find(element => element.character === ",")).code)
                                                break;

                                            case "?":
                                                morse.push((datacode.find(element => element.character === "?")).code)
                                                break;

                                            case "'":
                                                morse.push((datacode.find(element => element.character === "'")).code)
                                                break;

                                            case "!":
                                                morse.push((datacode.find(element => element.character === "!")).code)
                                                break;

                                            case "/":
                                                morse.push((datacode.find(element => element.character === "/")).code)
                                                break;

                                            case "(":
                                                morse.push((datacode.find(element => element.character === "(")).code)
                                                break;

                                            case ")":
                                                morse.push((datacode.find(element => element.character === ")")).code)
                                                break;

                                            case "&":
                                                morse.push((datacode.find(element => element.character === "&")).code)
                                                break;

                                            case ":":
                                                morse.push((datacode.find(element => element.character === ":")).code)
                                                break;

                                            case ";":
                                                morse.push((datacode.find(element => element.character === ";")).code)
                                                break;

                                            case "=":
                                                morse.push((datacode.find(element => element.character === "=")).code)
                                                break;

                                            case "-":
                                                morse.push((datacode.find(element => element.character === "-")).code)
                                                break;

                                            case "_":
                                                morse.push((datacode.find(element => element.character === "_")).code)
                                                break;

                                            case "$":
                                                morse.push((datacode.find(element => element.character === "$")).code)
                                                break;

                                            case "@":
                                                morse.push((datacode.find(element => element.character === "@")).code)
                                                break;

                                            case " ":
                                                morse.push((datacode.find(element => element.character === " ")).code)
                                                break;

                                            default:
                                                break;
                                        }
                                    }
                                    )
                                }
                                <textarea style={{ fontSize: "25px", resize: "none", height: "200px" }} value={morse.join(" ")} disabled />
                            </form>
                        </>
                    )
                    :
                    (
                        <>
                            <h1 style={{ textAlign: "center" }}>Human</h1>
                            <form>
                                <label>Human Text</label>
                                {
                                    codigo.map((dato) => {
                                        switch (dato) {
                                            case (".-"):
                                                human.push((datacode.find(element => element.code === ".-")).character)
                                                break;
                                            //console.log((datacode.find(element => element.character === "A")).code)

                                            case "-...":
                                                human.push((datacode.find(element => element.code === "-...")).character)
                                                break;

                                            case "-.-.":
                                                human.push((datacode.find(element => element.code === "-.-.")).character)
                                                break;

                                            case "-..":
                                                human.push((datacode.find(element => element.code === "-..")).character)
                                                break;

                                            case ".":
                                                human.push((datacode.find(element => element.code === ".")).character)
                                                break;

                                            case "..-.":
                                                human.push((datacode.find(element => element.code === "..-.")).character)
                                                break;

                                            case "--.":
                                                human.push((datacode.find(element => element.code === "--.")).character)
                                                break;

                                            case "....":
                                                human.push((datacode.find(element => element.code === "....")).character)
                                                break;

                                            case "..":
                                                human.push((datacode.find(element => element.code === "..")).character)
                                                break;

                                            case ".---":
                                                human.push((datacode.find(element => element.code === ".---")).character)
                                                break;

                                            case "-.-":
                                                human.push((datacode.find(element => element.code === "-.-")).character)
                                                break;

                                            case ".-..":
                                                human.push((datacode.find(element => element.code === ".-..")).character)
                                                break;

                                            case "--":
                                                human.push((datacode.find(element => element.code === "--")).character)
                                                break;

                                            case "-.":
                                                human.push((datacode.find(element => element.code === "-.")).character)
                                                break;

                                            case "---":
                                                human.push((datacode.find(element => element.code === "---")).character)
                                                break;

                                            case ".--.":
                                                human.push((datacode.find(element => element.code === ".--.")).character)
                                                break;

                                            case "--.-":
                                                human.push((datacode.find(element => element.code === "--.-")).character)
                                                break;

                                            case ".-.":
                                                human.push((datacode.find(element => element.code === ".-.")).character)
                                                break;

                                            case "...":
                                                human.push((datacode.find(element => element.code === "...")).character)
                                                break;

                                            case "-":
                                                human.push((datacode.find(element => element.code === "-")).character)
                                                break;

                                            case "..-":
                                                human.push((datacode.find(element => element.code === "..-")).character)
                                                break;

                                            case "...-":
                                                human.push((datacode.find(element => element.code === "...-")).character)
                                                break;

                                            case ".--":
                                                human.push((datacode.find(element => element.code === ".--")).character)
                                                break;

                                            case "-..-":
                                                human.push((datacode.find(element => element.code === "-..-")).character)
                                                break;

                                            case "-.--":
                                                human.push((datacode.find(element => element.code === "-.--")).character)
                                                break;

                                            case "--..":
                                                human.push((datacode.find(element => element.code === "--..")).character)
                                                break;

                                            case ".----":
                                                human.push((datacode.find(element => element.code === ".----")).character)
                                                break;

                                            case "..---":
                                                human.push((datacode.find(element => element.code === "..---")).character)
                                                break;

                                            case "...--":
                                                human.push((datacode.find(element => element.code === "...--")).character)
                                                break;

                                            case "....-":
                                                human.push((datacode.find(element => element.code === "....-")).character)
                                                break;

                                            case ".....":
                                                human.push((datacode.find(element => element.code === ".....")).character)
                                                break;

                                            case "-....":
                                                human.push((datacode.find(element => element.code === "-....")).character)
                                                break;

                                            case "--...":
                                                human.push((datacode.find(element => element.code === "--...")).character)
                                                break;

                                            case "---..":
                                                human.push((datacode.find(element => element.code === "---..")).character)
                                                break;

                                            case "----.":
                                                human.push((datacode.find(element => element.code === "----.")).character)
                                                break;

                                            case "-----":
                                                human.push((datacode.find(element => element.code === "-----")).character)
                                                break;

                                            case "·-·-·-":
                                                human.push((datacode.find(element => element.code === "·-·-·-")).character)
                                                break;

                                            case "--··--":
                                                human.push((datacode.find(element => element.code === "--··--")).character)
                                                break;

                                            case "··--··":
                                                human.push((datacode.find(element => element.code === "··--··")).character)
                                                break;

                                            case "·----·":
                                                human.push((datacode.find(element => element.code === "·----·")).character)
                                                break;

                                            case "-·-·--":
                                                human.push((datacode.find(element => element.code === "-·-·--")).character)
                                                break;

                                            case "-··-·":
                                                human.push((datacode.find(element => element.code === "-··-·")).character)
                                                break;

                                            case "-·--·":
                                                human.push((datacode.find(element => element.code === "-·--·")).character)
                                                break;

                                            case "-·--·-":
                                                human.push((datacode.find(element => element.code === "-·--·-")).character)
                                                break;

                                            case "·-···":
                                                human.push((datacode.find(element => element.code === "·-···")).character)
                                                break;

                                            case "---···":
                                                human.push((datacode.find(element => element.code === "---···")).character)
                                                break;

                                            case "-·-·-·":
                                                human.push((datacode.find(element => element.code === "-·-·-·")).character)
                                                break;

                                            case "-···-":
                                                human.push((datacode.find(element => element.code === "-···-")).character)
                                                break;

                                            case "-····-":
                                                human.push((datacode.find(element => element.code === "-····-")).character)
                                                break;

                                            case "··--·-":
                                                human.push((datacode.find(element => element.code === "··--·-")).character)
                                                break;

                                            case "···-··-":
                                                human.push((datacode.find(element => element.code === "···-··-")).character)
                                                break;

                                            case "·--·-·":
                                                human.push((datacode.find(element => element.code === "·--·-·")).character)
                                                break;

                                            case "":
                                                human.push((datacode.find(element => element.code === "")).character)
                                                break;

                                            default:
                                                break;
                                        }
                                    }
                                    )
                                }
                                <textarea style={{ fontSize: "25px", resize: "none", height: "200px" }} value={human.join(" ").toLowerCase()} disabled />
                            </form>
                        </>
                    )
            }
        </div>
    )
}

export default MorseToHuman;