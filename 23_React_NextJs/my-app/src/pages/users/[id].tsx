import { useRouter } from "next/router"

export default function UserPage() {
    const router = useRouter();
    const {id} = router.query;
    return (
        <> 
            <h1>
                User page whith id : {id}
            </h1>
        </>
    ) 
}