import React from 'react'
import Screen from './components/Screen'
import Keyboard from './components/Keyboard'

const App = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#B3B6B7]'>
      <div className='w-[390px] lg:w-[450px] h-[700px] bg-black rounded-xl flex items-center flex-col p-5'>
        <Screen />
        <Keyboard />
      </div>
    </div>
  )
}

export default App

