export interface UserDataType {
  id: string,
  createdAt: Date,
  fullname: string,
  email: string,
  password: string,
  phone: string,
  emailVerified: boolean
  phoneVerified: boolean,
  walletAddress: string[],
  image: string,
}