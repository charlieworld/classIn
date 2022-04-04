import useSWR from 'swr';
import orderBy from 'lodash/orderBy';

const URI = 'https://classin.info/data/data.json';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useData() {
  const { data, error } = useSWR(URI, fetcher);



  return {
    data: data && data.Data && orderBy(data.Data, ['index'], ['desc']),
    isLoading: !error && !data,
    isError: error,
  };
}
