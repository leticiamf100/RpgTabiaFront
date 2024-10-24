export interface EventData {
    id: number,
    valor: number,
    evento: string,
    imagem: string
}

export interface LootData {
    id: number,
    valor: number,
    recompensa: string,
    imagem: string
}

export type ResultData = LootData | EventData;