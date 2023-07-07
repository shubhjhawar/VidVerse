import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 2. now we make this function
// it takes data from response (data from google account)
export const createOrGetUser = async (response:any, addUser:any) => {

  //using jwt decode to get the data from response and then destructing it in useful things
  const decoded: {name:string, picture:string, sub:string} = jwt_decode(response.credential);

  // saving it in usable variables
  const {name, picture, sub } = decoded;

  //user object containing the necessary data
  const user = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture
  }

  addUser(user);

  
  //3. post request which will take the user data and give it to the frontend
  await axios.post(`${BASE_URL}/api/auth`, user);

};

// export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// export const createOrGetUser = async (response: any, addUser: any) => {
//   var base64Url = response.credential.split('.')[1];
//   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//   }).join(''));
  
//   const { name, picture, sub } = JSON.parse(jsonPayload)
  
//   const user = {
//     _id: sub,
//     _type: 'user',
//     userName: name,
//     image: picture,
//   };
  
//   addUser(user);

//   await axios.post(`${BASE_URL}/api/auth`, user);
// };