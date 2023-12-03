import { useGetComicsByIdQuery } from '../../api/query/comics';
import { useParams } from 'react-router-dom';

export function ComicsItemPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetComicsByIdQuery(id);

  return (
    <>
      <h1>Comics item page</h1>
      {isLoading ? (
        'Загрузка комикса...'
      ) : (
        <>
          <p>{data.title}</p>
          <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
        </>
      )}
      {error?.error && <p>{error.error}</p>}
    </>
  );
}
