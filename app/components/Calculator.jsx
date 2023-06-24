'use client'

import styles from "../../styles/Calculator.module.css"
import { useState } from "react";

export default function CalculatorButton() {
    const [inputValue, setInputValue] = useState("");

    const handleNumberClick = (number) => {
        if (number === "C") {
            setInputValue("")
        } else {
            setInputValue(inputValue + number);
        }
    };

    const handleCalculate = () => {
        try {
            const calculatedResult = eval(inputValue);
            setInputValue(calculatedResult);
        } catch (error) {
            setResult("Error");
        }
    };

    const handleKeyDown = (event) => {
        const { key } = event;
    
        // Accept numbers 0-9
        if (/[0-9]/.test(key)) {
            setInputValue(inputValue + key);
        }
    
        // Accept mathematical operators: *, -, +, /
        if (/[*/+-]/.test(key)) {
            setInputValue(inputValue + key);
        }
        if (key === 'Enter') {
            handleCalculate();
        }
        if (key === 'Delete' || key === 'Backspace') {
            setInputValue(inputValue.toString().slice(0, -1));
        }
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                
                    <div className={styles.miniContainer}>
                        <div className={styles.inputContainer}>
                            <input 
                                className={styles.input} 
                                type="text" 
                                onKeyDown={handleKeyDown}
                                value={inputValue} 
                                />
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button} onClick={() => handleNumberClick("1")}>1</button>
                            <button className={styles.button} onClick={() => handleNumberClick("2")}>2</button>
                            <button className={styles.button} onClick={() => handleNumberClick("3")}>3</button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button} onClick={() => handleNumberClick("4")}>4</button>
                            <button className={styles.button} onClick={() => handleNumberClick("5")}>5</button>
                            <button className={styles.button} onClick={() => handleNumberClick("6")}>6</button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button} onClick={() => handleNumberClick("7")}>7</button>
                            <button className={styles.button} onClick={() => handleNumberClick("8")}>8</button>
                            <button className={styles.button} onClick={() => handleNumberClick("9")}>9</button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button} onClick={() => handleNumberClick("0")}>0</button>
                            <button className={styles.button} onClick={() => handleNumberClick("+")}>+</button>
                            <button className={styles.button} onClick={() => handleNumberClick("-")}>-</button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button} onClick={() => handleNumberClick("*")}>x</button>
                            <button className={styles.button} onClick={() => handleNumberClick("/")}>/</button>
                            <button className={styles.button} onClick={() => handleNumberClick("C")}>C</button>
                        </div>
                        <button className={styles.inputContainer}  onClick={handleCalculate}>=</button>
                    </div>
                </div>
            </div>
    )
}
