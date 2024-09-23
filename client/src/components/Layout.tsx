import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
        <Header />  
        <div className='min-h-[100vh] max-w-[1440px] px-4 md:px-6 lg:px-8 mx-auto'>
            {children}
        </div>
        <Footer />
    </div>
  )
}
