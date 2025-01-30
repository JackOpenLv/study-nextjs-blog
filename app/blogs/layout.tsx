import Header from '@/app/ui/common/header';


export default function Layout({ children } : { children:React.ReactNode }) {
    return (
      <main className='flex flex-col gap-8 items-center w-full'>
        <Header />
        {children}
      </main>
    );
}