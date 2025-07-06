import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Number from '../components/Number'
import NumberSelector from '../components/NumberSelector'
import CustomHead from '../components/CustomHead'
import type { RandomFunction, GambleFunction } from '../types/lottery'

const LotofacilPage: React.FC = () => {
  const [values, setValues] = useState<number[]>([])
  const [numbers, setNumbers] = useState<number[]>([])
  const [selectedNumbers, setSelectedNumbers] = useState<number>(15)

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
    handleGamble(selectedNumbers, 0, 25)
  }, [selectedNumbers])

  useEffect(() => {
    const items = []
    for (let index = 1; index <= 25; index++) {
      items.push(index)
    }
    setValues(items)
  }, [])

  return (
    <>
      <CustomHead
        title="Lotofácil - Brazil Lottery"
        description="Gere jogos da Lotofácil com 15 a 20 números. A loteria mais fácil de ganhar do Brasil."
      />
      <div className="flex flex-col items-center">
        <BackButton />
        <motion.img
          src="/img/lotofacil.svg"
          className="h-24 md:h-36"
          layoutId="lotofacil-logo"
        />
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
          <NumberSelector
            minNumbers={15}
            maxNumbers={20}
            selectedNumbers={selectedNumbers}
            onNumberChange={setSelectedNumbers}
          />
          <button
            onClick={() => handleGamble(selectedNumbers, 0, 25)}
            className="bg-purple-600 px-5 py-3 rounded-md text-white hover:text-purple-700 hover:bg-purple-400 transition active:bg-blue-900"
          >
            Novo jogo
          </button>
        </div>
        <div className="w-full flex border-2 p-1 border-purple-400 grid grid-cols-5 justify-end gap-1 mt-10">
          {values.map(value => (
            <Number
              key={value}
              num={value}
              color={
                numbers.indexOf(value) > -1 ? 'bg-purple-600' : 'bg-gray-200'
              }
              textColor={numbers.indexOf(value) > -1 ? 'text-white' : ''}
            />
          ))}
        </div>
        <div className="w-full flex justify-end mb-10">
          <div className="flex w-full md:w-1/4 grid grid-cols-5 gap-1 flex-wrap">
            {numbers.map(num => (
              <div key={num} className="m-1 h-6 w-8 pl-2 pr-2 justify-self-center text-center text-white bg-purple-600 rounded-xl flex items-center justify-center text-sm">
                {num < 10 ? `0${num}` : num > 99 ? '00' : num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LotofacilPage
