import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Number from '../components/Number'
import { GambleFunction } from '@/types/lottery'

const MilionariaPage: React.FC = () => {
  const [values, setValues] = useState<number[]>([])
  const [numbers, setNumbers] = useState<number[]>([])
  const [clovers, setClovers] = useState<number[]>([])
  const [cloverNumbers, setCloverNumbers] = useState<number[]>([])

  const getRandomArbitrary = (min: number, max: number): number => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.ceil(Math.random() * (max - min)) + min 
  }

  const handleGamble: GambleFunction = (loop, min, max) =>{
    const aux = []
    const aux2 = []
    while (aux.length < loop) {
      const num = getRandomArbitrary(min, max)
      if (aux.indexOf(num) === -1) {
        aux.push(num)
      }
    }
    setNumbers(aux.sort((a, b) => a-b))

    while (aux2.length < 2) {
      const num = getRandomArbitrary(1, 6)
      if (aux2.indexOf(num) === -1) {
        aux2.push(num)
      }
    }
    setCloverNumbers(aux2)

  }

  useEffect(() => {
    handleGamble(6, 0, 50)
  }, [])

  useEffect(() => {
    const items = []
    const items2 = []
    for (let index = 1; index <= 50; index++) {
      items.push(index)
    }
    for (let index = 1; index <= 6; index++) {
      items2.push(index)
    }
    setValues(items)
    setClovers(items2)
  }, [])

  return (
    <>
      <div className="flex flex-col items-center">
        <BackButton />
        <motion.img
          src="/img/milionaria.svg"
          className="h-24 md:h-36"
          layoutId="milionaria-logo"
        />
        <div className="w-full flex justify-end">
          <button onClick={() => handleGamble(6,0,50)} className="bg-blue-500 px-5 py-3 rounded-md text-white hover:text-blue-700 hover:bg-blue-400 transition active:bg-blue-900">Novo jogo</button>
        </div>
        <div className="w-full flex border-2 p-1 border-blue-800 grid grid-cols-10 gap-1 mt-10 justify-center">
          {values.map(value => (
            <Number
              key={value}
              num={value}
              color={
                numbers.indexOf(value) > -1 ? 'bg-blue-500' : 'bg-gray-200'
              }
              textColor={numbers.indexOf(value) > -1 ? 'text-white' : ''}
            />
          ))}
        </div>
        <div className="flex w-full flex-row justify-end">{numbers.map(num => <div key={num} className="m-1 h-6 w-8 pl-2 pr-2 text-center m-1 h-6 w-8 pl-2 pr-2 text-center text-white bg-blue-500 rounded-xl">{num < 10 ? `0${num}` : num > 99 ? '00' : num }</div>)}</div>
        <div className="flex w-full flex-row justify-center text-xl mt-10">Trevos</div>
        <div className="w-full flex border-2 p-1 border-yellow-800 grid grid-cols-6 gap-1 mt-10 justify-center">
          {clovers.map(value => (
            <Number
              key={value}
              num={value}
              color={
                cloverNumbers.indexOf(value) > -1 ? 'bg-yellow-500' : 'bg-gray-200'
              }
              textColor={cloverNumbers.indexOf(value) > -1 ? 'text-white' : ''}
            />
          ))}
        </div>
        <div className="flex w-full flex-row justify-end">{cloverNumbers.map(num => <div key={num} className="m-1 h-6 w-8 pl-2 pr-2 text-center m-1 h-6 w-8 pl-2 pr-2 text-center text-white bg-yellow-500 rounded-xl">{ `0${num}`}</div>)}</div>
      </div>
    </>
  )
}

export default MilionariaPage
