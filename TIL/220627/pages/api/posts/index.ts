import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

// api/posts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
