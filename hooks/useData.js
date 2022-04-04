import useSWR from 'swr';

const URI = 'https://classin.info/data/data.json';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useData() {
  const { data, error } = useSWR(URI, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
