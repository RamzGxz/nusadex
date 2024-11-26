import raydium from '@/lib/raydium';
import { ApiV3Token } from '@raydium-io/raydium-sdk-v2';
import { PublicKey } from '@solana/web3.js';
const token = {
  getTokenInfo: async (mint: string) => {
    try {
      const data: any = (await raydium).api.getTokenInfo([mint])
      return data
    } catch (error) {
      console.log(error)
    }
  },
  list: async (limit?: 50) => {
    try {
      const data = (await raydium).api.getTokenList()
      if (limit) {
        if (limit === 50) {
          return (await data).mintList.slice(50)
        } else if (limit >= 51) {
          return (await data).mintList
        }
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export default token