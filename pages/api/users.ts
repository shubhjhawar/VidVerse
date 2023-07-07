import type { NextApiRequest, NextApiResponse } from "next";
import { allUsersQuery } from "@/utils/queries";

import { client } from '@/utils/client';

// 4. now we take the data from the post request and add it to sanity backend
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //get menthod
    if(req.method === 'GET') {
        const data = await client.fetch(allUsersQuery());

        if(data){
            res.status(200).json(data);
        } else {
            res.json([]);
        }
    }
}