import { Post } from "@/types/posts";
import Link from "next/link";

export default function PostsPage({posts}:{posts:Post[]} ){
    return (
        <div>
            <ul>
                {posts.map(post => {
                    return(
                        <li key={post.id}>
                            <Link key={post.id} href={`/posts/${post.id}`}>{post.title} </Link>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const respons = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await respons.json();

    return {
        props: {
            posts
        }
    }
    
}

