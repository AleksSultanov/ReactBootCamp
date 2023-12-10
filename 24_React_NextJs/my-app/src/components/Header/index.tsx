import Link from "next/link";
import styles from './Header.module.css';

export function Header() {
    return (
        <>
        <header>
            <ul className={styles.header}>
                <li>
                    <Link href="/">Home</Link>  
                    <Link href="/users">Users</Link>
                    <Link href="/posts">Posts</Link>
                    <Link href="/table">Table</Link>                    
                </li>
            </ul>

        </header>
        </>
    )
}