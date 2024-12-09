import generateUserId from "@/lib/database/generateUserId"
import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import hash from "@/lib/database/hash"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, phone, password, fullname } = req.body
  const key = String(process.env.NEXT_PRIVATE_HASH_KEY)

  if (req.method === 'POST') {
    const hashedPassword = await hash.encrypt(key, password)
    try {
      await prisma.users.create({
        data: {
          fullname,
          id: generateUserId(),
          email,
          phone,
          password: hashedPassword
        }
      })
      res.status(200).json({
        msg: 'Reg success!'
      })
    } catch (error) {
      res.status(500).json({
        msg: 'Internal server error!',
        error
      })
      console.log(error)
    }
  } else {
    res.status(405).send('Method not allowed!')
  }
}

export default handler