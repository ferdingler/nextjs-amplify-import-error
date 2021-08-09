// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import argon2 from 'argon2-browser'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  password: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const hashedPassword = 'test'
  // await argon2.verify({ pass: 'secret password', encoded: 'asd' })
  // .then(() => console.log('OK'))
  // .catch(e => console.error(e.message, e.code))
  res.status(200).json({ password: hashedPassword })
}
