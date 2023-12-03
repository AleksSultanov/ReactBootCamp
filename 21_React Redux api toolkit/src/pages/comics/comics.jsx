import { NavLink } from 'react-router-dom';
import { useGetComicsQuery } from '../../api/query/comics';

export function ComicsPage() {
    const { data, error, isLoading } = useGetComicsQuery();
    console.log(data);
    return (
        <>
            <h1>comics page</h1>
            {isLoading ? (
                'Загрузка комиксов'
            ) : (
                <ul>
                    {data?.data?.results?.map((comics) => {
                        return (
                            <li key={comics.id}>
                                <NavLink to={`/comics/${comics.id}`}>
                                    {comics.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}
