import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Number from '../components/Number'

const MegaSenaPage: React.FC = () => {
  const [values, setValues] = useState([])
  const [numbers, setNumbers] = useState([])

  const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.ceil(Math.random() * (max - min)) + min
  }

  useEffect(() => {
    const aux = []

    while (aux.length < 6) {
      const num = getRandomArbitrary(1, 60)
      if (aux.indexOf(num) === -1) {
        aux.push(num)
      }
    }
    console.log('Numbers', aux)
    setNumbers(aux)
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/">
            <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-500">
              Voltar para home
            </a>
          </Link>
        </motion.div>
        <motion.img
          src="/img/mega-sena.svg"
          className="h-24 md:h-36"
          layoutId="mega-sena-logo"
        />
        <div className="w-full border-2 p-1 order-green-400 grid grid-cols-10 grid-rows-6 mt-24 center">
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
      </div>
    </>
  )
}

export default MegaSenaPage
