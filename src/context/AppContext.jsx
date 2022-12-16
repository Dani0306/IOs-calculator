import { createContext, useContext, useState } from 'react'


const Context = createContext({
    firstValue: "", 
    setFirstValue: () => {}, 
    secondValue: "", 
    setSecondValue: () => {}, 
    result: "", 
    setResult: () => {}, 
    sendNumber: () => {}, 
    showedNumber: "", 
    setShowedNumber: () => {}, 
    currentOperation: "", 
    setCurrentOperation: () => {}, 
    sendOperation: () => {}, 
    getResult: () => {}, 
    deleteAll: () => {}
})


export default function AppContextProvider ({ children }){

    const [showedNumber, setShowedNumber] = useState("0");
    const [currentOperation, setCurrentOperation] = useState("");

    const [firstValue, setFirstValue] = useState("");

    const [secondValue, setSecondValue] = useState("");
    const [result, setResult] = useState("");


    const sendNumber = (number) => {

        if(result && showedNumber === result){
            deleteAll();
            setShowedNumber(firstValue + number.toString())
            setFirstValue(firstValue + number.toString())
        }

        if(result){
            setShowedNumber(secondValue + number.toString())
            setSecondValue(secondValue + number.toString());
        }

        if(!currentOperation && firstValue.length <= 8){
            setShowedNumber(firstValue + number.toString())
            setFirstValue(firstValue + number.toString())
        }

        if(currentOperation && secondValue.length <= 8){
            setShowedNumber(secondValue + number.toString())
            setSecondValue(secondValue + number.toString());
        }

    }



    const sendOperation = (operation) => {

        if(operation === "."){
            if(currentOperation){
                setShowedNumber(secondValue + operation)
                setSecondValue((Number(secondValue) / 10).toString())
            } else {
                setShowedNumber(firstValue + operation)
                setFirstValue((Number(firstValue) / 10).toString())
            }
        }

        if(showedNumber && operation !== "."){
            setCurrentOperation(operation)
            setShowedNumber("");
        }

        if(result && operation !== "."){
            setFirstValue(result);
            setShowedNumber("");
            setSecondValue("");
        }

    }

    const deleteAll = () => {
        setShowedNumber("0");
        setResult("");
        setFirstValue("");
        setSecondValue("");
        setCurrentOperation("");
    }

    const getResult = () => {
        switch (currentOperation){
            case "+": 
                setShowedNumber((Number(firstValue) + Number(secondValue)).toString());
                setResult((Number(firstValue) + Number(secondValue)).toString());
                break;
            case "-": 
                setShowedNumber((Number(firstValue) - Number(secondValue)).toString());
                setResult((Number(firstValue) - Number(secondValue)).toString());
                break;
            case "x": 
                setShowedNumber((Number(firstValue) * Number(secondValue)).toString());
                setResult((Number(firstValue) * Number(secondValue)).toString());
                break;
            case "/": 
                setShowedNumber((Number(firstValue) / Number(secondValue)).toString());
                setResult((Number(firstValue) / Number(secondValue)).toString());
                break;
        }

    }


    const value = {
        firstValue, setFirstValue, secondValue, setSecondValue, result, setResult, sendNumber, sendOperation, currentOperation, setCurrentOperation, showedNumber,setShowedNumber, getResult, deleteAll
    }


    return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
    )
}


export const useAppContext = () => useContext(Context);