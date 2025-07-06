import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Number from '../components/Number'
import CustomHead from '../components/CustomHead'
import type { RandomFunction, GambleFunction } from '../types/lottery'

const LotomaniaPage: React.FC = () => {
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
    setNumbers(aux.sort((a, b) => a - b))
  }

  useEffect(() => {
    handleGamble(50, 0, 100)
  }, [])

  useEffect(() => {
    const items = []
    for (let index = 1; index <= 100; index++) {
      items.push(index)
    }
    setValues(items)
  }, [])

  return (
    <>
      <CustomHead
        title="Lotomania - Brazil Lottery"
        description="Gere jogos da Lotomania com 50 números. Loteria com muitas opções de apostas e prêmios."
      />
      <div className="flex flex-col items-center">
        <BackButton />
        <motion.img
          src="/img/lotomania.svg"
          className="h-24 md:h-36"
          layoutId="lotomania-logo"
        />
        <div className="w-full flex justify-end">
          <button
            onClick={() => handleGamble(50, 0, 100)}
            className="bg-yellow-600 px-5 py-3 rounded-md text-white hover:text-yellow-700 hover:bg-yellow-400 transition active:bg-blue-900"
          >
            Novo jogo
          </button>
        </div>
        <div className="w-full flex border-2 p-1 border-yellow-400 grid grid-cols-10 justify-end gap-1 mt-10">
          {values.map(value => (
            <Number
              key={value}
              num={value}
              color={
                numbers.indexOf(value) > -1 ? 'bg-yellow-600' : 'bg-gray-200'
              }
              textColor={numbers.indexOf(value) > -1 ? 'text-white' : ''}
            />
          ))}
        </div>
        <div className="w-full flex justify-end mb-10">
          <div className="flex w-full md:w-2/4 flex-row justify-self-end grid grid-cols-10 gap-1 flex-wrap">
            {numbers.map(num =>
              <div key={num} className="m-1 h-6 w-8 pl-2 pr-2 justify-self-center text-center text-white bg-yellow-600 rounded-xl flex items-center justify-center text-sm">
                {num < 10 ? `0${num}` : num === 100 ? '00' : num}
              </div>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default LotomaniaPage
