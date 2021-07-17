export interface ICobranca {
  calendario?: {
    expiracao: number
  }
  devedor?: IPessoaFisica | IPessoaJuridica
  valor: {
    original: string
  }
  chave: string
  solicitacaoPagador?: string
  infoAdicionais?: {
    nome: string
    valor: string
  }[]
}

export interface ICobrancaGerada {
  calendario: ICobranca['calendario']
  status: ICobrancaGeradaStatusEnum
  txId: string
  revisao: number
  location: string
  devedor?: ICobranca['devedor']
  valor: ICobranca['valor']
  chave: ICobranca['chave']
  solicitacaoPagador?: ICobranca['solicitacaoPagador']
  infoAdicionais?: ICobranca['infoAdicionais']
}

export interface IPessoaFisica {
  cpf: string
  nome: string
}

export interface IPessoaJuridica {
  cnpj: string
  nome: string
}

export enum RequestTypeEnum {
  Get = 'GET',
  Put = 'PUT',
}

export enum ICobrancaGeradaStatusEnum {
  Ativa = 'ATIVA',
  Concluida = 'CONCLUIDA',
  RemovidaPeloRecebedor = 'REMOVIDA_PELO_USUARIO_RECEBEDOR',
  RemovidaPeloPsp = 'REMOVIDA_PELO_PSP',
}
