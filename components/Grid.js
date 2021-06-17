import styles from './Grid.module.css'

export function Grid ({ children }) {
    return <div className="grid" className={styles.grid}>
        {children}
    </div>
}