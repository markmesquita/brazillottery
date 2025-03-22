import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4  items-center">
      <Image src="/img/logo.svg" alt="Brazil Lottery" width={259} height={55} />
      <nav className="hidden md:block space-x-8">
        <Link href="/mega-sena">
          <a className="tracking-wide hover:text-gray-300">Mega-sena</a>
        </Link>
        <Link href="/lotofacil">
          <a className="tracking-wide hover:text-gray-300">Lotofácil</a>
        </Link>
        <Link href="/quina">
          <a className="tracking-wide hover:text-gray-300">Quina</a>
        </Link>
        <Link href="/lotomania">
          <a className="tracking-wide hover:text-gray-300">Lotomania</a>
        </Link>
        <Link href="/dupla-sena">
          <a className="tracking-wide hover:text-gray-300">Dupla-sena</a>
        </Link>
        <Link href="/milionaria">
          <a className="tracking-wide hover:text-gray-300">+Milionária</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
