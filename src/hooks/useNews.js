import { useQuery } from "react-query"
import { useSearchParams } from "react-router-dom"
import { $host } from "../api"

export default function useNews(){

    const [search] = useSearchParams()

    return useQuery(
        ['news', search.toString()],
        () =>
        $host.get('news/', {
            params: search
        })
        .then((res) => res.data)
        ,
        {
            staleTime: 120000
        }
    )
}