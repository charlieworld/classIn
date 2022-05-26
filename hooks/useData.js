import { useState, useEffect, useCallback } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import useSWR from 'swr';
import orderBy from 'lodash/orderBy';

const URI = 'https://classin.info/data/data.json';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const LIMIT = 10;

export const FILTER_VALUE = {
  HUMANITIES: '人文',
  PHYSIC: '自然',
  SOCIAL: '社會',
  HISTORY: '歷史',
  SPORTS: '體育',
  ALL: 'all',
};

export default function useData() {
  const [displayData, setDisplayData] = useState(null);
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(URI, fetcher);
  const [order, setOrder] = useState('createDate');
  const [filter, setFilter] = useState(FILTER_VALUE.ALL);
  const [search, setSearch] = useState('');

  const handleDisplayData = useCallback(() => {
    let tArr = cloneDeep(data.Data);
    console.log('search:', search);
    if (search && search !== '') {
      const targetIndex = tArr.filter(
        (data) => data.index === parseInt(search)
      );
      if (targetIndex.length > 0) {
        tArr = targetIndex;
      } else {
        console.log({search});
        tArr = tArr.filter((data) => {
          console.log('data.teaher', data.teaher);
          if (data.className.indexOf(search) >= 0) return true;
          if (data.teaher.indexOf(search) >= 0) return true;
          return false;
        });
      }
    }

    switch (filter) {
      case FILTER_VALUE.HUMANITIES:
      case FILTER_VALUE.PHYSIC:
      case FILTER_VALUE.SOCIAL:
      case FILTER_VALUE.SPORTS:
        tArr = tArr.filter((data) => data.classOpen.indexOf(filter) >= 0);
        break;
      case FILTER_VALUE.HISTORY:
        tArr = tArr.filter((data) => data.ifHistory === '是');
        break;
      default:
        break;
    }

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
  }, [data, filter, order, search, setDisplayData]);

  const handleOrderChange = useCallback(
    (newOrder) => {
      setOrder(newOrder);
      setDisplayData(null);
    },
    [setOrder, handleDisplayData]
  );

  const handleFilterChange = useCallback(
    (newFilter) => {
      setFilter(newFilter);
      setDisplayData(null);
    },
    [setFilter, handleDisplayData]
  );

  const handleSearchChange = useCallback(
    (val) => {
      setSearch(val);
      setDisplayData(null);
    },
    [setSearch, handleDisplayData]
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
    filter,
    search,
    setPage,
    setOrder,
    setFilter,
    setSearch,
    handleDisplayData,
    handleOrderChange,
    handleFilterChange,
    handleSearchChange,
  };
}
