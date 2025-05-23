import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Number from '../components/Number'
import type { RandomFunction, GambleFunction } from '../types/lottery'

const QuinaPage: React.FC = () => {
  const [values, setValues] = useState<number[]>([])
  const [numbers, setNumbers] = useState<number[]>([])

  const getRandomArbitrary: RandomFunction = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.ceil(Math.random() * (max - min)) + min 
  }

  const handleGamble: GambleFunction = (loop, min, max) => {
    const aux: number[] = []

    while (aux.length < loop) {
      const num = getRandomArbitrary(min, max)
      if (aux.indexOf(num) === -1) {
        aux.push(num)
      }
    }
    setNumbers(aux.sort((a, b) => a-b))
  }

  useEffect(() => {
    handleGamble(5, 0, 80)
  }, [])

  useEffect(() => {
    const items = []
    for (let index = 1; index <= 80; index++) {
      items.push(index)
    }
    setValues(items)
  }, [])
  return (
    <>
      <div className="flex flex-col items-center"> 
      <BackButton />
        <motion.img
          src="/img/quina.svg"
          className="h-24 md:h-36"
          layoutId="quina-logo"
        />

      <div className="w-full flex justify-end">
          <button onClick={() => handleGamble(5,0,80)} className="bg-blue-800 px-5 py-3 rounded-md text-white hover:text-blue-800 hover:bg-blue-500 transition ">Novo jogo</button>
        </div>
        <div className="w-full flex border-2 p-1 border-blue-600 grid grid-cols-10 justify-end gap-1 mt-10">
          {values.map(value => (
            <Number
              key={value}
              num={value}
              color={
                numbers.indexOf(value) > -1 ? 'bg-blue-800' : 'bg-gray-200'
              }
              textColor={numbers.indexOf(value) > -1 ? 'text-white' : ''}
            />
          ))}
        </div>
        <div className="flex w-full flex-row justify-end">{numbers.map(num => <div key={num} className="m-1 h-6 w-8 pl-2 pr-2 text-center m-1 h-6 w-8 pl-2 pr-2 text-center text-white bg-blue-800 rounded-xl">{ num < 10 ? `0${num}` : num > 99 ? '00' : num }</div>)}</div>
      </div>
    </>
  )
}

export default QuinaPage
