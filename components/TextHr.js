import styles from './TextHr.module.css'

export function TextHr ({ children }) {
    return <div className={styles.hr}>
        <hr />
        <p>
            {children}
        </p>
    </div>
}
