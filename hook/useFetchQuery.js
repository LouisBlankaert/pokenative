import {useQuery, useInfiniteQuery} from "@tanstack/react-query"

const endpoint = "https://pokeapi.co/api/v2"

export function useFetchQuery(path) {
    return useQuery({
        queryKey: [path],
        queryFn: async () => {
            await wait(1)
            return fetch(endpoint + path).then(res => res.json())
        }
    })
}

export function useInfiniteFetchQuery(path) {
    return useInfiniteQuery({
        queryKey: [path],
        initialPageParam: endpoint + path,
        queryFn: async ({pageParam}) => {
            await wait(1)
            return fetch(pageParam, {
                headers: {
                    accept: "application/json",
                }
            }).then(res => res.json())
        }, 
        getNextPageParam: (lastPage) => {
            if ("next" in lastPage){
                return lastPage.next
            } else {
                return null
            }
        }
    })
}

function wait (duration) {
    return new Promise(resolve => setTimeout(resolve, duration * 1000));
}