import MainLayout from '../components/MainLayout';
import Heart from '../components/Icon/Heart';
import Sparkles from '../components/Icon/Sparkles';
import Clock from '../components/Icon/Clock';
import useData from '../hooks/useData';

export default function Index() {
  const {data, isLoading, isError}  = useData();
  const S_MARGIN = 'mb-6';
  const ICON_MARGIN = 'mb-1';

  const renderContent = () => {
    if (isError) return 'ERROR!';
    if (isLoading) return 'Loading....'
    
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    )
  }


  return (
    <MainLayout >
      <main className="w-full h-screen py-24 px-10">
        {renderContent()}
      </main>
    </MainLayout>
  );
}
