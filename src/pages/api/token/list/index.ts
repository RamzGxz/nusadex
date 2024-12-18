import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { chainIds, changePeriod, desc, liquidityMin, periodType, rankBy, riskFilter, stableTokenFilter, tokenAgeType, tradeNumPeriod, txsPeriod, volumeMin, volumePeriod } = req.query

  try {
    const params: Record<string, any> = {
      chainIds,
      changePeriod,
      desc,
      liquidityMin,
      periodType,
      rankBy,
      riskFilter,
      stableTokenFilter,
      tags: "0",
      tokenAgeType,
      tradeNumPeriod,
      txsPeriod,
      volumeMin,
      volumePeriod,
      accountId: "62ACC814-261A-455F-B4F7-F493873C44FD",
      t: Math.floor(Date.now() / 1000),
    }

    const data = await axios('https://www.okx.com/priapi/v1/dx/market/v2/advanced/ranking/content', { params })
    res.send(data.data.data.marketListsTokenInfos)
  } catch (error) {
    res.status(500).send('Internal server Error!')
    console.log(error)
  }
}

export default handler