// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import argon2 from 'argon2-browser'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  password: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const testPass = await argon2.verify({ pass: 'XX-Hk33ubmS5mTdJKZK2XqfI8', encoded: '$argon2i$v=19$m=4096,t=3,p=1$M8JE4Szs7W4dwPjkOlv5zw$I3aUBzB4FSSCEqQiNhqZ8k7J61ta0TAYLBDM+QCeBrQ' })
  .then(() => 'OK')
  .catch((e) => `${e.message}, ${e.code}`)
  return  res.status(200).send(testPass)
}
