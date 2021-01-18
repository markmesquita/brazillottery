import { AnimateSharedLayout } from 'framer-motion'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'

// import 'tailwindcss/tailwind.css'
import '../styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
