
import ohlcv from '@/lib/sdk/ohlcv';
import token from '@/lib/sdk/tokens';
import { OhclvDataType } from '@/types/ohclvDataTypes';
import { ApiV3PageIns, ApiV3Token, ApiV3TokenRes, PoolsApiReturn } from '@raydium-io/raydium-sdk-v2';
import { T } from '@raydium-io/raydium-sdk-v2/lib/api-9d98bd04';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TestPage = () => {
  const [marketData, setMarketData] = useState<OhclvDataType.Item[]>([])
  const [tokenInfoData, setTokenInfoData] = useState({} as ApiV3Token)
  const [poolInfoData, setPoolInfoData] = useState({} as ApiV3PageIns<T>)
  const [tokenList, setTokenList] = useState<ApiV3Token[]>([])

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
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getPoolInfoData = async () => {
    try {
      const data = await token.getPairInfo('D28Xv8u5SaShbRnbWFBsVmYd9zwotHsd532wBmdBpump', 'So11111111111111111111111111111111111111112')
      setPoolInfoData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getTokenList = async () => {
    try {
      const data = await token.list(100)
      if (data) {
        setTokenList(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getParsedTokenInfoData = async () =>{
    try {
      const data = await token.getParsedTokenInfo('Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getOKXTokenList = async () => {
    try {
      const resp = await axios('/api/token/list')
      console.log(resp.data)
      
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    // getMarketData()
    // getTokenInfoData()
    // getPoolInfoData()
    // getTokenList()
    // getParsedTokenInfoData()
    // getOKXTokenList()
  }, [])

  return (
    <div>
      
    </div>
  );
};

export default TestPage;