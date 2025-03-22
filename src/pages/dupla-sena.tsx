import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Number from '../components/Number'
import type { RandomFunction, GambleFunction } from '../types/lottery'

const DuplaSenaPage: React.FC = () => {
  const [values, setValues] = useState<number[]>([])
  const [numbers, setNumbers] = useState<number[]>([])
  const [numbers2, setNumbers2] = useState<number[]>([])

  const getRandomArbitrary: RandomFunction = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.ceil(Math.random() * (max - min)) + min 
  }

  const handleGamble: GambleFunction = (loop, min, max) => {
    const aux: number[] = []
    const aux2: number[] = []
    
    while (aux.length < loop) {
      const num = getRandomArbitrary(min, max)
      if (aux.indexOf(num) === -1) {
        aux.push(num)
      }
    }
    setNumbers(aux.sort((a, b) => a-b))

    while (aux2.length < loop) {
      const num2 = getRandomArbitrary(min, max)
      if (aux2.indexOf(num2) === -1) {
        aux2.push(num2)
      }
    }
    setNumbers2(aux2.sort((a, b) => a-b))
  }

  useEffect(() => {
    handleGamble(6, 0, 50)
  }, [])

  useEffect(() => {
    const items = []
    for (let index = 1; index <= 50; index++) {
      items.push(index)
    }
    setValues(items)
  }, [])

  return (
    <>
    <div className="flex flex-col items-center">
    <BackButton />
      <motion.img
        src="/img/dupla-sena.svg"
        className="h-24 md:h-36"
        layoutId="dupla-sena-logo"
      />
    </div>
      <div className="w-full flex justify-end">
        <button onClick={() => handleGamble(6,0,50)} className="bg-red-500 px-5 py-3 rounded-md text-white hover:text-red-700 hover:bg-red-400 transition active:bg-blue-900">Novo jogo</button>
      </div>
      <div className="w-full flex border-2 p-1 border-red-400 grid grid-cols-10 gap-1 mt-10 justify-center">
        {values.map(value => (
          <Number
            key={value}
            num={value}
            color={
              numbers.indexOf(value) > -1 ? 'bg-red-500' : 'bg-gray-200'
            }
            textColor={numbers.indexOf(value) > -1 ? 'text-white' : ''}
          />
        ))}
      </div>
      <div className="flex w-full flex-row justify-end">{numbers.map(num => <div key={num} className="m-1 h-6 w-8 pl-2 pr-2 text-center m-1 h-6 w-8 pl-2 pr-2 text-center text-white bg-red-500 rounded-xl">{num < 10 ? `0${num}` : num > 99 ? '00' : num }</div>)}</div>
    
      <div className="w-full flex border-2 p-1 border-red-400 grid grid-cols-10 gap-1 mt-10 justify-center">
        {values.map(value => (
          <Number
            key={value}
            num={value}
            color={
              numbers2.indexOf(value) > -1 ? 'bg-red-500' : 'bg-gray-200'
            }
            textColor={numbers2.indexOf(value) > -1 ? 'text-white' : ''}
          />
        ))}
      </div>
      <div className="flex w-full flex-row justify-end">{numbers2.map(num => <div key={num} className="m-1 h-6 w-8 pl-2 pr-2 text-center m-1 h-6 w-8 pl-2 pr-2 text-center text-white bg-red-500 rounded-xl">{num < 10 ? `0${num}` : num > 99 ? '00' : num }</div>)}</div>
    </>
  )
}

export default DuplaSenaPage
