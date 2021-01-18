import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Number from '../components/Number'

const MegaSenaPage: React.FC = () => {
  const [values, setValues] = useState([])
  const [numbers, setNumbers] = useState([])

  const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.ceil(Math.random() * (max - min)) + min 
  }

  const handleGamble = (loop, min, max) =>{
    const aux = []

    while (aux.length < loop) {
      const num = getRandomArbitrary(min, max)
      if (aux.indexOf(num) === -1) {
        aux.push(num)
      }
    }
    setNumbers(aux.sort((a, b) => a-b))
  }

  useEffect(() => {
    handleGamble(6, 0, 60)
  }, [])

  useEffect(() => {
    const items = []
    for (let index = 1; index <= 60; index++) {
      items.push(index)
    }
    setValues(items)
  }, [])

  return (
    <>
      <div className="flex flex-col items-center">
        <BackButton />
        <motion.img
          src="/img/mega-sena.svg"
          className="h-24 md:h-36"
          layoutId="mega-sena-logo"
        />
        <div className="w-full flex justify-end">
          <button onClick={() => handleGamble(6,0,60)} className="bg-green-500 px-5 py-3 rounded-md text-white hover:text-green-700 hover:bg-green-400 transition active:bg-blue-900">Novo jogo</button>
        </div>
        <div className="w-full flex border-2 p-1 border-green-400 grid grid-cols-10 gap-1 mt-10 justify-center">
          {values.map(value => (
            <Number
              key={value}
              num={value}
              color={
                numbers.indexOf(value) > -1 ? 'bg-green-500' : 'bg-gray-200'
              }
              textColor={numbers.indexOf(value) > -1 ? 'text-white' : ''}
            />
          ))}
        </div>
        <div className="flex w-full flex-row justify-end">{numbers.map(num => <div key={num} className="m-1 h-6 w-8 pl-2 pr-2 text-center m-1 h-6 w-8 pl-2 pr-2 text-center text-white bg-green-500 rounded-xl">{num < 10 ? `0${num}` : num > 99 ? '00' : num }</div>)}</div>
      </div>
    </>
  )
}

export default MegaSenaPage
