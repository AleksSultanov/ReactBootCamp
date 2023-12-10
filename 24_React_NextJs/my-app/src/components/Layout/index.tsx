import { Header } from "../Header";
import styles from './Layout.module.css';

export function Layout({children}: {children: React.ReactNode} ) {
    return (
        <>
          <Header />
          <main className={`${styles.fullheight} ${styles.lts} dark text-foreground bg-background`}>
            {children}

          </main>
        </>
    )
}