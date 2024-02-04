import React from 'react';
import Converter from "@/components/converter";
import Info from '@/components/info';

export default function Home(): React.JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className='m-5'>
        <Info/>
      </div>
      <div className=''>
        <Converter/>
      </div>
    </main>
  );
}
