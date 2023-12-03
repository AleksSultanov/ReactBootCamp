import { useParams } from 'react-router-dom';
import {
    useGetComicsByIdQuery,
    useGetComicsByIdTrQuery,
    useLazyGetComicsByIdQuery,
} from '../../api/query/comics';
export function ComicsItemPage() {
    const { id } = useParams();
    const { data, isLoading, error } = useGetComicsByIdQuery(id);
    const {
        data: dataTr,
        isLoading: isLoadingTr,
        error: errorTr,
    } = useGetComicsByIdTrQuery(id);

    const [getComics] = useLazyGetComicsByIdQuery();

    function getData() {
        getComics(id).then((response) => {
            console.log(response);
        });
    }

    return (
        <>
            <h1>comics item page</h1>
            {isLoading || true ? (
                'Загрузка комиксов вариант 1'
            ) : (
                <>
                    <p>{data.data.results[0].title}</p>
                    <img
                        src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`}
                    />
                </>
            )}
            {isLoadingTr ? (
                'Загрузка комиксов вариант 2'
            ) : (
                <>
                    {console.log('dataTr', dataTr)}
                    <p>{dataTr.title}</p>
                    <img
                        src={`${dataTr.thumbnail.path}.${dataTr.thumbnail.extension}`}
                    />
                </>
            )}
            <button onClick={getData}>get comics</button>
            {/* {error?.error} && <p>{error.error}</p> */}
        </>
    );
}
