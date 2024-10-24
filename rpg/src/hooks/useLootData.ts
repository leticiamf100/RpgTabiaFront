import axios, { AxiosPromise } from "axios"
import { LootData } from "../interface/LootData";
import { useQuery } from "@tanstack/react-query"

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<LootData[]> => {
    const response = axios.get(API_URL + '/loot')
    return response;
}

export function useLootData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['loot-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}

    