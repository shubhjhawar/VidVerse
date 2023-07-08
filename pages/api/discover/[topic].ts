import type { NextApiRequest, NextApiResponse } from "next";

import { topicPostsQuery } from "@/utils/queries";
import { client } from '@/utils/client';


// 4. now we take the data from the post request and add it to sanity backend
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //get
    if(req.method === 'GET') {
        const { topic }:any = req.query;

        const videosQuery = topicPostsQuery(topic);

        const videos = await client.fetch(videosQuery);

        res.status(200).json(videos); 
    }
}