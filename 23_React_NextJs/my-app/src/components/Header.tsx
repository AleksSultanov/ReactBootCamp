import Link from "next/link";

export function Header() {
    return (
        <>
        <header>
            <ul className="flex">
                <li>
                    <Link href="/">Home</Link>  
                    <Link href="/users">Users</Link>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>

        </header>
        </>
    )
}