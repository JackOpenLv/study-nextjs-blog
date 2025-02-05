import { produces } from '@/app/libs/placehold-data';
import Link from 'next/link';

export default function Page() {
  if (0 == produces.length) {
    return <h1>There is no produces.</h1>;
  }
    return (
    <main>
      <ol className='list-decimal'>
        {produces.map((produce_info) => {
            return (
                <li key={produce_info.id}>
                  <Link
                   href={`/produces/${produce_info.id}`}
                   className="text-xl flex felx-row items-center space-x-10 underline hover:text-blue-500 visited:text-rebeccapurple-500 after:content-['➡️']"
                    >
                    <p>{produce_info.produce_name}</p>
                    <p>{`Type: ${produce_info.type}`}</p>
                  </Link>
                </li>
            );
        })}
      </ol>
    </main>
    );
}