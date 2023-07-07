import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';

import useAuthStore from '@/store/authStore';
import NoResults from './NoResults';


const Comments = () => {
  const comments = [];

  return (
    <div className='border-t-2 border-gray-200 pt-4 px-10 bg-[#f8f8f8] border-b-2 lg:pb:0 pb-[100px]'>
      <div className='overflow-scroll lg:h-[235px]'>
        {comments.length ? (
          <div>videos</div>
        ):(
          <NoResults text="No Comments Yet!"/>
        )}
      </div>
    </div>
  )
}

export default Comments
