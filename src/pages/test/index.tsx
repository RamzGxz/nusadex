
import ohlcv from '@/lib/sdk/ohlcv';
import { OhclvDataType } from '@/types/ohclvDataTypes';
import React, { useEffect, useState } from 'react';

const TestPage = () => {
  const [marketData, setMarketData] = useState<OhclvDataType.Item[]>([])

  const getMarketData = async () => {
    try {
      const resp: OhclvDataType.Main = await ohlcv.getMarketData('D28Xv8u5SaShbRnbWFBsVmYd9zwotHsd532wBmdBpump', 'So11111111111111111111111111111111111111112', '15m')
      setMarketData(resp.data.items)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getMarketData()
    console.log(marketData)
  }, [])

  return (
    <div>

    </div>
  );
};

export default TestPage;