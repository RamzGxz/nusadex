import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"

const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=5c27681d-fcca-4886-8584-51e89282bfe9', 'confirmed')

const wallet = {
  getBalance: async (publicKey: string) => {
    try {
      const balance = await connection.getBalance(new PublicKey(publicKey))
      return balance / LAMPORTS_PER_SOL
    } catch (error) {
      console.error(error)
    }
  }
}

export default wallet