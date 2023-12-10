import { useRouter } from "next/router"
import { useEffect, useState } from "react";

// export default function UserPage() {
//     const router = useRouter();
//     const {id} = router.query;
//     return (
//         <> 
//             <h1>
//                 User page whith id : {id}
//             </h1>
//         </>
//     ) 
// }

type User = {
    username: string;
    name: string;
}

async function getUser(id: any) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();

    return user;
}


export default function UserPage({user}: {user: User}) {
    // const [user, setUser]  =useState<null | User>(null);
    const router = useRouter();
    

    // async function getUser(id: any) {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    //     const user = await response.json();

    //     setUser(user);


    // }
    useEffect(() => {
        if (router.isReady) {
            getUser (router.query.id);
        }
        
        }, [router.query.id]);

    return (
        <> 
            {user ? (
                <> 
                    <h1>
                        User page  
                    </h1>
                    <h2>{user.name}</h2>
                    <p>{user.username}</p>
                </>
            ) : (
                 <> 
                    <h1>Загрузка ...</h1>
                 </>
                
                
            )}
        </>
    ) 
}


export async function getServerSideProps({query} : any) {
    try {
        const user = await getUser(query.id);
        return {
            props: {
                user, 
            }
        }
    } catch (error) {
        return {
            props: {
                error: null, 
            }
        }

        
    }


}