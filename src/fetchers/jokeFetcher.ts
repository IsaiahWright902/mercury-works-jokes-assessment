import useSWR, { mutate } from "swr";
import { fetcher } from "../utils/swr-utils";
import { Joke } from "../types/Joke";

export const jokeFetchers = {
  currentJoke: {
    key: ["currentJoke"],
    fetcher: fetcher(
      `https://mwks-joke-service.azurewebsites.net/api/joke/random`
    ),
    mutate: () => mutate("currentJoke", { revalidate: true }),
  },
};

export function useCurrentJoke() {
  const { data, isLoading, mutate } = useSWR<Joke>(
    jokeFetchers.currentJoke.key,
    jokeFetchers.currentJoke.fetcher
  );

  return {
    currentJoke: data,
    currentJokeLoading: isLoading,
    mutateCurrentJoke: mutate,
  };
}
