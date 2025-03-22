import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/global.css'

// import 'tailwindcss/tailwind.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
