import React, {useState} from 'react';
import { BASE_URL } from '@/utils'
import axios from 'axios';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/authStore';
import { IUser, Video } from '@/types';
import NoResults from '@/components/NoResults';
import VideoCard from '@/components/VideoCard';
import Link from 'next/link';



const Search = ({videos}:{videos :Video[]}) => {

    const [isAccounts, setIsAccounts] = useState(false);
    const accounts = isAccounts ? 'border-b-2 border-black' : 'text-gray-400';
    const isVideos = !isAccounts ? 'border-b-2 border-black' : 'text-gray-400';

    const router = useRouter();
    const { searchTerm }: any = router.query;

    const {allUsers} = useAuthStore();
    const searchedAccounts = allUsers.filter((user: IUser) => user.userName.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className='w-full'>
        <div>
            <div className='flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full'>
                <p className={`text-xl font-semibold cursor-pointer mt-2 ${accounts}`} onClick={() =>setIsAccounts(true)}>Accounts</p>
                <p className={`text-xl font-semibold cursor-pointer mt-2 ${isVideos}`} onClick={() => setIsAccounts(false)}>Videos</p>
            </div>
        </div>
        {isAccounts ? (
            <div className='md:mt-16'>
                {searchedAccounts?.length > 0 ? (
                    searchedAccounts.map((user: IUser, idx:number) => (
                        <Link href={`/profile/${user._id}`} key={idx}>
                    <div className='flex p-2 cursor-pointer gap-3 font-semibold rounded border-b-2 border-gray-200'>
                      <div className=''>
                        <Image 
                        src={user.image}
                        width={50}
                        height={50}
                        className='roundede-full'
                        alt = "user profile"
                        />
                      </div>
                      <div className='block'>
                          <p className='flex gap-1 items-center text-md font-bold text-primary lowercase'>
                            {user.userName.replaceAll(' ','')} 
                            <GoVerified className='text-blue-400'/>
                          </p>
                          <p className='capitalize text-gray-400 text-xs'>
                            {user.userName}
                          </p>
                        </div>
                      </div>
                    </Link>
                    ))
                ) : (
                    <NoResults text={`No Video Results for ${searchTerm}`} />
                    )}
            </div>
        ): (
            <div className='md:mt-16 flex flex-wrap gap-6 md:justify-start'>
                {videos?.length ? (
                    videos.map((video: Video, idx:number) => (
                        <VideoCard post={video} key={idx}/>
                    ))
                ) : (
                    <NoResults text={`No Video Results for ${searchTerm}`} />
                )}
            </div>
        )}
    </div>
  )
}

//function to get the data of the post based on the id
export const getServerSideProps = async ({
    params: {searchTerm}
  }: {
    params: {searchTerm : string}
  }) => {
    const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`)
  
    return {
      props: {videos: res.data}
      // this will be used above when rendering
    }
  }

export default Search