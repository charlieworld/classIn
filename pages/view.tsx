import { useState } from 'react';
import MainLayout from '../components/MainLayout';
import Heart from '../components/Icon/Heart';
import Sparkles from '../components/Icon/Sparkles';
import Clock from '../components/Icon/Clock';
import useData from '../hooks/useData';
import Card from '../components/Card/Card';

export default function Index() {
  const {data, isLoading, isError}  = useData();

  const renderContent = () => {
    if (isError) return 'ERROR!';
    if (isLoading) return 'Loading....'
    
    if (data.Data.length <= 0 ) return null

    return data.Data.map((item) => (
      <Card key={item.index} data={item} />
    ));
  }


  return (
    <MainLayout >
      <main className="w-full h-screen py-24 px-10">
        {renderContent()}
      </main>
    </MainLayout>
  );
}
