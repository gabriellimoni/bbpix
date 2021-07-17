import { ICobranca, ICobrancaGerada } from "./types";

interface BBPixParams {
  env: 'sandbox' | 'live'
  clientId: string
  clientSecret: string
  devAppKey: string
}

export class BBPix {
  constructor (params: BBPixParams) {}

  async novaCobranca(cobranca: ICobranca): Promise<ICobrancaGerada> {
    throw new Error('Not implemented')
  }

  async consultaCobranca(txId: string): Promise<ICobrancaGerada> {
    throw new Error('Not implemented')
  }
}

export default BBPix
