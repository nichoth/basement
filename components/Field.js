import styles from './Field.module.css'

export function Field ({ name, placeholder, label }) {
    return <div className={styles.field}>
        <label htmlFor={name}>{label}</label>
        <input id={name} type="text" placeholder={placeholder} required />
    </div>
}
