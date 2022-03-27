import { NextApiRequest, NextApiResponse } from "next";
import { API_END_POINT } from "../../../utils/api";


interface Data {
  results: Object;
  message?: Object;
}

type Error = { message: string };


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  if (req.method === 'GET') {
    const getResults = async () => {
      const response = await fetch(API_END_POINT.weak);
      return response.json();
    }
    
    const results = await getResults();
    return res.status(200).json(results)
  }
  const message = 'Not Found';
  res.status(404).json({message});
}