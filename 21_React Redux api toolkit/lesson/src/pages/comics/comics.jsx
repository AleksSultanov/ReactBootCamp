import { Link } from 'react-router-dom';
import { useGetComicsQuery } from '../../api/query/comics';

export function ComicsPage() {
  const { data, isLoading } = useGetComicsQuery();

  return (
    <>
      <h1>Comics page</h1>
      {isLoading ? (
        'Загрузка комиксов'
      ) : (
        <ul>
          {data?.map((comics) => {
            return (
              <li key={comics.id}>
                <Link to={`/comics/${comics.id}`}>{comics.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
      <button>Toggle</button>
    </>
  );
}
