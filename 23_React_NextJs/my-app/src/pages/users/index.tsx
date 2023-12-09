import Link from "next/link";

type Props = {
    users: any;
    error: string;
}

export default function UsersPage({users, error}: Props) {
    if (error) {
        return <h1>Ошибка {error}</h1>
    }
    return (
        <h1>
            {/* <Link href={`/users/petya`}>Link to petya page</Link> */}
            {users.map((user:any) => {
                return (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                )
            })
             }
        </h1>
    )
}

export async function getServerSideProps() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return {
            props: {
                users
    
            }
        }
    } catch (error) {
        
    }
    return {
        props: {
            error: true
        }
    }

}