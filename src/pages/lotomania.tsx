import { motion } from 'framer-motion'
import Link from 'next/link'

const LotomaniaPage: React.FC = () => {
  return (
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
        src="/img/lotomania.svg"
        className="h-24 md:h-36"
        layoutId="lotomania-logo"
      />
    </div>
  )
}

export default LotomaniaPage
