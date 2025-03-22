import { motion } from 'framer-motion'
import Link from 'next/link'

const BackButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="w-full"
      layout
    >
      <Link href="/" className="bg-gray-900 text-gray-50 px-3 py-3 text-sm rounded-xl hover:bg-gray-500">	
        &#10094; Voltar
      </Link>
    </motion.div>
  )
}

export default BackButton