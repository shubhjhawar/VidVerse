import React, { useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {GoogleLogin, googleLogout} from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/logo.png';
import { createOrGetUser } from '@/utils';
import useAuthStore from '@/store/authStore';



const Navbar = () => {

  // 6. call the the two things created through ZUSTAND 
  const {userProfile, addUser, removeUser}: any = useAuthStore();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSearch = (e: {
    preventDefault: () => void}) => {
    e.preventDefault(); // prevent reloading

    if(searchValue){
      router.push(`/search/${searchValue}`)
    }
  }

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href="/">
      <div className="w-[100px] md:w-[130px]">
        <Image 
          className="cursor-pointer"
          src= {Logo}
          alt = 'VidVerse'
          layout = "responsive"
        />
      </div>
      </Link>

      <div className='relative hidden md:block'>
        <form className='absolute md:static top-10 -left-20 bg-white'
          onSubmit={handleSearch}
        >
          <input type='text'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search accounts or videos'
                className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0'
          />
          <button
            onClick ={handleSearch}
            className='absolute md:right-5 right-6 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400 mt-4'
          >
            <BiSearch />
          </button>
        </form>
      </div>

      <div>
        {userProfile ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href="/upload">
            <button className='border-2 px-2 py-2 md:px-4 text-md font-semibold flex items-center gap-2 cursor-pointer'>
              <IoMdAdd className='text-xl'/> {` `}
              <span className='hidden md:block'>Upload</span>
            </button>
            </Link>
            {userProfile?.image && (
              <Link href="/">
              <>
              <Image 
                width={40}
                height={40}
                className="rounded-full"
                src = {userProfile?.image}
                alt="profile photo"
              />
              </>
            </Link>
            )}
            <button
              type="button"
              className='px-2'
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
          ): (
            // 1. this would be the login button, in which we pass a function
            <GoogleLogin 
              // 7. pass the response from google to the function crated in 2.
              // in which the parameters are the above respone and the addUser from 6.
              onSuccess={(response) => createOrGetUser(response, addUser)}
              onError={() => console.log('Error')}
            />)}
      </div>
    </div>
  )
}

export default Navbar