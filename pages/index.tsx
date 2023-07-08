import type {NextPage} from 'next';
import axios from 'axios';
import { Video } from '@/types';
import VideoCard from '@/components/VideoCard';
import NoResults from '@/components/NoResults';
import { BASE_URL } from '@/utils';

//this is used to specify the details of the object being fetched by the api
interface IProps {
  videos: Video[]
  // we want an array of videos not just 1
}

// here videos is passed as an argument from down(backend part) and 
// since we are using typescript we have to say that it is of type 'IProps' which is the interface declared above
const Home = ({videos}: IProps) => {
  // console.log(videos)
  

  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id}/>
        ))
      ) : (
        <NoResults text={'No Videos'}/>
      )}
    </div>
  )
}

export const getServerSideProps = async ({
  query : {topic}
} : {
  query : {topic : string}
 }) => {

  let response = null;

  // destructured response as data
  // get reuqest
  if(topic)
  {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
    
  } else {
    response = await axios.get(`${BASE_URL}/api/post`);
  }
  

  // this is how u return data from the api
  // video prop would now be used above
  return {
    props: {
      videos: response.data
    }
  }
}

export default Home