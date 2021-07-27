// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import argon2 from 'argon2'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  password: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const hashedPassword = await argon2.hash('secret password');
  res.status(200).json({ password: hashedPassword })
}
