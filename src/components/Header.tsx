import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4  items-center">
      <Image src="/img/logo.svg" alt="Brazil Lottery" width={259} height={55} />
      <nav className="hidden md:block space-x-8">
        <Link href="/mega-sena" className="tracking-wide hover:text-gray-300">Mega-sena
        </Link>
        <Link href="/lotofacil" className="tracking-wide hover:text-gray-300">Lotofácil
        </Link>
        <Link href="/quina" className="tracking-wide hover:text-gray-300">Quina
        </Link>
        <Link href="/lotomania" className="tracking-wide hover:text-gray-300">Lotomania
        </Link>
        <Link href="/dupla-sena" className="tracking-wide hover:text-gray-300">Dupla-sena
        </Link>
        <Link href="/milionaria" className="tracking-wide hover:text-gray-300">+Milionária
        </Link>
      </nav>
    </header>
  )
}

export default Header
