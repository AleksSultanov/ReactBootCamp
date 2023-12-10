import { Post } from "@/types/posts";
import Link from "next/link";

export default function PostsPage({post}:{post:Post} ){
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const paths = posts.map((post: Post) => {
        return {
            params: {
                id: post.id.toString(),
            },
        }

    })

    return {
        paths,
        fallback:false
    }
};

export async function getStaticProps({params}: any) {
    const respons = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await respons.json();

    return {
        props: {
            post
        }
    }
    
};

