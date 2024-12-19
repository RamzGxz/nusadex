import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, type } = req.query
  try {
    const tokenInfo = await axios('https://www.okx.com/priapi/v1/dx/market/v2/latest/info', {
      params: {
        chainId: '501',
        tokenContractAddress: String(id),
        t: Math.floor(Date.now() / 1000)
      }
    })
    const tokenOverview = await axios('https://www.okx.com/priapi/v1/dx/market/v2/token/overview', {
      params: {
        chainId: '501',
        tokenContractAddress: String(id),
        t: Math.floor(Date.now() / 1000)
      }
    })
    const tokenCheck = await axios('https://www.okx.com/priapi/v1/dx/market/v2/risk/new/check', {
      params: {
        chainId: '501',
        tokenContractAddress: String(id),
        t: Math.floor(Date.now() / 1000)
      }
    })
    const tokenRanking = await axios('https://www.okx.com/priapi/v1/dx/market/v2/holders/ranking-list', {
      params: {
        chainId: '501',
        tokenAddress: String(id),
        t: Math.floor(Date.now() / 1000)
      }
    })
    const tokenChange = await axios('https://www.okx.com/priapi/v1/dx/market/v2/trading-history/info', {
      params: {
        type,
        chainId: '501',
        tokenContractAddress: String(id),
        t: Math.floor(Date.now() / 1000)
      }
    })


    res.status(200).json([{
      info: tokenInfo.data.data,
      overview: tokenOverview.data.data,
      check: tokenCheck.data.data,
      ranking: tokenRanking.data.data.summaryVO,
      change: tokenChange.data.data
    }])
  }
  catch (error) {
    res.status(500).json({
      msg: 'Internal server error!',
      error
    })
  }
}

export default handler
