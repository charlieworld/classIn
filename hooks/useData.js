import { useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import useSWR from 'swr';
import orderBy from 'lodash/orderBy';

const URI = 'https://classin.info/data/data.json';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const LIMIT = 3;

export default function useData() {
  const [displayData, setDisplayData] = useState(null);
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(URI, fetcher);

  useEffect(() => {
    if (!data) return;
    if (displayData) return;
    const tArr = orderBy(data.Data, ['index'], ['desc']);
    setDisplayData(tArr.slice(0, (page * LIMIT)))
  }, [data, displayData]);
  

  return {
    data: displayData,
    isLoading: !error && !data,
    isError: error,
  };
}
