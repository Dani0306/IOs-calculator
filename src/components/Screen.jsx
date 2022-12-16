import React from 'react'
import { useAppContext } from '../context/AppContext'

const Screen = () => {

  const { showedNumber } = useAppContext();

  return (
    <div className='w-full h-[20%] max-w-full break-words flex items-end justify-end text-6xl text-[#D4D4D2]'>
      { showedNumber }
    </div>
  )
}

export default Screen