import MainLayout from '../components/MainLayout';
import Loading from '../components/Icon/Loading';
import useData from '../hooks/useData';
import Card from '../components/Card/Card';
import IconExclamation from '../components/Icon/Exclamation';
import FilterBar from '../components/FilterBar/FilterBar';

const MESSAGE_CLASS_NAME = 'w-full flex justify-center items-center h-1/2';

export default function Index() {
  const { data, isLoading, isError } = useData();

  const renderCards = () => {
    if (isError) return (
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

    return data.map((item) => <Card key={item.index} data={item} />);
  };

  return (
    <MainLayout>
      <main className="w-full max-w-7xl py-24 px-10">
        <FilterBar />
        {renderCards()}
      </main>
    </MainLayout>
  );
}
