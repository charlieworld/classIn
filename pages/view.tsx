import { AnimatePresence, motion } from 'framer-motion';

import MainLayout from '../components/MainLayout';
import Loading from '../components/Icon/Loading';
import useData from '../hooks/useData';
import Card from '../components/Card/Card';
import IconExclamation from '../components/Icon/Exclamation';
import FilterBar from '../components/FilterBar/FilterBar';

const MESSAGE_CLASS_NAME = 'w-full flex justify-center items-center h-1/2 mt-8';

export default function Index() {
  const {
    data,
    isLoading,
    isError,
    order,
    setOrder,
    handleDisplayData,
    handleOrderChange,
  } = useData();

  const renderCards = () => {
    if (isError)
      return (
        <div className={`${MESSAGE_CLASS_NAME} text-xl`}>
          <IconExclamation />
          <div className="text-primary-dark ml-1">讀取資料失敗！</div>
        </div>
      );
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

  const handleChange = (e) => {
    handleOrderChange(e);
  };

  return (
    <MainLayout>
      <main className="w-full max-w-7xl py-24 px-10">
        <FilterBar value={order} onChange={handleChange} />
        {renderCards()}
      </main>
    </MainLayout>
  );
}
