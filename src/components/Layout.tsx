import Header from './Header'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-gray-100 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <Header />
        {children}
      </div>
    </>
  )
}

export default Layout
