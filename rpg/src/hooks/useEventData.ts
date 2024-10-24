import axios, { AxiosPromise } from "axios"
import { EventData } from "../interface/EventData";
import { useQuery } from "@tanstack/react-query"

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<EventData[]> => {
    const response = axios.get(API_URL + '/event')
    return response;
}

export function useEventData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['event-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}

    