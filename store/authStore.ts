//ZUSTAND FILE - light and easy alternative of Redux
//used to add the user to a persistent state => user remains logged in even after reload

import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import axios from 'axios';

import {BASE_URL} from "../utils";


//5. is this!

// it takes a function -> set
const authStore = (set:any) => ({
    userProfile : null,
    allUsers: [],

    //method, here we give the type of user as any
    // then call the above set function to store the profile data
    addUser: (user: any) => set({userProfile: user }),

    //this one is used to remove the user data from storage when logging out
    removeUser: () => set({userProfile:null}),

    // this one is used to fetch all the users
    fetchAllUsers: async () => {
        const response = await axios.get(`${BASE_URL}/api/users`);

        set({ allUsers: response.data })
    }
});

//now we use create to make this function and use persist to call the above function and give it a name
const useAuthStore = create(
    persist(authStore, {
        name: 'auth'
    })
)

export default useAuthStore;