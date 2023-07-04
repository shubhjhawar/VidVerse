"use client";
import type { AppProps } from 'next/app';
import {useState, useEffect} from 'react';

import "../app/globals.css";
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { GoogleOAuthProvider } from '@react-oauth/google';

const MyApp = ({Component, pageProps}: AppProps) => {
    // gotta learn why we do this SSR
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
      setIsSSR(false);
    }, [])

    if(isSSR) return null;
    
    return(
      // we gotta wrap the whole app in google o auth in order to use google login as per new guidelines
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_API_TOKEN}`}>
        <Navbar />
        <div className='flex gap-6 md:gap-20'>
            <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
                <Sidebar />
            </div>
            <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
                <Component {...pageProps} />
            </div>
        </div>
      </GoogleOAuthProvider>
      )
}

export default MyApp