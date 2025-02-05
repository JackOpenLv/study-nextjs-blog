import {blogs} from '@/app/libs/placehold-data';
import Link from 'next/link';

export default function Page() {
  if (blogs.length == 0) {
    return <h1>There is no blog.</h1>
  }
    return (
    <main>
      {/* <ol className='list-decimal'>
        {blogs.map((blogInfo) => {
            return (
                <li key={blogInfo.id}>
                  <Link
                   href={`/blogs/${blogInfo.id}/content`}
                   className="text-xl flex felx-row items-center space-x-10 hover:text-blue-500 visited:text-rebeccapurple-500"
                    >
                    <p>{blogInfo.title}</p>
                    <p>{`Type: ${blogInfo.type}`}</p>
                    <p>{`Date: ${blogInfo.date}`}</p>
                  </Link>
                </li>
            );
        })}
      </ol> */}
    </main>
    );
}
