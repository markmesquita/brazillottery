import { motion } from 'framer-motion'
import Link from 'next/link'

interface CardsProps {
  href: string
  imgSrc: string
  layoutId: string
}

const Card = ({ href, imgSrc, layoutId }: CardsProps) => {
  return (
    <Link href={href}>
      <div className="relative h-20 px-4 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img
          src={imgSrc}
          className="w-full h-full"
          layout
          layoutId={layoutId}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30
          }}
        />
      </div>
    </Link>
  )
}

export default Card
