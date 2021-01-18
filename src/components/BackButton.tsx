import { motion } from 'framer-motion'
import Link from 'next/link'
interface buttonProps {

}

const BackButton: React.FC = () => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full"
          layoutId="back-button"
        >
          <Link href="/">
            <a className="bg-gray-900 text-gray-50 px-3 py-3 text-sm rounded-xl hover:bg-gray-500">	
                &#10094; Voltar
            </a>
          </Link>
        </motion.div>
    )
}

export default BackButton