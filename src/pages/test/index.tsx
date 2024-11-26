
import ohlcv from '@/lib/sdk/ohlcv';
import token from '@/lib/sdk/tokens';
import { OhclvDataType } from '@/types/ohclvDataTypes';
import { ApiV3Token } from '@raydium-io/raydium-sdk-v2';
import React, { useEffect, useState } from 'react';

const TestPage = () => {
  const [marketData, setMarketData] = useState<OhclvDataType.Item[]>([])
  const [tokenInfoData, setTokenInfoData] = useState({} as ApiV3Token)

  const getMarketData = async () => {
    try {
      // parameter pada getMarketData ganti dengan CA token
      const resp: OhclvDataType.Main = await ohlcv.getMarketData('D28Xv8u5SaShbRnbWFBsVmYd9zwotHsd532wBmdBpump', 'So11111111111111111111111111111111111111112', '15m')
      setMarketData(resp.data.items)
    } catch (error) {
      console.log(error)
    }
  }

  const getTokenInfoData = async () => {
    try {
      // parameter pada getTokenInfo ganti dengan CA token
      const data = await token.getTokenInfo('EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm')
      setTokenInfoData(data[0])
      console.log(data[0])
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    // getMarketData()
    getTokenInfoData()
  }, [])

  return (
    <div>
      
    </div>
  );
};

export default TestPage;