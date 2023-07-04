import type { NextApiRequest, NextApiResponse } from "next";

import { client } from '@/utils/client';

// 4. now we take the data from the post request and add it to sanity backend
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //post menthod
    if(req.method === 'POST') {

        const user = req.body;

        client.createIfNotExists(user)
            .then(() => res.status(200).json('Login Success'))
    }
}