import type { NextApiRequest, NextApiResponse } from "next";

import { allPostsQuery } from "@/utils/queries";
import { client } from '@/utils/client';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //get menthod
    if(req.method === 'GET') {
        //get the sanity query
        const query = allPostsQuery();

        // this is how to get the data
        const data = await client.fetch(query);

        // this is the api response
        res.status(200).json(data);
    } else if(req.method === 'POST') {
        const document = req.body;
        
        client.create(document)
            .then(() => res.status(201).json('Video Uploaded'))
    }
}