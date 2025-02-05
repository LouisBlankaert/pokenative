import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

const endpoint = "https://pokeapi.co/api/v2";

// Simple query hook
export function useFetchQuery(path) {
    return useQuery({
        queryKey: [path],
        queryFn: async () => {
            try {
                const response = await fetch(endpoint + path);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            } catch (error) {
                throw new Error(`Fetch error: ${error.message}`);
            }
        },
        // Optional: Refetch on window focus
        refetchOnWindowFocus: false,
    });
}

// Infinite scroll query hook
export function useInfiniteFetchQuery(path) {
    return useInfiniteQuery({
        queryKey: [path],
        initialPageParam: endpoint + path,
        queryFn: async ({ pageParam }) => {
            try {
                const response = await fetch(pageParam, {
                    headers: {
                        accept: "application/json",
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            } catch (error) {
                throw new Error(`Fetch error: ${error.message}`);
            }
        },
        getNextPageParam: (lastPage) => {
            return lastPage.next ? lastPage.next : null;
        },
        // Optional: Refetch on window focus
        refetchOnWindowFocus: false,
    });
}

// Wait function (optional for testing or debugging purposes)
function wait(duration) {
    return new Promise(resolve => setTimeout(resolve, duration * 1000));
}
