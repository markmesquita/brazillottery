import Head from 'next/head'
import Card from '../components/Card'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Brazil Lottery</title>
      </Head>
      <div className='m-10'>
        <h1 className="text-2xl text-center sm:text-4xl lg:text-6xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">
          Gere jogos com números aleatórios de maneira rápida
        </h1>
        <div className="grid w-full grid-cols-1 grid-rows-5 mt-10 md:mt-24 gap-4 md:grid-cols-5 md:grid-rows-1">
          <Card
            layoutId={'mega-sena-logo'}
            imgSrc={'/img/mega-sena.svg'}
            href={'/mega-sena'}
          />
          <Card
            layoutId={'lotofacil-logo'}
            imgSrc={'/img/lotofacil.svg'}
            href={'/lotofacil'}
          />
          <Card
            layoutId={'quina-logo'}
            imgSrc={'/img/quina.svg'}
            href={'/quina'}
          />
          <Card
            layoutId={'lotomania-logo'}
            imgSrc={'/img/lotomania.svg'}
            href={'/lotomania'}
          />
          <Card
            layoutId={'dupla-sena-logo'}
            imgSrc={'/img/dupla-sena.svg'}
            href={'/dupla-sena'}
          />
          <Card
            layoutId={'milionaria-logo'}
            imgSrc={'/img/milionaria.svg'}
            href={'/milionaria'}
          />
        </div>
      </div>
    </>
  )
}

export default Home
