import CalculatorButton from "../components/Calculator"
import TestBox from "../components/TestBox"

export default function final() {
    const container = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const text = {
        color: "white"
    }

    const boxCard = {
        border: "3px solid white",
        borderRadius: "10px",
        width: "20rem",
        height: "20rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2em",
        
    }

    return (
        <div style={container}>
            <h1>La última página está aquí, es esta ooooh</h1>
            <h2 style={text}>The last try, Randy Bobandy</h2>
            <div style={boxCard}>
                
                <h4>Hellooooo, my names is.... I dont remmeber my name. No sé cuantas veces he estado aqui, pero
                    deberia irme ya....
                </h4>
            </div>
            <TestBox />
        </div>
    )
}
