import { useQuery } from "react-query"
import { $host } from "../api"

export default function useGallerys(){

    return useQuery(
        ['gallerys'],
        () =>
        $host.get('gallery/')
        .then((res) => res.data)
        ,
        {
            staleTime: 120000
        }
    )
}