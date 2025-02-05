import Header from '@/app/ui/common/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ming's produces",
  description: "A list of Ming's produces",
};

export default function Layout({ children } : { children:React.ReactNode }) {
    return (
      <main className='flex flex-col gap-8 items-center w-full'>
        <Header />
        {children}
      </main>
    );
}