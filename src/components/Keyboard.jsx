import React from 'react'
import { useAppContext } from '../context/AppContext';

const operations = ["+", "-", ".", "/", "x", "%", "+/-"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


const Keyboard = () => {

  const { sendNumber, sendOperation, getResult, deleteAll } = useAppContext();

  const handleClick = e => {
    const { target: { id } } = e;

    if(id === "AC") {
      deleteAll();
    }

    if(numbers.includes(Number(id))){
      sendNumber(Number(id))
    }

    else if(operations.includes(id)){
      sendOperation(id);
    }

    else {
      getResult()
    }

  }

  return (
    <div className='w-full h-[80%] pt-6 grid grid-cols-4 grid-rows-5 gap-4 place-items-center place-content-center'>
        <button id="AC" onClick={handleClick} className='calc-button bg-[#979A9A] text-black'>AC</button>
        <button id="+/-" onClick={handleClick} className='calc-button bg-[#979A9A] text-black'>+/-</button>
        <button id="%" onClick={handleClick} className='calc-button bg-[#979A9A] text-black'>%</button>
        <button id="/" onClick={handleClick} className='calc-button bg-[#FF9500]'>/</button>
        <button id="7" onClick={handleClick} className='calc-button'>7</button>
        <button id="8" onClick={handleClick} className='calc-button'>8</button>
        <button id="9" onClick={handleClick} className='calc-button'>9</button>
        <button id="x" onClick={handleClick} className='calc-button bg-[#FF9500]'>x</button>
        <button id="4" onClick={handleClick} className='calc-button'>4</button>
        <button id="5" onClick={handleClick} className='calc-button'>5</button>
        <button id="6" onClick={handleClick} className='calc-button'>6</button>
        <button id="-" onClick={handleClick} className='calc-button bg-[#FF9500]'>-</button>
        <button id="1" onClick={handleClick} className='calc-button'>1</button>
        <button id="2" onClick={handleClick} className='calc-button'>2</button>
        <button id="3" onClick={handleClick} className='calc-button'>3</button>
        <button id="+" onClick={handleClick} className='calc-button bg-[#FF9500]'>+</button>
        <button id="0" onClick={handleClick} className='calc-button col-span-2 justify-start pl-6'>0</button>
        <button id="." onClick={handleClick} className='calc-button'>.</button>
        <button id="=" onClick={handleClick} className='calc-button bg-[#FF9500]'>=</button>
    </div>
  )
}

export default Keyboard