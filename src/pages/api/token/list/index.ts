import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { chainIds = '501', changeMax, changeMin, changePeriod = '4', desc = 'true', fdvMax, fdvMin, holdersMax, holdersMin, liquidityMax, liquidityMin = '5000', marketCapMax, marketCapMin, periodType = '4', rankBy = '5', riskFilter = 'true', stableTokenFilter = 'true', tags = '0', tokenAgeMax, tokenAgeMin, tokenAgeType = '2', tradeNumMax, tradeNumMin, tradeNumPeriod = '4', txsMax, txsMin, txsPeriod = '4', uniqueTraderMax, uniqueTraderMin = '10', uniqueTraderPeriod = '4', volumeMax, volumeMin = '10000', volumePeriod = '4', page = '1' } = req.body

  if (req.method === 'POST') {
    try {
      const data = await axios('https://www.okx.com/priapi/v1/dx/market/v2/advanced/ranking/content', {
        params: {
          chainIds,
          changeMax,
          changeMin,
          changePeriod,
          desc,
          fdvMax,
          fdvMin,
          holdersMax,
          holdersMin,
          liquidityMax,
          liquidityMin,
          marketCapMin,
          periodType,
          rankBy,
          riskFilter,
          stableTokenFilter,
          tags,
          tokenAgeMax,
          tokenAgeMin,
          tokenAgeType,
          tradeNumMax,
          tradeNumMin,
          tradeNumPeriod,
          txsMax,
          txsMin,
          txsPeriod,
          uniqueTraderMax,
          uniqueTraderMin,
          uniqueTraderPeriod,
          volumeMax,
          volumeMin,
          volumePeriod,
          accountId: '2FF2B620-6AD0-49F2-8C13-B44DE32CEEFF',
          t: Math.floor(Date.now() / 1000),
          page,
          marketCapMax
        }
      })
      res.send(data.data.data.marketListsTokenInfos)
    } catch (error) {
      res.status(500).send('Internal server Error!')
      console.log(error)
    }
  } else {
    res.status(405).send('Method not allowed!')
  }
}

export default handler