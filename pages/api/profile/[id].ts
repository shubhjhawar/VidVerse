import type { NextApiRequest, NextApiResponse } from "next";

import { client } from '@/utils/client';
import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery } from "@/utils/queries";

// 4. now we take the data from the post request and add it to sanity backend
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //get menthod
    if(req.method === 'GET') {

        const { id }:any = req.query;

        const query = singleUserQuery(id);
        const userVideosQuery = userCreatedPostsQuery(id);
        const userLikedVideosQuery = userLikedPostsQuery(id);

        const user = await client.fetch(query);
        const userVideos = await client.fetch(userVideosQuery);
        const userLikedVideos = await client.fetch(userLikedVideosQuery);

        res.status(200).json({user: user[0], userVideos, userLikedVideos});

    }
}