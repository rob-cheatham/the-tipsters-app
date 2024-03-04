// Required imports


// Components, styling, assets
import styles from './main-header.module.css';

export default function AdminMainHeader() {

    return(
        <header className={styles['main-header']}>
            <h1 className={styles['main-header-title']}>Admin Dashboard</h1>
        </header>
    )

}