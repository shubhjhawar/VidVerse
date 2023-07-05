import { postDetailQuery } from "@/utils/queries";
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from '@/utils/client';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //get menthod created over here or rather called over here which would get a singular post corresponsing to the id
    if(req.method === 'GET') {
        const {id} = req.query;
        const query = postDetailQuery(id);

        const data = await client.fetch(query);
        res.status(200).json(data[0]);
    }
}