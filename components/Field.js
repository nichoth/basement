import styles from './Field.module.css'

export function Field ({ name, placeholder, label, type }) {
    return <div className={styles.field}>
        <label htmlFor={name}>{label}</label>
        <input type={type || 'text'} id={name} placeholder={placeholder}
            required />
    </div>
}
