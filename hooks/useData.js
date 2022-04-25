import { useState, useEffect, useCallback } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import useSWR from 'swr';
import orderBy from 'lodash/orderBy';

const URI = 'https://classin.info/data/data.json';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const LIMIT = 10;

export default function useData() {
  const [displayData, setDisplayData] = useState(null);
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(URI, fetcher);
  const [order, setOrder] = useState('createDate');

  const handleDisplayData = useCallback(() => {
    let tArr = cloneDeep(data.Data);
    switch (order) {
      case 'lv_recommend':
        tArr = orderBy(tArr, ['lv_recommend', 'index'], ['desc', 'desc']);
        break;
      case 'lvWork':
        tArr = orderBy(tArr, ['lvWork', 'index'], ['asc', 'desc']);
        break;
      case 'lvExamAmount':
        tArr = orderBy(tArr, ['lvExamAmount', 'index'], ['asc', 'desc']);
        break;
      case 'lvLearned':
        tArr = orderBy(tArr, ['lvLearned', 'index'], ['desc', 'desc']);
        break;

      case 'lvFun':
        tArr = orderBy(tArr, ['lvFun', 'index'], ['desc', 'desc']);
        break;
      case 'lvRequest':
        tArr = orderBy(tArr, ['lvRequest', 'index'], ['asc', 'desc']);
        break;
      case 'createDate':
        tArr = orderBy(tArr, ['index'], ['desc']);
        break;

      default:
        break;
    }
    setDisplayData(tArr.slice(0, page * LIMIT));
  }, [data, order, setDisplayData]);

  const handleOrderChange = useCallback(
    (newOrder) => {
      setOrder(newOrder);
      setDisplayData(null);
    },
    [setOrder, handleDisplayData]
  );

  useEffect(() => {
    if (!data) return;
    if (displayData) return;
    handleDisplayData();
  }, [data, displayData]);

  return {
    data: displayData,
    isLoading: !error && !data,
    isError: error,
    order,
    setOrder,
    handleDisplayData,
    handleOrderChange,
  };
}
