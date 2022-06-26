import { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/MainLayout';
import Loading from '../components/Icon/Loading';
import useData from '../hooks/useData';
import Card from '../components/Card/Card';
import IconExclamation from '../components/Icon/Exclamation';
import OrderByBar from '../components/OrderByBar/OrderByBar';
import FilterBar from '../components/FilterBar/FilterBar';
import SearchBar from '../components/FilterBar/SearchBar';
import useViewport from '../hooks/useViewport';
import MobileToolBar from '../components/Mobile/MobileToolBar';
import LoadMore from '../components/Common/LoadMore';
import ModalFilter from '../components/Modal/ModalFilter';
import ModalOrder from '../components/Modal/ModalOrder';
import MobileSearchBar from '../components/Mobile/MobileSearchBar';

const MESSAGE_CLASS_NAME =
  'w-full flex justify-center items-center h-1/2 mt-20';

export default function Index() {
  const {
    data,
    isLoading,
    order,
    filter,
    search,
    handleOrderChange,
    handleFilterChange,
    handleSearchChange,
    handlePageChange,
    hasMore,
  } = useData();
  const [viewPort] = useViewport();
  const [mobileFilterModal, setMobileFilterModal] = useState(false);
  const [mobileOrderModal, setMobileOrderModal] = useState(false);

  const renderCards = () => {
    if (isLoading)
      return (
        <div className={MESSAGE_CLASS_NAME}>
          <Loading />
        </div>
      );
    if (!data) return null;
    if (data.length <= 0) return null;

    const cards = data.map((item) => <Card key={item.index} data={item} />);

    return (
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { ease: 'easeOut', delay: 0.5, duration: 0.7 },
        }}
      >
        {cards}
      </motion.div>
    );
  };

  const renderMore = () => {
    if (!hasMore()) return null;
    return <LoadMore onClick={handlePageChange} />;
  };

  if (viewPort == 'MOBILE') {
    return (
      <MainLayout>
        <main className="w-full max-w-7xl px-10 pt-28 pb-16 pl-14 text-sm">
          <MobileSearchBar value={search} onSearch={handleSearchChange} />
          {mobileFilterModal && (
            <ModalFilter
              value={filter}
              onClose={() => {
                setMobileFilterModal(false);
              }}
              onConfirm={(val) => {
                handleFilterChange(val);
                setMobileFilterModal(false);
              }}
            />
          )}
          {mobileOrderModal && (
            <ModalOrder
              value={order}
              onClose={() => {
                setMobileOrderModal(false);
              }}
              onConfirm={(val) => {
                handleOrderChange(val);
                setMobileOrderModal(false);
              }}
            />
          )}
          <MobileToolBar
            action
            actionFilter={() => {
              setMobileFilterModal(true);
            }}
            actionOrder={() => {
              setMobileOrderModal(true);
            }}
          />
          {renderCards()}
          {renderMore()}
        </main>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <main className="w-full max-w-7xl px-10 pt-80 pb-16 lg:pt-60">
        <div className="fixed z-10 top-16 bg-white w-full left-0 py-4 px-4 lg:px-10 shadow-lg flex flex-col items-center	">
          <FilterBar value={filter} onChange={handleFilterChange}>
            <SearchBar value={search} onSearch={handleSearchChange} />
          </FilterBar>
          <div className="border-b-2 my-2 border-gray-100 w-full" />
          <OrderByBar value={order} onChange={handleOrderChange} />
        </div>
        {renderCards()}
        {renderMore()}
      </main>
    </MainLayout>
  );
}
