// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface HelloResponse {
  name: string;
}

const hello = (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  res.status(200).json({ name: "John Doe" });
};

export default hello;
