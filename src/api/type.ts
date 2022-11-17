export interface IUnidade {
    id?: number | null,
    nome_predio: string,
}

export interface IAmbiente {
    id?: number | null,
    andar: number,
    espaco: string,
    numero: number,
    unidade: IUnidade[]
}

export interface IProblema {
    id?: number | null,
    categoria: string,
    especificacao: string,
    status: number,
    ambiente: IAmbiente[]
    unidade: IUnidade[]
    administrador: IReport[]
}

export interface IReport {
    id?: number | null,
    email: string,
    problemas_reportados: number,
}

export interface IAdm {
    id?: number | null,
    email: string,
    senha: string,
}
