import styles from './Field.module.css'

export function Field (props) {
    var { pattern, name, placeholder, label, type, maxlength, title } = props

    return <div className={styles.field}>
        <label htmlFor={name}>{label}</label>
        <input type={type || 'text'} id={name} placeholder={placeholder}
            maxLength={maxlength} pattern={pattern} title={title} required />
    </div>
}
